## About 
This is a front end application that interacts with Google Places API. See the official google docs [here](https://developers.google.com/maps/documentation/javascript/places).

Based on find keyword and near location, search results are plotted on the map with corresponding markers.  When no input is provided, the search defaults to look for `peet's` near `San Francisco`.  When the markers are clicked, a modal pulls up that shows some information of the place, including Address, Open Now, and Rating.

## Libraries Used
There are two libraries used here.

#### Bootstrap
The navbar on top and the modal are styled using bootstrap.

#### jQuery
The jQuery library is mainly used for selecting DOM elements.  It is also used for a get request to retrieve the latitude and longitude for a near location.
