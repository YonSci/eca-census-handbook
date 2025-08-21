---
sidebar_position: 1
hide_title: true
---

[back to Handbook Chapter 15](/docs/experiences-lessons-2020/Chapter-15/Selected-Country-Experiences)


**Burkina Faso**

Burkina Faso’s National Institute for Statistics and Demography (INSD) carried out its fifth population and housing census in late 2019, but security issues in the north and east of the country meant that some areas could not be fully enumerated.

In collaboration with UNFPA and WorldPop, the Institut National de la Statistique et de la Démographie (INSD) co-developed methods for predicting population numbers in areas where enumeration could not take place and producing gridded estimates for the full country.

**Papua New Guinea**

The National Statistics Office of Papua New Guinea (PNG) collaborated with WorldPop on geospatial modelling to estimate PNG's population after COVID-19 disrupted their 2021 census plans. The approach integrated satellite imagery to map building locations, with sample population data from census preparations and malaria bednet distribution surveys. This data was combined with over 50 different geospatial datasets including land cover types, infrastructure, and climate to identify statistical relationships between population density and environmental factors.

The modelling process employed an innovative two-stage approach to overcome the challenge of forest canopy-covered settlements that weren't visible in satellite imagery. First, they developed a model to predict settlement presence even when buildings couldn't be seen from above, then incorporated these predictions into the population estimation model. Multiple statistical models were tested to find optimal correlations between sample population data and geospatial features, with the final selection providing population estimates with 95% confidence intervals at various administrative levels (census unit, district, province, and national).

Technical challenges included data interoperability issues between government datasets and satellite imagery, boundary matching problems, and gaps in data coverage. The final model estimated PNG’s 2021 population at 11.78 million (with a 95% confidence interval of 11.64-12.03 million), broken down by sex and age classes across different administrative levels. All methods, datasets, and documentation were made openly available through WorldPop's Open Population Repository and the UN's Humanitarian Data Exchange, creating a valuable resource for PNG's future census planning.

**Cameroon**

Cameroon's last national census was conducted in 2005, and the country has yet to finalise preparations for its Fourth General Population, Housing, and Agricultural Census (GPHC). The lack of recent census data has created significant demographic gaps, particularly in the Far North, Northwest, and Southwest regions, which were excluded from the 2018 pilot census due to security concerns.

To address these data gaps, the National Institute of Statistics (INS) partnered with WorldPop to develop innovative geospatial population modelling. This approach integrates multiple data sources, including georeferenced survey data, satellite-based settlement maps, and building footprints to generate high-resolution 2022 population estimates at 100m grid cell. The method has proven resource-efficient by leveraging existing national survey data with advanced Bayesian statistical techniques to produce essential demographic estimates, particularly for crisis-affected and inaccessible areas.

The resulting gridded population data has been utilised across numerous applications, including post-stratification adjustments for household surveys, vaccination coverage assessments, and presidential election planning. Additionally, this data enabled the creation of Cameroon's first up-to-date digitised pre-census enumeration area and national sampling frame, which is now being used for major surveys including the Multiple Indicator Cluster Survey (MICS), the Cameroon Household Survey on Living Conditions (ECAM 6), and the Cameroon Demographic and Health Survey (CDHS-VI).

Though the current gridded population estimates provide valuable insights, they cannot fully replace a comprehensive national census, which remains a top priority despite technical constraints. Nevertheless, these estimates represent the only gridded population data co-developed with the Government of Cameroon and serve as the sole source of granular population figures, especially for hard-to-reach areas, supporting critical health interventions, socioeconomic planning, and census preparation efforts.

**Zambia**

Zambia had expected to conduct a national population and housing census in 2020, but due to the COVID-19 pandemic and funding constraints, the census was delayed until 2022. The previous census was conducted in 2010. WorldPop, along with other project partners, started work with the Zambia Statistics Agency (ZamStats) in 2018 during the intercensal period, as part of the [GRID3 project](https://grid3.org/about-us).

As part of the GRID3 project, WorldPop worked with ZamStats to develop [bottom-up modelled population estimates](https://grid3.org/news/zambia-partners-with-grid3-to-produce-pop-estimates). Population counts from existing household survey listings and pilot census cartography, were integrated with detailed geospatial data on buildings in a Bayesian statistical modelling framework. Modelled estimates included gridded counts of population, for grid cells of approximately 100m x 100m across the country, along with statistical estimates of uncertainty.

The completion of the bottom-up modelled population estimates in early 2020, coincided with the early stages of the COVID-19 pandemic. Following review and approval of the estimates by ZamStats, the dataset was openly published as operational population estimates, and used in a range of applications. This included [integrating the modelled population estimates into detailed microplanning maps](https://grid3.org/news/zambia-control-malaria) to support the National Malaria Elimination Centre in identifying where to deploy indoor residual spraying or insecticide-treated nets, as part of malaria control programming. Subsequently the population estimates were used [microplanning maps to support the national COVID-19 vaccination roll-out](https://grid3.org/news/maps-covid19-vaccination-zambia) by the Enhanced Programme on Immunisation and Ministry of Health.

In preparing for the 2022 census, ZamStats were also interested in exploring modelled estimates of household counts. Based on the bottom-up modelled population estimates and survey data on household size, WorldPop provided ZamStats with estimates of household counts, which were intended to support in reviewing enumeration areas (EAs). In particular, identifying where the number of households in a single EA may be too large, necessitating potential adjustment of EA boundaries.

The sixth National Population and Housing census was completed in 2022, and was Zambia's first fully georeferenced census, with the location of all residential households recorded nationally. Following the completion of the census, WorldPop worked with ZamStats to produce top-down gridded estimates from the preliminary census results. Ward-level counts of total population were spatially disaggregated using a top-down approach, with geolocated household locations used as a mask to spatially constrain population estimates to the subset of grid cells with residential households recorded. The resulting gridded population estimates are aligned with the preliminary census results on total population, but provide population estimates at 100m spatial resolution, enabling insights into the spatial distribution of population at the sub-ward level. These gridded estimates are expected to be updated based on the final census data in 2025.

Work to compare the Zambia bottom-up modelled estimates against the subsequent 2022 census results is ongoing.

**Ethiopia**

Ethiopia has not conducted as official census since 1974. They therefore have significant data gaps that make the planning and delivery of policy difficult without the detailed evidence to support it.

In 2023, the Ethiopian Statistical Service (ESS) and UNFPA approached WorldPop about support to model population at the national level based on available survey data. Both bottom-up and top-down methods were considered, but based on the availability of 2015-17 census cartography data with complete coverage for the country, a top-down methodology was selected.

The household points from the cartographic survey were combined with the administrative boundaries to produce a count of the number of households per administrative area, and these were then integrated with geospatial covariates such as distance to specific land cover classes, mean precipitation and temperature, slope and elevation, distance to coastline, schools, health facilities, market places, roads, built settlements, and night-time lights to produce the modelled estimates. Because building footprints contain different structure types (e.g. industrial areas, warehouses), information on the non-residential status of the buildings was also used with the residential characteristics of the building footprints were derived from the global human settlement layer.

Population estimates for the whole of Ethiopia were produced, and work is now taking place to validate and refine these estimates so that they can be published by ESS.

[back to Handbook Chapter 15](/docs/experiences-lessons-2020/Chapter-15/Selected-Country-Experiences)

