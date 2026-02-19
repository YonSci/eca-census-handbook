---
sidebar_position: 1
hide_title: true
---










## Introduction 

> Le cycle de recensements de 2030 sera probablement l'un des plus difficiles en vue de fournir des statistiques actualisées, fiables et comparables. Les taux de réponse aux recensements continuent de baisser dans de nombreux pays et régions, ce qui entraîne des sous-estimations importantes. Combinés à l'héritage de la pandémie de COVID-19, qui a conduit de nombreux pays à reporter leur recensement national, à des difficultés de recrutement de personnel de terrain et à la disparition du financement international relatif à la collecte et à l'analyse des données démographiques, ces facteurs ont contribué à créer un environnement complexe et difficile en vue de la conception, de la mise en œuvre et de la diffusion d'un recensement. Selon la Commission économique des Nations Unies pour l'Afrique (CEA), les sous-estimations et les retards dans les recensements dus à la COVID-19, aux conflits ou aux contraintes financières ont eu pour conséquence qu'environ un Africain sur trois n'a pas été recensé lors de la série de recensements de 2020.
>
> Malgré cet environnement difficile, la disponibilité de nouvelles sources de données et technologies offre aux offices nationaux de statistique (ONS) des solutions alternatives à l'approche traditionnelle du recensement. La collecte de données numériques dans le cadre du recensement à l'aide de tablettes, de téléphones intelligents et d'autres ressources en ligne rend déjà les processus de recensement moins coûteux, plus efficaces et améliore la qualité des recensements. Les progrès récents en matière d'imagerie satellite et de technologie d'intelligence artificielle (IA) ont encore renforcé les capacités d'utilisation de méthodologies alternatives afin de compléter les efforts de collecte de données de recensement. Par exemple, les bâtiments cartographiés à partir d'images satellites à l'aide de l'IA, associés au décompte des personnes obtenu au niveau des petites unités territoriales, peuvent contribuer à établir des estimations détaillées de la population qui peuvent soit soutenir une planification et une mise en œuvre plus efficaces et plus efficientes du recensement, soit fournir des données alternatives relatives à la population dans les zones difficiles à recenser où le recensement ne peut être effectué dans son intégralité.
>
> Ces approches de modélisation statistique ont été élaborées afin d'estimer les populations sur la base de la corrélation entre la densité de population et les données covariables géospatiales. Dans les pays où un recensement n'est pas possible, ces méthodes peuvent être mises en œuvre à faible coût (bien qu'elles nécessitent un niveau minimum de capacité technique) et peuvent fournir d'autres moyens d'obtenir des estimations démographiques plus récentes en vue d'éclairer la planification et la mise en œuvre du recensement.
>
>  
>
> La combinaison de données géospatiales et statistiques permettra aux ONS de produire des données démographiques maillées à très haute résolution (généralement des mailles de 100 m ou 1 km) couvrant l'ensemble du territoire national. Un avantage significatif de cette approche par rapport à la diffusion plus traditionnelle des résultats du recensement réside dans le fait qu'elle offre la flexibilité nécessaire afin d'agréger les mailles en vue d'estimer la population totale à l'intérieur de toute limite définie, sans risque supplémentaire de divulgation. Deux grandes méthodologies peuvent être appliquées afin de produire des estimations démographiques maillées à haute résolution :
>
>  

### Approche descendante

> [La méthode descendante](https://wpgp.github.io/bookworm/gridded-population-estimates.html#Descendante) désagrège les totaux de population connus relatifs à chaque unité administrative plus large (par exemple, les États ou les collectivités locales) en estimations de population maillées plus fines de 100 m. Ces totaux de population fiables peuvent être obtenus à partir des résultats des recensements nationaux de la population et des logements ; ainsi, l'approche descendante d'estimation de la population est pratique lorsque les totaux des recensements récents sont disponibles. Dans le cadre de cette méthode, les estimations démographiques maillées sont produites à l'aide d'algorithmes d'apprentissage automatique (par exemple, des modèles de forêts aléatoires) afin de désagréger les totaux démographiques en fonction des relations entre la densité de population et un ensemble de covariables géospatiales telles que la densité des bâtiments, la distance par rapport au centre-ville ou l'intensité des lumières nocturnes. La désagrégation peut être appliquée à l'ensemble du pays (sans contrainte) ou limitée uniquement aux zones où les établissements ont été cartographiés (avec contrainte).
>
> L'approche descendante de désagrégation de la population permet d'utiliser à la fois des méthodes d'inférence statistique [classiques](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0107042) et [bayésiennes](https://www.sciencedirect.com/science/article/pii/S0143622824002212), offrant ainsi aux utilisateurs un moyen de quantifier les incertitudes dans les estimations des paramètres.
>
>  

### Approche ascendante

> [La méthode ascendante](https://wpgp.github.io/bookworm/gridded-population-estimates.html#Approche ascendante) utilise les données géolocalisées d'une enquête auprès des ménages provenant d'un échantillon de lieux et les adapte à un modèle statistique afin d'estimer la taille de la population des zones non échantillonnées sur la base des relations avec les covariables géospatiales. Cette approche applique des modèles statistiques personnalisés afin d'exploiter au mieux les données d'enquête disponibles en vue d'alimenter le modèle, et l'utilisation de l'inférence statistique bayésienne fournit des estimations probabilistes de l'incertitude dans les estimations des paramètres. Cette approche appropriée nécessite la disponibilité d'un ensemble de données récentes issues d'une enquête géolocalisée représentative au niveau national auprès des ménages ou de données de recensement partielles, et peut être utilisée afin de soutenir la préparation et la mise en œuvre du recensement. Elle constitue un outil utile en vue de combler les lacunes dans les données de recensement dans les pays où aucun recensement récent n'a été effectué ou où l'existence de zones difficiles d'accès a empêché la visite de certains endroits lors d'un recensement récent, ce qui a conduit à des données de recensement incomplètes. Il convient de noter que si cette approche permet de quantifier facilement l'incertitude, elle nécessite également des données démographiques plus détaillées et plus fiables, ainsi que davantage de temps en vue de l'élaboration, de la mise à l'essai et de la mise en œuvre du modèle.
>
>  
>
> La méthodologie adoptée par un ONS sera déterminée par la disponibilité des données d'entrée du modèle. Lorsqu'un pays dispose d'une couverture complète du recensement et souhaite essayer de le décomposer en une grille à haute résolution (100 m ou 1 km), la méthodologie descendante sera appliquée. L'approche descendante a déjà été appliquée au Mali et au Burkina Faso. Lorsqu'un pays dispose de données de recensement incomplètes ou inexistantes, la méthode ascendante sera appliquée. Cette approche ascendante a déjà été appliquée dans plusieurs pays, notamment en République démocratique du Congo, en Zambie et au Nigéria. Il convient de noter que, comme les différentes méthodes nécessitent des données différentes, les estimations de population maillées qu'elles produisent auront des caractéristiques différentes.
>
> Ces approches d'estimation de la population sont également conformes aux méthodes utilisées par la Division de la population des Nations Unies dans l'élaboration de son [rapport relatif aux perspectives démographiques mondiales](https://population.un.org/wpp/). Ces méthodes sont donc suffisamment éprouvées et fiables en vue de fournir des données dénominatrices cohérentes et comparables lorsqu'un recensement ne peut être entièrement réalisé.

### Comparaison de l'utilisation d'approches alternatives à l'ère du recensement numérique par rapport à l'ère du recensement non numérique

> Avant la généralisation des technologies numériques, les alternatives étaient limitées par les contraintes physiques du papier, de la logistique et du traitement manuel des données. L'objectif était principalement de réduire le coût et le temps considérables d'un recensement complet. La technologie numérique, la science des données et la connectivité accrue ont ouvert la voie à de nouvelles alternatives puissantes. L'accent n'est plus mis uniquement sur la réduction des coûts, mais aussi sur la création d'un écosystème de données dynamique et intégré.

