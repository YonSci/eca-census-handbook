---
sidebar_position: 2
hide_title: true 
---

## Key implementation areas in a digital census for deploying and supervision of field staff

The following sections describes the technology available to resolve issues in the field and via the central call center, monitor the progress of the enumeration in real-time using dashboards, track enumerators in the field and automation of payment of field staff.

### Resolving Issues in the Field

The Census Field Management Tool is a digital solution developed to address common challenges encountered during census, such as inconsistent support to enumerators in the field, difficulty in prioritization of issues, lack of self-help, and slow response to challenges faced during data collections. It consists of two key applications, a mobile application used by enumerators and supervisors, and a web application used by support providers who are typically stationed at the central or regional offices. The adoption of this tool by countries has shown a positive impact including improved data accuracy and efficiency, reduced time required to resolve issues, and enhanced collaboration and communication between field enumerators and support providers.

The digital solution is developed to improve the census process by providing a centralized platform for managing and tracking issues reported by field enumerators. This system is composed of two applications:

*   A **mobile application** installed on the data collection devices. This enables field enumerators to request help, access self-help resources, and communicate with support providers through messaging and notification options.
*   A **web application** that provides a platform for support providers to manage and track issues, collaborate with each other, and access additional data such as agent/device history and logs.

The Census field management tool offers various features that improve the efficiency and accuracy of the census process. These features include:

*   Standardized workflow
*   Communication tools
*   Integrations with other systems
*   Self-help
*   Prioritization
*   Customizable options for both the mobile and web applications.

The standardized workflow ensures consistent support to enumerators and supervisors, while data provided from the mobile application enables support providers to diagnose and resolve issues more quickly. In addition, the tools include messaging and notification options, improving collaboration and communication between enumerators and support providers. Finally, the system is integrated with other systems, such as the census operation monitoring dashboard for tracking status and providing insight and time take to resolve an issue during census.

Zimbabwe was the first country to adopt the field management tool for census in the 2020 Census round. Other countries that have identified the benefits of the tool and have either started using it on pilot or are in the process of customizing it include Namibia, Uganda, Benin, and Burundi. The customizable nature of the tool allows it to be adapted to the specific needs and requirements of each country, making it a flexible and scalable solution for census processes globally.

The adoption of the census field management tool has significantly impacted the census process. It has improved efficiency by providing a centralized platform for managing and tracking issues reported on the field. The tool has also reduced the time required to resolve issues, enhancing the efficiency of support providers. Moreover, it has improved collaboration and communication between field agents and support providers, ensuring that issues are addressed promptly, and enumerator and supervisors feel supported throughout the census process.

The most frequently used features of the issues tracker include the self-help function, the messaging and notification options. The self-help function allows enumerators to search for solutions to common issues on their own, reducing the burden on the support team. The messaging and notification options allow for real-time communication between the enumerators and the support team, ensuring that issues are addressed in a timely manner. Finally, data integration provides support providers with additional context and history about the enumerators and supervisors and their devices, helping them to better understand and resolve issues.

In conclusion, the census field management tool (issues tracker) was a valuable addition to ECA’s support to countries. This tool impacts an area that is often not addressed yet critical to census taking. Like many digital tools it is evolving and addressing key areas of country needs.

### Census support center

Given that a census exercise runs into various logistical and technical issues, it is very important to have in place a system of handling and resolving these issues ahead of time. A support center, staffed with knowledgeable operators and the right information at their fingertips will ensure that the exercise is able to resolve arising issues on time and easily. Common challenges include but are not limited to: Inconsistent support provided to field agents; lack of prioritization of issues; lack of mechanisms for self-help; untimely response, etc.

UNECA developed a support center system (with a backend system and a field agent application) that is easily customizable and deployable and integrated with the UNECA tablet provisioning system to help address the challenges highlighted above. The application comes with a dashboard to monitor Issue resolution for management. The flow of the issues can be summarized as shown below:




source: ECA

This application has been used in Botswana, Ghana, Zimbabwe, Zambia, and Namibia with successful and encouraging feedback.

### Real-time Monitoring with Dashboards

Digital platforms provide supervisors with tools to monitor enumerator progress and performance, track coverage and identify areas that may have been missed, and review data submitted by enumerators and provide feedback.

Examples of supervisory tools include supervisor dashboards which display enumerator activity, completion rates, and error flags; and re-interview modules which allow supervisors to conduct follow-up interviews to verify data accuracy.

Indicators monitored can include:

*   Number of households and individuals enumerated.
*   Data completeness rates (percentage of questionnaires fully filled).
*   Enumerator productivity (number of interviews per day).
*   Geographic coverage (percentage of enumeration areas completed).
*   Identification of outlier cases (e.g., unusually long or short interviews).

Examples of dashboard software or tools (Note: Specific recommendations depend on a country's infrastructure and needs) include:

*   Census and Survey Monitoring Dashboard: Designed to work with various census questionnaire databases and offers customizable indicators.
*   Geospatial Information System (GIS) dashboards: Allow for visualization of enumeration progress on maps, providing insights into geographic coverage and potential gaps.

By comparing these indicators against pre-defined targets, census managers can proactively allocate resources, address bottlenecks, and ensure the enumeration stays on schedule and maintains quality.

UNECA has developed a robust census and survey monitoring dashboard. In the 2020 Census round many countries including Kenya, Rwanda, Namibia, Sierra Leone, Seychelles, Zimbabwe, Liberia, Ghana, Mauritius, Zambia, and Nigeria were all supported to use the dashboard.

Key features of the UNECA census monitoring dashboard are as follows:

●       It is designed to work with any census questionnaire database.

●       It is easy to deploy and requires only read-only access to the census database.

●       The indicators to be monitored have increased daily and vary from country to country. Indicators may provide insights on coverage, data quality and operational metadata including but not limited to enumerated number of households, enumerated population, Total Fertility Rate, population distribution, population pyramid, average interview time, etc.

●       The dashboard presents these indicators using the most intuitive visualizations, such as charts, infographics, maps, and tables. These components are designed to convey summarized information at different levels of geographic area.

●       Users have options to view indicators at the national level or drill down to the geographic area to zoom in for a narrow geographic coverage for more focused information. 

●       For selected indicators, the dashboard captures target and/or expected values to compare with the actual census performance.

●       The dashboard is also equipped with a multi-language feature, currently working in English and French, with the language framework already implemented to include local languages if the requirements arise.

●       A role-based access scheme is implemented in the dashboard, which allows system administrators to define roles with privileges and assign them to system users. Different user groups can access only those indicators of interest instead of overloading users with all the available indicators.

●       Users can also be restricted from viewing information filtered to selected geographic areas per the countries' specific requirements.   

### Enumerator Tracking

The integration of GPS technology into digital enumeration devices allows for the tracking of enumerator movements. This has several benefits:

*   It helps to ensure comprehensive coverage of assigned enumeration areas, minimizing the risk of omissions.
*   It provides supervisors with a tool to monitor enumerator progress and identify areas where they may be facing difficulties or require support.
*   It can enhance the security of enumerators, particularly in challenging or remote areas.

      Software and technologies used for enumerator tracking include:

*   ArcGIS Survey123: This tool can capture and track location data during enumeration.
*   Custom-developed mobile applications: Some countries may develop their own applications with GPS tracking functionality.

### Remuneration of field personnel

Experiences in the 2020 Census round have demonstrated the need for a more efficient method of paying census field staff. Due to the huge number of people being employed on a temporary basis, it is important to have an automated system in place that enables straight forward payment and tracking of payments. Information required to make electronic payments, such as bank details should be collected at the time of recruitment using the [automated recruitment system](file:///C:/Users/ymersha/Downloads/e-cencus-handbook/Chapter7_Supervision_to_upload.docx#_CHAPTER_SEVEN:_Recruitment). It should be borne in mind that the payroll system generally used by the census implementing institution may not be adequate to cope effectively with the huge number of additional payments required for temporary staff during the census. The use of an electronic payment platform makes it easier to manage the bulky payments expected during the census process.