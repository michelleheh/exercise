## About 
This is a front end application that interacts with Google Places Libraray. See the official google docs [here](https://developers.google.com/maps/documentation/javascript/places).

When no input is provide, the search defaults to look for `peet's` near `San Francisco`.  Search result will be plotted on the map with cooresponcing markers.  When the markers are clicked, a modal will pull up that shows some infomation of the places, including Address, Open Now, and Rating.

## Libraries Used
There are two libraries I used here.

#### Bootstrap
The navbar on top and the modal are styled using bootstrap.

#### jQuery
The jQuery library is mainly used for selecting DOM element.  It is also used for a get request to retreive the latitude and longitude for a near location.