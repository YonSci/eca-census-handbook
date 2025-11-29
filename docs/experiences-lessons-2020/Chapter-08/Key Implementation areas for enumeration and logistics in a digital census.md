---
sidebar_position: 2
hide_title: true 
---

## Key Implementation areas for enumeration and logistics in a digital census

### Provisioning of Devices

Census tablet provisioning is basically “_getting the tablets from factory state to enumeration readiness_”. It involves loading each tablet with all the necessary resources that it requires to be used by enumerators to collect and transmit data from the field. The resources to upload on the tablets include mobile apps required for the enumeration (such as CSEntry), and data files (such as questionnaires, user manuals, navigable maps). Resources such as maps are specific to an area, so each tablet might have to receive different maps.

To help with the distribution of customised data to each tablet, consider first assigning unique identifiers to each tablet then use those on a computer system to “assign” each tablet to a respective area (Enumeration Area (EA)). The provisioning process would then have to look up assignments and deploy the respective payload for each tablet. 

The United Nations Economic Commission for Africa (UNECA) developed an end-to-end provisioning system which is made up of a back-end system, mobile apps for copying data and quality control, and a tablet decommissioning system that will reset all tablets to factory state once the census exercise is over. This technology has been used in the 2020 round in various countries including: Egypt, Kenya, Sierra Leone, Ghana, Seychelles, Zimbabwe, and Mauritius. 

The provisioning process can be summarised and demonstrated as shown in Figure 8.1 below.

Figure 8.1: Process of provisioning tablets

![Process of provisioning tablets](./static/img/Figure8.1.png)

Some advantages of the automated provisioning process include:

- Minimises possible human error that would arise from doing this manually in a monotonous manner.

- Saves on financial and human resource costs, the system for provisioning of tablets works over Wi-Fi and requires little human intervention.

- Capability of provisioning multiple tablets at once, thereby cutting down on the time it takes to get the tablets ready.

Depending on the Android version installed on devices, there are alternate methods of provisioning devices such as by directly connecting multiple devices to computers/laptops via USB ports and then using UNECA’s provisioning script to “send” the requisite files to the respective devices. This method, in general, will take more time and perhaps more resources (in the form of computers) but also requires less infrastructure setup and is also the only alternative for devices running on an Android version greater than 10.

### Pre-enumeration listing of households.

The cartographic mapping undertaken prior to enumeration provides the number of EAs and management areas, estimated number of households and population as well as information about problem areas for planning purposes (see [cartographic mapping](file:///C:/Users/ymersha/Downloads/e-cencus-handbook/Chapter8_Enumeration_to_upload.docx#_CHAPTER_THREE:_Geospatial)). Just before the enumeration period, a household listing may be undertaken to get a more accurate estimate of the number of households in each EA as a way of quality control to measure coverage. This pre-enumeration household listing should be carried out immediately after the training of enumerators and before the start of enumeration. An ideal EA should be conversed by an enumerator within one day during the pre-enumeration household listing exercise. The listing exercise should preferably capture the Global Positioning System (GPS) coordinates of the households, name of household head, number of usual members of the given household among other variables. 

The objectives of pre-enumeration household listing exercise include:

- Aid in evaluating the expected workload during the planned days of enumeration

- Aid in monitoring the level of coverage as enumeration progresses 

- Give a snapshot of the expected population

- Gauge the effectiveness of data transmission to the server

### EA identification

Most of the censuses in Africa during the 2020 PHC round used geospatial data during enumeration. Maps showing EAs provide a means to ensure full coverage of the census and support supervision of enumeration activities. During the census, maps assist enumerators to easily identify their assigned EAs. EA identification is the process of establishing census enumeration unit boundaries.

In the digital era, high resolution maps of the respective areas of work are uploaded on enumerators and supervisor’s tablets using various software that are compatible with the data collection application. The handheld devices therefore contain EA maps with addresses detailing assignments for geo tracking to ensure complete coverage of an EA as well as satellite imagery for housing unit identification.

The objectives of using maps during enumeration is to:

- Ensure that correct EAs are identified and locate the structures and households.

- Ensure there is completeness of enumeration coverage.

- Aid the enumerator to move systematically within the EA. 

- Assist supervisors to allocate work, monitor progress and supervise the enumerators.

### Census Data Collection

In the 2020 PHC round, a few African countries started to explore multimodal enumeration methods such as face-to-face interview with an electronic questionnaire, telephone interview, self-enumeration with a paper questionnaire collected by enumerators, self-enumeration with a paper questionnaire returned by mail, self-enumeration via the Internet, register-based enumeration, and use of pre-existing administrative records. These data collection approaches can either substitute or complement the traditional face-to-face or used in combination (multi-mode method).

During data collection, the following should be in place:

- A hierarchical field organisation structure, the central level being responsible for monitoring the enumeration of the entire country, the regional level focusing on preparing and conducting the data collection process, the local level mainly to provide census enumerators and their immediate supervisors within their operational area during the enumeration. The local level should have IT-related skills.

- A real time online monitoring tool for successful field enumeration, it is desirable to transfer data immediately after completing the enumeration of each household. This tool can be set up at the regional level to complement the national system. UNECA has provided support to countries in this area through field monitoring dashboards, issue trackers and set up of call centres. See also [Deployment and supervision of field personnel](file:///C:/Users/ymersha/Downloads/e-cencus-handbook/Chapter8_Enumeration_to_upload.docx#_Deployment_and_Supervision).

- A well-documented data transmission plan to support enumeration efforts. See also [Data capture, transmission and management](file:///C:/Users/ymersha/Downloads/e-cencus-handbook/Chapter8_Enumeration_to_upload.docx#_Data_Capture,_Transmission).
