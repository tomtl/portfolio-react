export const portfolioItems = [
  {
    id: 0,
    name: "Risk Modeller",
    title: "MapBox GL and Turf.JS Geospatial Analysis App",
    abstract: "Nitrate Cancer Risk geospatial analysis web app",
    src: "images/risk-modeller-sm.png",
    srcLarge: "images/risk-modeller-sm.png",
    link: "/risk-modeller",
    appLink: "https://tomtl.github.io/risk-modeller",
    altText: "Nitrate cancer risk modeller",
    summary: "Investigates the spatial relationship between well nitrate levels and cancer rates in Wisconsin.",
    description: "This application investigates the spatial relationship between well nitrate levels and cancer rates in Wisconsin. Nitrate levels are measured as part of well water quality tests. Cancer occurrences were catalogued over a ten year period.\n\n This application sets out to provide a way for the user to manipulate the distance decay weight k of the nitrate levels data when carrying out a linear regression between well nitrate readings and tract level cancer rates. The interface provides an easy way for users to work with the data, understand the results, and iterate over multiple values of k.\n\n The positive m value of the regression suggests that as nitrate levels increase, so do cancer rates. The comparison of the cancer rates calculated by the regression have a similar spatial distribution to the actual cancer rates, with higher rates in the south. The strength of the relationship between nitrate levels and cancer rates is low with the r-squared level suggesting the nitrate levels are only explaining 5% of the variance in cancer rates. "
  },
  {
    id: 1,
    name: "Forest Map",
    title: "ArcGIS JS with Postgres National Forest App",
    abstract: "White Mountain National Forest Discovery App",
    src: "images/forest-map-mobile-small.png",
    srcLarge: "images/forest-map-large.png",
    link: "/forest-map",
    appLink: "https://tomtl.github.io/forest-map",
    altText: "National forest map app",
    summary: "White Mountain National Forest discovery web map application.",
    description: "The White Mountain National Forest Discovery App is designed to inspire users to explore the park by finding and visiting activity sites and also recommending activity sites and unmarked locations to other people. The app is a mobile web mapping application built using the ArcGIS Javascript API with data stored on a Postgres/PostGIS database hosted by Carto. Users can see and research activity sites on the map, find activity sites near a location, and create reviews of sites and locations."
  },
  {
    id: 2,
    name: "US Aviation",
    title: "Apache Spark Geospatial Analysis",
    abstract: "Geospatial analysis of U.S. domestic aviation market.",
    src: "images/us-aviation.png",
    srcLarge: "images/us-aviation.png",
    link: "/aviation",
    appLink: "images/us-aviation.pdf",
    altText: "Apache Spark geospatial analysis",
    summary: "Geospatial analysis of U.S. domestic aviation market.",
    description: "Geospatial analysis of U.S. domestic aviation market using Apache Spark and Geospark package. This study uses Apache Spark and flight summary data from the U.S. Department of Transportation to investigate market conditions in the U.S. domestic passenger aviation industry. Database design and implementation steps are discussed and detailed for Apache Spark with the Geospark package, using Scala and the data frames API. The database includes geospatial geometry fields and results are shown on maps created with QGIS."
  },
  {
    id: 3,
    name: "US Power Generation",
    title: "Leaflet interactive web map",
    abstract: "State power generation by year and power source",
    src: "images/leaflet-power.png",
    srcLarge: "images/leaflet-power.png",
    link: "/power",
    appLink: "https://tomtl.github.io/leaflet-power",
    altText: "Power source web map",
    summary: "An interactive map of state power generation by year and power source. You can change the year and power source type using the controls.",
    description: "This app shows state power generation by fuel type and year. It was built using the Leaflet JavaScript library. Users can interact with the app by changing the year and the power source type, which filters the data and updates the map on the client side."
  },
  {
    id: 4,
    name: "Critters Tracker",
    src: "images/critters-tracker-large.png",
    link: "/critters-tracker",
    altText: "Critters tracker app",
    title: "ArcGIS JavaScript API web map app",
    summary: "Wildlife tracker web mapping application."
  },
  {
    id: 5,
    name: "NY Housing",
    src: "images/d3.png",
    link: "/d3",
    altText: "D3 coordinated visualization",
    title: "D3 coordinated visualization",
    summary: "New York City housing costs."
  },
  {
    id: 6,
    name: "Northern Himalayas",
    src: "images/terrain_sm.png",
    link: "/terrain",
    altText: "Terrain map",
    title: "ITC - Northern Himalayas",
    summary: "Terrain map showing cycling race route."
  },
  {
    id: 7,
    name: "MapBox tile set",
    src: "images/mapbox.png",
    link: "/mapbox",
    altText: "Mapbox tileset",
    title: "Custom Web Map Tileset",
    summary: "Mapbox vector webmap tileset based on a film."
  },
  {
    id: 8,
    name: "Infographic",
    src: "images/infographic.png",
    link: "/infographic",
    altText: "Infographic",
    title: "Education gap vs GDP",
    summary: "Infographic of international education and gender vs GDP."
  },
  {
    id: 9,
    name: "Pop Density",
    src: "images/pop_density.png",
    link: "/popdensity",
    altText: "Pop density",
    title: "U.S. Population density",
    summary: "Quick map showing census block group population density for the USA."
  },
];
