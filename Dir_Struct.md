Directory Structure

root
================================
Coverage
  Coverages reports from Istanbul NPM package covering the scope of testing

Node_Modules
  Installed npm modules

SRC
  Contains the written source code for the application

Test
  contains the tests and the testing environment for the app

========================================================


SRC
=====================================================
Client
  Front End code written for the application 

Public
  Front end distribution code for the client

Server
  Backend Node/Express Server code



SRC ---> Client
==================================================
Actions
  contains the redux actions

Components
  contains the components that dont need redux store

Containers
  contains the components that need redux store

Constants
  contains the constants to be shared between the actions and reducers

Reducers
  contains the redux reducers


SRC ---> Public
========================================
CSS
  contains the stylesheets

Dist
  contains the minimized, concated version of js code, libraries and cs code for distributing to client

Font
  contains any custom fonts used

Img
  contains images for the static part of the app

lib
  contains the js code and libraries before being minified, used for development


SRC ---> Server
===========================================================
Controllers
  contains the route controllers, callback functions used by the incoming express routes

DB
  contains the Mongodb schemas

Middleware
  Contains the Express Middleware being used

Passport
  contains the passport authentication functionality

Routes
  contains the express routes.


Tests
================================
Actions
  Testing the redux actions

Components
  Unit testing for Components

Server
  Unit testing for Server




