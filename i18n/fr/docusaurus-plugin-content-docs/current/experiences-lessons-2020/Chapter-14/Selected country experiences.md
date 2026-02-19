---
sidebar_position: 3
hide_title: true
---









## Expériences de certains pays

Le Rwanda et le Togo ont utilisé des méthodologies différentes en vue de l'appariement des données de l'EPR. Le Rwanda a effectué l'appariement à son siège une fois toutes les données de l'EPR collectées. En revanche, le Togo a effectué l'appariement sur le terrain pendant le recensement de l'EPR.

Le **Rwanda** a mené son EPR un mois après le recensement principal, en échantillonnant 180 ZD dans tous les districts, ce qui représente une fraction d'échantillonnage de 0,74 %. L'enquête EPR a utilisé un questionnaire succinct axé sur les données démographiques et les mouvements des ménages par rapport à la nuit du recensement. Le recensement a été effectué par voie numérique à l'aide d'une application CAPI, avec un suivi en temps réel via un tableau de bord. Une nouvelle équipe de 210 agents recenseurs a été recrutée afin de garantir l'indépendance, avec l'appui des chefs d'équipe de district et d'une équipe de suivi centrale. L'appariement entre les données du recensement et celles de l'EPR a été effectué à l'aide d'un algorithme fondé sur Python utilisant des clés d'appariement déterministes qui permettaient des divergences mineures entre les données. Ces clés d'appariement utilisaient des combinaisons de noms, d'âge, de sexe et d'identifiants de ménage, avec des techniques telles que la distance de Levenshtein et des adaptations Soundex afin de tenir compte des nuances linguistiques locales. Malgré l'absence de projet pilote de l'EPR, l'algorithme d'appariement a été affiné au cours de la phase initiale de collecte des données. La stratégie finale combinait un appariement déterministe, associatif, probabiliste et administratif, avec plus de 90 % des enregistrements appariés automatiquement. Les cas non appariés ont été traités par une vérification administrative et un rapprochement sur le terrain. L'utilisation d'outils numériques et la surveillance en temps réel ont considérablement réduit la durée du rapprochement, qui est passée de six mois en 2012 à moins d'un mois en 2022. Les données appariées ont ensuite été utilisées en vue d'une estimation par double système afin d'évaluer la taille et la couverture de la population, ainsi que d'évaluer les erreurs de contenu dans le recensement.

Le **Togo** a mené son cinquième recensement général de la population et de l'habitat (RGPH-5) en novembre 2022, suivi d'une enquête post-censitaire (EPC) en février 2023 afin d'évaluer la couverture et la qualité des données. L'EPC était entièrement numérique et utilisait un système rigoureux d'appariement des données sur le terrain. Un échantillon de 160 zones de dénombrement (ZD) a été sélectionné parmi plus de 10 000 zones cartographiées. Les agents d'enquête ont utilisé des tablettes Android équipées d'une application personnalisée afin de collecter les données relatives aux ménages, notamment leurs caractéristiques démographiques. Chaque équipe de terrain comprenait un chef d'équipe, un responsable du recoupement des données équipé d'un ordinateur portable et d'un outil de recoupement en ligne, ainsi qu'un agent d'enquête. Les données ont été transférées via Bluetooth et Internet afin de permettre un recoupement en temps quasi réel. Le processus de recoupement s'est concentré uniquement sur les résidents présents à la fois lors du recensement et de l'EPC, à l'exclusion des personnes ayant déménagé. Le recoupement était fondé sur la géolocalisation, la taille du ménage et les caractéristiques individuelles, avec un algorithme attribuant des pondérations aux scores de similarité. L'outil en ligne permettait un appariement sur place sans Internet, en affichant côte à côte les données du recensement et de l'EPC en vue d'une comparaison efficace. Les équipes ont également utilisé les listes de ménages du recensement principal afin de résoudre les divergences. Le système a classé les correspondances et généré des tableaux récapitulatifs avec les taux d'omission et de couverture par zone. Cette approche a permis un appariement efficace et localisé ainsi qu'une validation des données en temps réel, même si elle peut soulever des questions quant à l'indépendance du processus de l'EPR.

Lien vers la section des études de cas

<span id="Rwanda" class="anchor"></span>**Rwanda** 

Au Rwanda, l'enquête post-recensement (EPR) a été réalisée un mois après le recensement. Un échantillon de 180 zones de dénombrement (ZD) a été sélectionné dans le cadre de l'enquête EPR, stratifié par district, secteur et zone urbaine/rurale. Chaque district comptait 6 ZD incluses dans l'échantillon. Cela correspond à une fraction d'échantillonnage de 0,74 %. Un court questionnaire a été élaboré, comprenant deux sections, l'une relative aux caractéristiques démographiques des membres du ménage et l'autre relative aux adresses des membres du ménage (personnes n'ayant pas déménagé, ayant déménagé et ayant emménagé) par rapport à la nuit du recensement.

À l'instar du recensement, l'EPR a été réalisée à l'aide d'une application d'entretien individuel assisté par ordinateur (CAPI) et le suivi sur le terrain a été rendu possible grâce à un tableau de bord. Afin de garantir l'indépendance, une nouvelle équipe de recensement composée de 210 personnes a été recrutée et formée dans le cadre de l'EPR. Chaque district disposait également d'un chef d'équipe chargé de garantir l'exhaustivité et la qualité de la collecte des données. Le suivi quotidien du travail sur le terrain a été assuré par une équipe de 10 contrôleurs basés dans les locaux de l'Institut national de la statistique du Rwanda (INSR), avec l'aide du tableau de bord en temps réel. 

Afin d'effectuer l'analyse de l'EPR, une comparaison des enregistrements du recensement et de l'EPR a été effectuée au niveau individuel. Ce processus, appelé « appariement », a été réalisé sur la base des variables les plus susceptibles de faciliter une identification optimale des personnes dans les ensembles de données du recensement et de l'EPR. Les variables suivantes ont été retenues : identification du ménage (HHID), noms, âge, sexe, situation matrimoniale et lien de parenté avec le chef de ménage. Des autocollants ou des marqueurs ont été utilisés afin d'attribuer un identifiant unique (HHID) aux ménages lors du recensement. Cet identifiant unique a été collecté lors du recensement de l'EPR afin de faciliter l'appariement.

Un algorithme informatique a été élaboré en langage de programmation Python afin d'effectuer le processus d'appariement. L'algorithme a utilisé des clés d'appariement déterministes qui trouvent des correspondances entre les enregistrements du recensement et ceux de l'EPR, en tenant compte des erreurs dans certaines données. Par exemple, des fautes d'orthographe dans les noms, des âges légèrement différents. Voir le tableau 1 relatif à un exemple de clés d'appariement. 

***Tableau 1 : Clés d'appariement au sein des ménages élaborées afin de faire correspondre les enregistrements du recensement et de l'EPR à la suite du recensement au Rwanda.*** 

<table style="width:100%;">
<colgroup>
<col style="width: 18%" />
<col style="width: 81%" />
</colgroup>
<thead>
<tr>
<th style="text-align: left;"><strong>Clé d'appariement</strong> </th>
<th style="text-align: left;"><strong>Désignation</strong> </th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;">1. </td>
<td style="text-align: left;">Prénom + Nom + Année + Sexe + Ménage </td>
</tr>
<tr>
<td style="text-align: left;">2. </td>
<td style="text-align: left;">StdLEV1(Prénom)&gt;0,79 + StdLEV(Nom) &gt;0,79 + Année + Mois + Ménage </td>
</tr>
<tr>
<td style="text-align: left;">3. </td>
<td style="text-align: left;">Prénom + Nom + Différence_d'âge<sup>2</sup> + Sexe + Ménage </td>
</tr>
<tr>
<td style="text-align: left;">4. </td>
<td style="text-align: left;">Prénom + Nom + Lien de parenté avec le chef de ménage + Ménage </td>
</tr>
<tr>
<td style="text-align: left;">5. </td>
<td style="text-align: left;">StdLEV(Prénom)&gt;0,79 + StdLEV(Nom) &gt;0,79 + Sexe + Ménage </td>
</tr>
<tr>
<td style="text-align: left;">6. </td>
<td style="text-align: left;">Alphanames3 + Année + Sexe + Ménage </td>
</tr>
<tr>
<td style="text-align: left;">7. </td>
<td style="text-align: left;">StdLEV(Noms alphabétiques)&gt;0,79 + Sexe + Année + Ménage </td>
</tr>
<tr>
<td style="text-align: left;">8. </td>
<td style="text-align: left;">Prénom + StdLEV(Nom de famille)&gt;0,69 + Sexe + Âge + Ménage </td>
</tr>
<tr>
<td style="text-align: left;">9. </td>
<td style="text-align: left;">Prénom + (Nom 1 Rec = Nom 2 EPR ou Nom 2 Rec = Nom 1 EPR) + Âge + Sexe + Ménage </td>
</tr>
<tr>
<td style="text-align: left;">10. </td>
<td style="text-align: left;">StdLEV(Prénom)&gt;0,79 + RLSoundex<sup>4</sup>(Nom de famille) + Différence_d'âge + Sexe + Lien de parenté avec le chef de ménage + Ménage </td>
</tr>
<tr>
<td colspan="2" style="text-align: left;"><p><sup>1</sup> La distance d'édition de Levenshtein normalisée qui mesure le nombre d'insertions, de suppressions ou de substitutions nécessaires afin de transformer un nom en un autre, calculée comme une proportion de la longueur du nom le plus long. </p>
<p><sup>2</sup> La fonction de différence d'âge qui permet une tolérance différente en fonction de l'âge.</p>
<p><sup>3</sup> Alphanames est une variable dérivée qui classe tous les caractères des noms par ordre alphabétique. </p>
<p><sup>4</sup> RLSoundex est la fonction Soundex appliquée au nom, tous les R étant remplacés par des L (cette adaptation a été utilisée au Rwanda car R et L se prononcent de la même manière en kinyarwanda). </p></td>
</tr>
</tbody>
</table>

Le NISR n'a pas mené de projet pilote de l'EPR, ce qui signifie qu'aucune donnée appropriée n'était disponible en vue d'affiner l'algorithme d'appariement automatique avant l'EPR. Les algorithmes ont donc été testés et ajustés au cours des premières semaines de la collecte des données de l'EPR. La stratégie d'appariement finale a utilisé des clés d'appariement déterministes, l'appariement associatif (en utilisant les appariements existants afin de trouver des appariements supplémentaires au sein du même ménage), l'appariement probabiliste et l'appariement administratif. Le système d'appariement administratif Clerical Resolution Online Widget (CROW) a été adapté en vue d'être utilisé avec les données rwandaises. 

Une fois tous les enregistrements de l'EPR disponibles, la stratégie d'appariement finale a été mise en œuvre et plus de 90 % des enregistrements de l'EPR ont été appariés automatiquement. L'appariement administratif a été utilisé afin de trouver d'autres correspondances lorsque le nombre d'erreurs dans les données empêchait de les apparier automatiquement. Des visites sur le terrain et des appels téléphoniques ont été effectués pendant le rapprochement afin de trouver des enregistrements correspondants supplémentaires et de comprendre les raisons des données non correspondantes. 

Une formation intensive bien planifiée et efficacement dispensée aux agents recenseurs, en plus de la technologie utilisée lors de la collecte des données du recensement de la population et des logements du Rwanda 2022 ([RPHC2022](https://www.statistics.gov.rw/datasource/fifth-population-and-housing-census-2022)) a jeté les bases du succès de l'EPR. En outre, la collecte de données numériques à l'aide du CAPI, le suivi en temps réel du travail sur le terrain et l'appariement automatique ont permis de réduire le temps nécessaire à l'appariement de 6 mois en 2012 à moins d'un mois en 2022. 

Une fois le rapprochement terminé, les enregistrements appariés et non appariés ont été analysés afin d'estimer la taille réelle de la population rwandaise et les taux de couverture à l'aide d'une technique statistique appelée « estimation par double système ». En outre, l'analyse des enregistrements appariés a permis d'estimer les erreurs de contenu des enregistrements du recensement. 

De plus amples détails sur la méthodologie utilisée et les résultats de l'EPR sont disponibles dans le [rapport thématique :Enquête post-recensement](https://eur03.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.statistics.gov.rw%2Fpublication%2Fthematic-report-post-enumeration-survey&data=05%7C02%7CRachel.Shipsey%40ons.gov.uk%7Cbb17db56f2284fb8036508dcb138a855%7C078807bfce824688bce00d811684dc46%7C0%7C0%7C638580104136277412%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C0%7C%7C%7C&sdata=SIlfURaJcjHaN6yaUxAHpkOat1ly4zcmUCC3%2F9Hg70M%3D&reserved=0) publiée sur le site Web du NISR.

 

<span id="Tog" class="anchor"></span> **Togo**

Le Togo a procédé à son 5e recensement général de la population et de l'habitat (RGPH-5) en novembre 2022. En février 2023, l'enquête post-censitaire (EPC) a été menée afin d'évaluer, d'une part, le niveau de couverture de la collecte de données et, d'autre part, la qualité des données collectées. À la suite de cette enquête, le taux d'omission et le facteur d'ajustement des données relatifs au RGPH-5 ont été calculés.

Cette enquête était entièrement numérique, avec une méthode rigoureuse de recoupement des données mise en œuvre sur le terrain tout au long de la période de collecte des données. Cette méthode a nécessité un accès quasi instantané aux données de l'EPC et la disponibilité des données de dénombrement. En outre, l'utilisation d'outils numériques a permis une exécution plus rapide et plus efficace des activités de l'EPC selon les normes établies.

L'enquête post-censitaire du Togo s'est concentrée sur un échantillon de 160 zones de dénombrement (ZD) sélectionnées parmi les 10 748 ZD créées lors des travaux de cartographie du RGPH-5. Une application de collecte de données dans le cadre de l'EPC a été conçue sur la base d'un questionnaire qui comprend certaines caractéristiques des personnes au sein des ménages, telles que les noms, l'âge, le sexe, le lien de parenté, l'état civil, etc. Cette application a été déployée sur les tablettes Android utilisées par les agents d'enquête. Chaque équipe de terrain était composée de trois agents d'enquête : un chef d'équipe, un agent chargé de l'appariement des données équipé d'un ordinateur portable doté d'une application Web d'appariement et de la base de données RGPH-5 des ZD assignées.

Sur le terrain, les données collectées auprès des ménages par les agents d'enquête étaient transférées au chef d'équipe via Bluetooth. Le chef d'équipe transférait ensuite les données vers le serveur central via une connexion Internet, puis vers l'ordinateur portable de l'agent chargé du recoupement des données.

Le Togo a adopté l'approche selon laquelle, dans les limites d'une zone de dénombrement donnée, les données de l'EPR doivent être comparées aux résidents vivant dans les ménages au moment du recensement principal. Cette approche ne concerne pas les ménages qui étaient présents lors du recensement principal mais qui ne le sont plus au moment de l'EPR, et ne cherche pas non plus à localiser les anciennes résidences des ménages arrivés après le recensement principal.

Une application Web d'appariement des données a été conçue afin de faciliter l'appariement sur le terrain pendant l'enquête post-censitaire. Dans une zone de dénombrement prédéfinie, les ménages interrogés dans le cadre de l'EPC ont été appariés avec les ménages dénombrés lors de la phase principale du recensement. Le processus d'appariement s'est appuyé sur des critères tels que la géolocalisation, la taille du ménage et certaines caractéristiques individuelles (par exemple, le nom, l'âge, le sexe, le lien de parenté, l'état civil, etc.).

Un algorithme a ensuite été défini afin d'attribuer différentes pondérations en fonction de la similarité des valeurs des critères d'appariement. Sur la base des propositions d'appariement faites par l'application Web, des statuts d'appariement ont été attribués aux ménages et aux individus (appariement confirmé, omis, nouvel arrivant, né après le recensement, hors catégorie).

Au cours de la phase de conception méthodologique, il était essentiel d'organiser la chaîne de collecte et de transfert des données afin d'utiliser de manière optimale le système d'appariement. Dans le cas du Togo, les agents recrutés dans le cadre de l'EPC ont été organisés en équipes, chacune composée d'agents d'enquête, d'un responsable de l'appariement des données et d'un chef d'équipe. Chaque agent d'appariement disposait d'un ordinateur portable équipé d'un système Web doté d'une double interface qui comprenait les données du recensement principal (à gauche) et les données de l'EPC (à droite).

Chaque équipe disposait également de la liste des ménages de leur zone de dénombrement (ZD) attribuée, compilée par l'agent recenseur au cours de la première semaine (semaine de reconnaissance) du recensement principal. Cette liste était utile afin de résoudre rapidement les divergences, par exemple lorsque des ménages affirmaient avoir été recensés mais n'étaient pas apparus dans les données, ou afin de confirmer les ménages qui affirmaient ne pas avoir été recensés.

Les données collectées auprès des ménages par les agents d'enquête sont transférées au chef d'équipe via Bluetooth. Le chef d'équipe envoie ensuite les données au serveur central via une connexion Internet, qui les transfère ensuite à l'ordinateur portable du responsable de l'appariement des données à l'aide de l'application Web d'appariement. L'appariement complet des ménages et des individus s'effectue sur place. Le système de recoupement Web déployé localement (aucune connexion Internet requise) permet le recoupement des ménages et des individus directement sur le terrain.

L'interface du système Web se compose de deux parties : l'une affichant les principales données du recensement (à gauche) et l'autre affichant les données de l'EPC (à droite). Ces parties permettent à l'opérateur de naviguer facilement, d'afficher uniquement les ménages appariés ou non appariés par catégorie et de générer un tableau récapitulatif avec les taux d'omission et de couverture par zone de dénombrement à la fin du processus d'appariement.

