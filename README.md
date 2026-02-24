# TEMPERATURE AND PRECIPITATION METRICS
Source: ERA5 monthly averaged data on single levels (1940–present)  
Monthly averaged reanalysis used: **1985–2015**

---

## TEMPERATURE METRICS

| Column Name | Unit | Mathematical Operation | Explanation |
|-------------|------|------------------------|-------------|
| mean_annual_temp | °C | mean( mean(T_months)_year ) | Long-term mean of annual mean temperature |
| median_annual_temp | °C | median( mean(T_months)_year ) | Median of annual mean temperature across study period |
| mean_yearly_coldest_month | °C | mean( min(T_months)_year ) | Average coldest month across years |
| mean_yearly_warmest_month | °C | mean( max(T_months)_year ) | Average warmest month across years |
| mean_yearly_temp_range | °C | mean( max(T_months)_year − min(T_months)_year ) | Mean annual thermal amplitude |
| mean_yearly_temp_std | °C | mean( std(T_months)_year ) | Mean intra-annual (monthly) temperature variability |
| mean_intraannual_temp_cv | unitless | mean( std(T_months)_year / mean(T_months)_year ) | Mean intra-annual coefficient of variation (relative seasonal variability) |
| mean_seasonality_index_temp | unitless | mean( Σ\|T_month − T̄_year\| / ΣT_month ) | Mean Markham Seasonality Index (temperature concentration strength) |
| interannual_temp_std | °C | std( mean(T_months)_year ) | Interannual variability of annual mean temperature |
| interannual_temp_cv | unitless | interannual_temp_std / mean_annual_temp | Relative interannual variability |

---

## PRECIPITATION METRICS

| Column Name | Unit | Mathematical Operation | Explanation |
|-------------|------|------------------------|-------------|
| mean_annual_precip | mm | mean( sum(P_months)_year ) | Mean annual total precipitation |
| median_annual_precip | mm | median( sum(P_months)_year ) | Median annual total precipitation |
| mean_yearly_driest_month | mm | mean( min(P_months)_year ) | Mean driest month across years |
| mean_yearly_wettest_month | mm | mean( max(P_months)_year ) | Mean wettest month across years |
| mean_yearly_precip_range | mm | mean( max(P_months)_year − min(P_months)_year ) | Mean annual precipitation amplitude |
| mean_yearly_precip_std | mm | mean( std(P_months)_year ) | Mean intra-annual (monthly) precipitation variability |
| mean_intraannual_precip_cv | unitless | mean( std(P_months)_year / mean(P_months)_year ) | Mean intra-annual precipitation coefficient of variation |
| mean_seasonality_index_precip | unitless | mean( Σ\|P_month − P̄_year\| / ΣP_month ) | Mean Markham Seasonality Index (precipitation concentration strength) |
| interannual_precip_std | mm | std( sum(P_months)_year ) | Interannual variability of total annual precipitation |
| interannual_precip_cv | unitless | interannual_precip_std / mean_annual_precip | Relative interannual precipitation variability |

---

# SALINITY METRICS
Source: ORAS5 global ocean reanalysis monthly data (1958–present)  
Consolidated: **1985–2014**  
Operational: **2015**

---

## SEA SURFACE SALINITY (SSS) METRICS

| Column Name | Unit | Mathematical Operation | Explanation |
|-------------|------|------------------------|-------------|
| mean_annual_salinity | PSU | mean( mean(SSS_months)_year ) | Long-term mean annual sea surface salinity |
| median_annual_salinity | PSU | median( mean(SSS_months)_year ) | Median annual mean salinity |
| mean_yearly_freshest_month | PSU | mean( min(SSS_months)_year ) | Mean salinity of freshest month each year |
| mean_yearly_saltiest_month | PSU | mean( max(SSS_months)_year ) | Mean salinity of saltiest month each year |
| mean_yearly_salinity_range | PSU | mean( max(SSS_months)_year − min(SSS_months)_year ) | Mean seasonal salinity amplitude |
| mean_yearly_salinity_std | PSU | mean( std(SSS_months)_year ) | Mean intra-annual salinity variability |
| mean_intraannual_salinity_cv | unitless | mean( std(SSS_months)_year / mean(SSS_months)_year ) | Mean intra-annual salinity coefficient of variation |
| mean_seasonality_index_salinity | unitless | mean( Σ\|SSS_month − S̄_year\| / ΣSSS_month ) | Mean Markham Seasonality Index (seasonal salinity concentration) |
| interannual_salinity_std | PSU | std( mean(SSS_months)_year ) | Interannual variability of annual mean salinity |
| interannual_salinity_cv | unitless | interannual_salinity_std / mean_annual_salinity | Relative interannual salinity variability |
