#!/usr/bin/env bash

npm install
bower install
npm install -g protractor
webdriver-manager update
webdriver-manager start

python -m SimpleHTTPServer 8000