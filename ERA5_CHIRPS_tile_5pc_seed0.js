// Code for sampling 5% of mangrove pixels per tile

var tiles = ee.FeatureCollection("users/julcansado/br_tiles");
var hmax = ee.ImageCollection("projects/sat-io/open-datasets/GLOBAL_MANGROVE_HT_TANDEMX").mosaic()

var projection = hmax.projection() 
var scale = 12
Map.addLayer(tiles)
hmax = hmax.reproject({crs: hmax.projection(), scale: scale})

var mangrove_mask = hmax.gte(0).rename('mangrove')
Map.addLayer(mangrove_mask.unmask(0))

var randomImage = ee.Image.random(42).reproject({crs: hmax.projection(), scale: scale})
var randomMangrove = randomImage.updateMask(mangrove_mask);

var mangroveSampleMask = randomMangrove.lt(0.05);
var start_date = 2015
var projection = hmax.projection();
print(tiles.first());

// Tile processing function
var processTile = function(tile) {
  
  var geom = tile.geometry();
  var tile_id = tile.get('fid');
  

  // ---------------- ERA5 ----------------
  var ERA5 = ee.ImageCollection('ECMWF/ERA5/MONTHLY')
      .filterDate(start_date+'-01-01', start_date+'-12-31')
      .filterBounds(geom)
      .select(['mean_2m_air_temperature','total_precipitation']);

  var ERA5_reduced = ERA5.reduce(
      ee.Reducer.mean()
        .combine(ee.Reducer.stdDev(), null, true)
        .combine(ee.Reducer.variance(), null, true)
        .combine(ee.Reducer.max(), null, true)
        .combine(ee.Reducer.min(), null, true)
  );

  var final_ERA5 = ERA5_reduced.rename([
      'ERA5_temp_2m_mean', 'ERA5_prec_mean',
      'ERA5_temp_2m_std',  'ERA5_prec_std',
      'ERA5_temp_2m_variance', 'ERA5_prec_variance',
      'ERA5_temp_2m_max', 'ERA5_prec_max',
      'ERA5_temp_2m_min', 'ERA5_prec_min'
  ]).multiply(1000)
   .reproject({crs: projection, scale: scale});


  // ---------------- CHIRPS ----------------
  var CHIRPS = ee.ImageCollection('UCSB-CHC/CHIRPS/V3/PENTAD')
      .filterDate(start_date+'-01-01', start_date+'-12-31')
      .filterBounds(geom)
      .select('precipitation');

  var CHIRPS_reduced = CHIRPS.reduce(
      ee.Reducer.mean()
        .combine(ee.Reducer.stdDev(), null, true)
        .combine(ee.Reducer.variance(), null, true)
        .combine(ee.Reducer.max(), null, true)
        .combine(ee.Reducer.min(), null, true)
  );

  var final_CHIRPS = CHIRPS_reduced.rename([
      'CHIRPS_prec_mean',
      'CHIRPS_prec_std',
      'CHIRPS_prec_variance',
      'CHIRPS_prec_max',
      'CHIRPS_prec_min'
  ]).reproject({crs: projection, scale: scale});


  // ---------------- Combined Image ----------------
  var lonLat = ee.Image.pixelLonLat()
      .rename(['longitude', 'latitude'])
      .reproject({crs: projection, scale: scale})
      
  var pixelID = lonLat
    .multiply(100000)         
    .abs()
    .toInt()
    .reduce(ee.Reducer.sum())
    .abs()
    .rename('pixel_id');

  var image_sample = hmax.rename('height')
      .addBands(final_ERA5)
      .addBands(final_CHIRPS)
      .addBands(lonLat)
      .addBands(pixelID)
      .addBands(mangrove_mask)
      .updateMask(mangroveSampleMask);


//   // ---------------- Sample ----------------
var samples = image_sample.sample({
    region: geom,
    scale: scale,
    seed: 0,
    projection: projection,
    dropNulls: true
}).map(function(f){
      return f.set('fid', tile_id);
  });

  return samples;
};


var allSamples = tiles.map(processTile).flatten();

print(allSamples.limit(10));

var tileList = tiles.toList(tiles.size());
var nTiles = tiles.size().getInfo();

for (var i = 0; i < nTiles; i++) {
  
  var tile = ee.Feature(tileList.get(i));
  var tile_id = tile.get('fid').getInfo();
  
  var samples = processTile(tile);

  Export.table.toDrive({
    collection: samples,
    description: 'ERA5_CHIRPS_tile_pixelID_sample20_12m_2015_' + tile_id,
    folder: 'GEE_serrapilheira_2015',
    fileFormat: 'CSV'
  });
}
