### Status
[![Build Status](https://travis-ci.org/veliancreate/till-tech-test.svg?branch=master)](https://travis-ci.org/veliancreate/responsive-shopping-cart.svg?branch=master)

# Responsive Shopping Cart

## Tech used:

 * NodeJS with Express middleware
 * Angular and real time, two-way data binding
 * Protractor for e2e and unit tests
 * SASS with the Bootstrap grid, and CSS media queries for responsivity
 * Bower for front end dependency package management
 * Grunt for task running
 
Please clone the repo, then from the project root folder, run the following from the command line:

1.	npm install
2.	bower install
3.	Protractor tests are performed in Chrome. From the project root folder, please run

``node_modules/protractor/bin/webdriver-manager update --standalone --chrome``

Tests can then be run from the command line by simply typing ``grunt``.

If you'd like to run the app locally, type ``nodemon`` from the command line and point your browser at localhost:3000.

## App features:

* As a User I can view the products and their category, price and availability information.
* As a User I can add a product to my shopping cart.
* As a User I can remove a product from my shopping cart.
* As a User I can view the total price for the products in my shopping cart.
* As a User I can apply a voucher to my shopping cart.
* As a User I can view the total price for the products in my shopping cart with discounts applied.
* As a User I am alerted when I apply an invalid voucher to my shopping cart.
* As a User I am unable to Out of Stock products to the shopping cart.

## Screen shots

![Full screen design](/fullscreen.png?raw=true "Full screen design")
![Tablet design](/tablet.png?raw=true "Tablet design")
![Mobile](/mobile.png?raw=true "Mobile design")
