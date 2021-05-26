# RESTy
# Author: Lydia Minehan-Tubic

## Links & Resources

✨ [Deployed Site](https://flamboyant-kepler-b6da40.netlify.app/)

✨ [Pull Request](https://github.com/LydiaMT/resty/pull/3)

## About this Application 

An API testing tool that can be run in any browser, allowing a user to easily interact with APIs in a familiar interface.

## Dependencies

- node-sass
- react
- react-dom
- react-scripts

## Scaffolding

```git 
├── .gitignore
├── .eslintrc.json
├── __tests__
│   ├── app.test.js
│   ├── form.test.js
│   ├── history.test.js
│   ├── results.test.js
├── src
│   ├── index.js
│   ├── app.js
│   ├── components
│   │   ├── if
│   │   │   └── if.js
│   │   ├── form
│   │   │   └── form.js
│   │   │   └── form.scss
│   │   ├── history
│   │   │   └── history.js
│   │   │   └── history.scss
│   │   ├── results
│   │   │   └── results.js
│   │   │   └── results.scss
│   │   ├── header
│   │   │   └── header.js
│   │   │   └── header.scss
│   ├── design
│   │   └── variables.scss
│   │   └── design.scss
└── package.json
```
# Day 1

## Event Flow

![Event Flow Diagram](img/RESTy1.jpg)

# Day 2

## Application flow
- User enters an API URL
- Chooses a REST Method
- Clicks the “Go” button
- Application fetches data from the URL given, with the method specified
- Displays the response headers and results separately
- Both headers and results should be “pretty printed” JSON

## Event Flow

![Event Flow Diagram](img/RESTy2.jpg)

# Day 3

## Application flow

Update the RESTy application as follows:
- Add support for PUT, POST, and DELETE in your remote calls
- Whenever a query is successful (results come back), store the query parameters in local storage
  - Store the URL, Method, and the Body (if any)
  - Store only unique, successful queries

Home Page:
- Add a simple history list to the left side of the application
  - List all previous queries, showing the method and the URL
  - When a user clicks a previous query, populate the RESTy forms with the query information
- Completely hide the output area (Headers & Results) when there are none to display
- Display any fetch/load errors in place of the results area, if they occur
- Add a “Loading” indicator while fetching
  - When the user clicks the “Go!” button, show a loading icon on the page
  - When the fetching of results is complete, remove the loading icon and show the results

## Event Flow

![Event Flow Diagram](img/RESTy3.jpg)
