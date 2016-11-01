#Food around me ### Sang Min (Samuel) Na


** Technologies Used **
- HTML
  * Along with EJS, used to make the web page
- CSS
  * Used to create visually pleasing website to users
- JavaScript & jQuery
  * Create clickable events as well as using JS to communicate with server
- Node.js & NPM
  * The server side platform used for this full stack web application and used NPM to manage other node modules
- Express.js
  * Framework of Node.js, used to create web application with MVC architecture
- MongoDB
  * Used to store and access user information
- Google Maps API
  * To render Google Map to the web page with markers to denote the Yelp API results
- Yelp API
  * Used to return user queries of foods and extract the businesses' geolocation for the Google Map
- webkit Speech Recognition
  * A speech recognition tool to transcribe the speech to text

** Installations **
The package.json file has all the node modules that are required to build this full stack web application.

Command to install node modules
```
npm install
node server.js
```
This will run the web application on localhost. Use the latest Chrome browsers.

### User Stories
* As an user, I want to search for foods using voice and/or typing
* As an user, I want to save favorite stores and see where I went
* As an user, I want to use search for foods without constraints
* As an user, I want to see how far is the store

** Approach **
- The main principle of this web application is to search for food around me returning the Yelp results that are closest to the current position.
- The core functionality is searching with Yelp API and returning the results to the user. I started with Yelp first and made sure that the queries are working.
- The peripheral functionalities are rendering Google Map to the web page and allowing users to see the results on the map so the users can judge how far it is.

** Challenges & Unsolved Problems **
- The oauth was a huge challenge. The Yelp API employed Oauth 1.0a which increased the difficulty of server accessing Yelp for queries.
- Microsoft's Speech Analytics API was considered to be used for speech recognition. However, due to limited knowledge of sending audio files through the API, I decided not to use Microsoft's Speech Analytics API.
- Found HTML5, webkit Speech recognition tool which was basic and is not accurate tool. However this technology allowed the user to search for foods around by speaking food terms.
- The Google Maps API allows polylines to be drawn over map however it does not snap to the grids of streets like the Google maps direction.

** Wireframes **
<https://git.generalassemb.ly/storage/user/24/files/7a1a53c8-9b0d-11e6-82cb-aee7bd2c9223>

<https://git.generalassemb.ly/storage/user/24/files/aff73902-9b0d-11e6-8c50-aaa8ea6170fd>
