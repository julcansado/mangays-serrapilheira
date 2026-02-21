
### TEMPERATURE METRICS
| Column Name                     | Unit | Mathematical Operation | Explanation |
|----------------------------------|------|------------------------|-------------|
| mean_annual_temp | °C | mean( mean(T_months)_year ) | Mean of yearly mean temperatures (long-term average temperature) |
| median_annual_temp | °C | median( mean(T_months)_year ) | Median of yearly mean temperatures across 30 years |
| mean_yearly_coldest_month | °C | mean( min(T_months)_year ) | Average of the coldest month from each year |
| mean_yearly_warmest_month | °C | mean( max(T_months)_year ) | Average of the warmest month from each year |
| mean_yearly_temp_range | °C | mean( max(T_months)_year − min(T_months)_year ) | Average annual thermal amplitude |
| mean_yearly_temp_std | °C | mean( std(T_months)_year ) | Mean intra-annual temperature variability |
| interannual_temp_std | °C | std( mean(T_months)_year ) | Variability of annual mean temperature across 30 years |
| interannual_temp_cv | unitless | interannual_temp_std / mean_annual_temp | Normalized interannual temperature variability |

### PRECIPITATION METRICS
| Column Name | Unit | Mathematical Operation | Explanation |
|-------------|------|------------------------|-------------|
| mean_annual_precip | mm | mean( sum(P_months)_year ) | Mean annual total precipitation |
| median_annual_precip | mm | median( sum(P_months)_year ) | Median annual precipitation |
| mean_yearly_driest_month | mm | mean( min(P_months)_year ) | Average driest month across years |
| mean_yearly_wettest_month | mm | mean( max(P_months)_year ) | Average wettest month across years |
| mean_yearly_precip_range | mm | mean( max(P_months)_year − min(P_months)_year ) | Average annual precipitation seasonality |
| mean_yearly_precip_std | mm | mean( std(P_months)_year ) | Mean intra-annual precipitation variability |
| interannual_precip_std | mm | std( sum(P_months)_year ) | Variability of total annual precipitation across 30 years |
| interannual_precip_cv | unitless | interannual_precip_std / mean_annual_precip | Normalized precipitation stability metric |
