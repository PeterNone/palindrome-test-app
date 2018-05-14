# Environment Setup

Clone or download this repo.

## Install global packages

> Install [Node](https://nodejs.org/en/download/)

Navigate to the folder containing this repo files and install local packages by entering a command


	npm install

---

## Start Development

Run Local Server

	npm start

Here all tested strings are saved to a .json file in:

> server/palindromes.json

Run Test

	npm test

Run Build

	npm run build

---

# Info

I enjoyed this test very much. Small unexpected applications like that, are a nice exercise to test person skills and ability to adapt to given challenge.

I must say that I did the initial part in a little more than 1 hour. But I'm a person that likes to take care for code and final result. In real life, I would spend more time to polish it. More info about it in "What would I do if I would have more time".

I started with creating new react app using

    create-react-app

to speed setup up.

I added:

-    Redux
-    Redux Form - for quick form handling in redux.
-    Axios - ajax requests helper library as quick middleware for ajax requests for redux
-    Json-Server - as log tool instead log file (there was no time to do in manually with FileSystem. So I cut the corner and had  RestAPI with simple JSON instead, but is doing the same thing). I set it up as a quick proxy in package.json
- Concurrently - to run at the same time react app and node to serve json-server, with the same node commend "npm start". Changes in package.json
-    Bootstrap - for styling
-    Added some css helper classes of my own, that I like to have when work with Bootstrap, to index.css




## Timings

---

### Basic

- 00:10:00 - Bootstrap mokap of app
- 00:10:00 - Startup components and containers
- 00:20:00 - Setting up reducers and initial actions with Redux
- 00:15:00 - Connecting Redux-Form to work with the app
- 00:10:00 - Creating PalindromeTest method

So that was 1 hour and 5 minutes

---

### Advanced

- 00:10:00 - added Json-Server
- 00:10:00 - Extended the actions to use axios as middleware to Json-Server
- 00:15:00 - Problem with setting up Json-Server and Concurrently to run from the same "npm start" command and also as a proxy for the use of app on the same port
- 00:15:00 - Set up and created 20 tests and also modified PalindromeTest method cause the tests show some imperfections

So additional work was 50 minutes

---



## What would I do if I would have more time


To speed things up I used

    create-react-app

To wrap everything up in nice to work startup.

Unfortunately inside that startup is a lot of classes that I haven't use, for instance, Loadsh. And also I added some unnecessary css with Bootstrap.

Also, I user Json-Server to speed things up with setting up REST api and log results to file which is not what was fully required by the test. But in given time I must cut the corners to make things done.

---

## Solutions that I would do

-    Create Webpack build from scratch to avoid unnecessary libraries to lover js file size.

- Add Bootstrap wit SASS and only include navbar, table and input group styles that I used to lover css file size.

- Add more care arround axios ajax requests to handle errors during requests

- Create tests for the whole application, and not just for the main part of it, which is the Palindrome Test method.

- Create separate server with api that will use FileSystem to create log functionality.

- Add a polyfill to ad support for IE 10 and 9 cause React is not shipped with them by default.

- Add ie less than IE9 tag to inform about the outdated browser and ask to visit browser happy to update the browser.

---


## Downsides

Size of application js and css file.

Lack of error handling during ajax requests.

Lack of polyfills to cover support for IE 9 and 10.

Lack of information about the unsupported browser and information to update it.
