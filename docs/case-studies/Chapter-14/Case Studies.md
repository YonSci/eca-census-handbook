---
sidebar_position: 1
hide_title: true
---

[back to Handbook Chapter 14](/docs/experiences-lessons-2020/Chapter-14/Introduction)


**Rwanda** 

In Rwanda, the post-enumeration survey (PES) was carried out one month after the census enumeration. A sample of 180 enumeration areas (EAs) were selected for the PES stratified by district, sector and urban/rural. Each district had 6 EAs included in the sample. This corresponds to a sampling fraction of 0.74%. A short questionnaire was developed with two sections, one about demographic characteristics of household members and another about household members’ addresses (non-movers, out-movers and in-movers) with reference to Census night.  

Similar to the census enumeration, the PES enumeration was carried out using a CAPI application, and field monitoring was enabled using a dashboard. To maintain independence, a new enumeration team of 210 people were recruited and trained for the PES. Each district also had a Team Leader who was responsible for ensuring completeness and high-quality data collection. The daily monitoring of fieldwork was performed by a team of 10 monitors based at NISR premised supported by the real-time dashboard. 

To perform PES analysis, a comparison of Census and PES records was done at individual level. We call this process matching and it was done basing on variables that are most likely to facilitate an optimal identification of people in both census and PES datasets. These are: household identification (HHID), names, age, sex, marital status and relationship to the head of household. Stickers or marker pens were used to label households with a unique identifier (HHID) when they were enumerated during the census. This unique identifier was collected during PES enumeration to help with matching.  

A computer-based algorithm was developed in Python programming language to perform the matching process. The algorithm made use of deterministic matchkeys which find matches between census and PES records allowing for errors in some of the data. For example, misspelling of names, slightly different ages. See Table 1 for an example of our matchkeys. 

**_Table 1: Within household matchkeys developed for matching census to PES records following the Rwanda census._** 

| MatchKey | Description |
| --- | --- |
| 1 | First Name + Last Name + Year + Sex + Household |
| 2 | StdLEV1(First Name)>0.79 + StdLEV(Last Name) >0.79 + Year + Month + Household |
| 3 | First Name + Last Name + Age_Difference2 + Sex +Household |
| 4 | First Name + Last Name + Relationship to Head of Household + Household |
| 5 | StdLEV(First Name)>0.79 + StdLEV(Last Name) >0.79 + Sex + Household |
| 6 | Alphanames3 + Year + Sex +Household |
| 7 | StdLEV(Alphanames)>0.79 + Sex + Year + Household |
| 8 | First Name + StdLEV(Last Name)>0.69 + Sex + Age + Household |
| 9 | First Name + (Last Name 1 Cen = Last Name 2 PES or Last Name 2 Cen = Last Name 1 PES + Age + Sex + Household |
| 10 | StdLEV(First Name)>0.79 + RLSoundex4(Last Name) + Age_Difference  + Sex + Relationship to Head of Household + Household |

1. The standardised Levenshtein Edit Distance that measures the number of insertions, deletions or substitutions required to transform one name into another calculated as a proportion of the length of the longest name. 2. The age difference function that allows different tolerance in ages depending on the age  3.  Alphanames is a derived variable that puts all characters of the names into alphabetical order 4. RLSoundex is the Soundex function applied to the name with all Rs replaced with Ls (this adaption was used in Rwanda because R and L are pronounced the same in Kinyarwanda). 

NISR did not carry out a PES pilot which meant that there was no suitable data available for tuning the automatic matching algorithm prior to the PES. Therefore, the algorithms were tested and tuned during the first weeks of the PES data collection. The final matching strategy made use of deterministic matchkeys, associative matching (using existing matches to find additional matches within the same household), probabilistic matching and clerical matching. The CROW clerical matching system was adapted for use with the Rwandan data. 

Once all the PES records were available, the final matching strategy was run and over 90% of the PES records were matched automatically. Clerical matching was used to find more matches where the amount of error in the data meant that these matches could not be made automatically. Field visits and telephone calls were done during reconciliation to find additional matching records and understand reasons behind the unmatched data. 

Well planned and effectively delivered intensive training for the enumerators, in addition to the technology employed during data collection of the Rwanda Population and Housing Census 2022 ([RPHC2022](https://www.statistics.gov.rw/datasource/fifth-population-and-housing-census-2022)) laid the foundation for PES's success. Additionally, digital data collection using CAPI, real time field work monitoring and automatic matching reduced the time required for matching from 6 months in 2012 to less than a month in 2022. 

Following completion of the matching, the matched and unmatched records were analysed to estimate the true population size of Rwanda and coverage rates using a statistical technique called dual system estimation. Furthermore, analysis of the matched records helped to estimate content errors of the census records. 

Further details on the methodology used and the PES findings are available in the [Thematic Report: Post Enumeration Survey](https://eur03.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.statistics.gov.rw%2Fpublication%2Fthematic-report-post-enumeration-survey&data=05%7C02%7CRachel.Shipsey%40ons.gov.uk%7Cbb17db56f2284fb8036508dcb138a855%7C078807bfce824688bce00d811684dc46%7C0%7C0%7C638580104136277412%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C0%7C%7C%7C&sdata=SIlfURaJcjHaN6yaUxAHpkOat1ly4zcmUCC3%2F9Hg70M%3D&reserved=0) which has been published on the NISR website.  

**Togo**

Togo conducted its 5th General Population and Housing Census (RGPH-5) enumeration in November 2022. In February 2023, the Post-Census Survey (EPC) was conducted to evaluate, on the one hand, the coverage level of the data collection and, on the other hand, the quality of the collected data. Following this survey, the omission rate and the data adjustment factor for the RGPH-5 were calculated.

This survey was fully digital, with a rigorous data matching method implemented on the field throughout the data collection period. This method required near-instantaneous access to the EPC data and the availability of the enumeration data. Furthermore, the use of digital tools enabled faster and more efficient execution of EPC activities according to the established standards.

The Post-Census Survey of Togo focused on a sample of 160 Enumeration Zones (ZD) selected from the 10,748 ZD created during the RGPH-5 mapping work. A data collection application for the EPC was designed based on a questionnaire that includes certain characteristics of individuals within households, such as names, age, gender, relationship, marital status, etc. This application was deployed on the Android tablets used by the survey agents. Each field team consisted of three survey agents: one team leader, one data matcher agent with a laptop equipped with a web-based matching application, and the RGPH-5 database of the assigned ZDs.

On the field, the data collected from households by the survey agents was transferred to the team leader via Bluetooth. The team leader then transferred the data to the central server via an internet connection, and subsequently to the laptop of the data matcher agent.

Togo took the approach that, within the boundaries of a given enumeration zone, the PES data should be matched to residents living in the households during the time of the main census. This approach does not concern households that were present during the main census but are no longer present at the time of the PES, nor does it seek to locate the previous residences of households that arrived after the main census.

A web-based application for data matching was designed to facilitate matching on the ground during the Post-Census Survey. In a predefined enumeration zone, households surveyed in the EPC were matched with households enumerated during the main census phase. The matching process was based on criteria such as geo-location, household size, and certain individual characteristics (e.g., name, age, gender, relationship, marital status, etc.).

An algorithm was then defined to assign different weights depending on the similarity of the matching criteria values. Based on the matching proposals made by the web application, matching statuses were assigned to households and individuals (confirmed match, omitted, new arrival, born after census, out of category).

During the methodological design phase, it was crucial to organize the data collection and transfer chain to optimally use the matching system. In Togo's case, the agents recruited for the EPC were organized into teams, each consisting of survey agents, a data matcher, and a team leader. Each matcher had a laptop with a web system featuring a dual interface that included data from the main census (on the left) and data from the EPC (on the right).

Each team also had the list of households in their assigned ZDs, compiled by the enumerator during the first week (the reconnaissance week) of the main census. This list was useful for quickly resolving discrepancies, for example, when households claimed to have been enumerated but were not matched, or for confirming households that claimed not to have been enumerated.

The data collected from households by survey agents is transferred to the team leader via Bluetooth. The team leader then sends the data to the central server via an internet connection, which is then transferred to the data matcher’s laptop with the matching web application. The full matching of households and individuals takes place on-site. The web matching system deployed locally (no internet connection required) allows the matching of households and individuals directly on the ground.

The web system interface consists of two parts: one displaying the main census data (left) and the other displaying EPC data (right). These parts allow the operator to navigate easily, display only matched or unmatched households by category, and generate a summary table with omission and coverage rates by enumeration zone at the end of the matching process.


[back to Handbook Chapter 14](/docs/experiences-lessons-2020/Chapter-14/Introduction)
