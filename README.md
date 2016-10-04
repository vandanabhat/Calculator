
## Getting Started

To get you started you can simply clone the calculator repository and install the dependencies:

### Prerequisites

You need git to clone the Calculator repository. You can get git from

https://github.com/vandanabhat/Calculator

I used also  node.js tools to initialize and test calculator. You must have node.js and
its package manager (npm) installed.  

### Clone calculator

Clone the calculator repository using :

```
git clone https://github.com/vandanabhat/Calculator
cd Calculator
```

### Install Dependencies

We have two kinds of dependencies in this project: tools and angular framework code.  The tools help
us manage and test the application.

# requires Node.JS to be preinstalled manually (see https://nodejs.org/en/download/ for details)


```
npm install
bower install
npm install -g protractor
webdriver-manager update
webdriver-manager start
```

Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.

* `app/bower_components` - contains the angular framework files

### Run the Application

We have preconfigured the project with a simple development web server.  The simplest way to start
this server is:

```
 python -m SimpleHTTPServer 8000
```

Now browse to the app at `http://localhost:8000/index.html`.



## Directory Layout

```
app/                    --> all of the source files for the application
  app.css               --> default stylesheet
  components/           --> all app specific modules
   calculate.js         --> custom directive
  app.js                --> main application module
  index.html            --> app layout file (the main html template file of the app)
karma.conf.js         --> config file for running unit tests with Karma
e2e-tests/            --> end-to-end tests
  protractor-conf.js    --> Protractor config file
  calculatorTests.js    --> end-to-end scenarios to be run by Protractor
```

## Testing

### Running Unit Tests

Run the test script by using below command
```
protractor protractor.conf.js
```

<!--This script will start the Karma test runner to execute the unit tests. Moreover, Karma will sit and-->
<!--watch the source and test files for changes and then re-run the tests whenever any of them change.-->
<!--This is the recommended strategy; if your unit tests are being run every time you save a file then-->
<!--you receive instant feedback on any changes that break the expected code functionality.-->

<!--You can also ask Karma to do a single run of the tests and then exit.  This is useful if you want to-->
<!--check that a particular version of the code is operating as expected.  The project contains a-->
<!--predefined script to do this:-->

<!--```-->
<!--npm run test-single-run-->
<!--```-->


<!--### End to end testing-->

<!--The calculator app comes with end-to-end tests, again written in [Jasmine][jasmine]. These tests-->
<!--are run with the [Protractor][protractor] End-to-End test runner.  It uses native events and has-->
<!--special features for Angular applications.-->

<!--* the configuration is found at `test-cases/protractor-calculatorTests.js`-->
<!--* the end-to-end tests are found in `test-cases/calculatorTests.js`-->

<!--Protractor simulates interaction with our web app and verifies that the application responds-->
<!--correctly. Therefore, our web server needs to be serving up the application, so that Protractor-->
<!--can interact with it.-->

<!--```-->
<!--npm start-->
<!--```-->

<!--In addition, since Protractor is built upon WebDriver we need to install this.  The calculator-->
<!--project comes with a predefined script to do this:-->

<!--```-->
<!--npm run update-webdriver-->
<!--```-->

<!--This will download and install the latest version of the stand-alone WebDriver tool.-->

<!--Once you have ensured that the development web server hosting our application is up and running-->
<!--and WebDriver is updated, you can run the end-to-end tests using the supplied npm script:-->

<!--```-->
<!--npm run protractor-->
<!--```-->

<!--This script will execute the end-to-end tests against the application being hosted on the-->
<!--development server.-->

**Note:**
Under the hood, Protractor uses the [Selenium Stadalone Server][selenium], which in turn requires 
the [Java Development Kit (JDK)][jdk] to be installed on your local machine. Check this by running 
`java -version` from the command line.

If JDK is not already installed, you can download it [here][jdk-download].



