# Project Overview

This project is a simple feed reader, but the real purpouse of this is to understand and learn the basics of [Jasmine](http://jasmine.github.io/) which is Jasmine is a behavior-driven development framework for testing JavaScript code.

In this project you are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where you come in.


## How does it work?

All tests are describe in the **./jasmine/spec/feedreader.js**. Loading the index.html file the feedreader.js will run and you will can see at the bottom of page the result of the test.


## What will be test?

If fees are definied and if the parameters URL and NAME are definied and have some value;

If the menu is hidden on loading the page;

If the menu will be visibly or hide according click

if the load feed has at least one on load

If a new feed is load by calling the loadFeed function on app.js
