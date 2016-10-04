
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
```

Behind the scenes this will also call `bower install`.  You should find that you have  new
folders in your project.

* `app/bower_components` - contains the angular framework files

### Run the Application

I have preconfigured the project with a simple development web server.  The simplest way to start
this server is:

```
 python -m SimpleHTTPServer 8000
```

Now browse to the app at `http://localhost:8000/app/index.html`.



## Directory Layout

```
app/                    --> all of the source files for the application
  app.css               --> default stylesheet
  components/           --> all app specific modules
   calculate.js         --> custom directive
  app.js                --> main application module
  index.html            --> app layout file (the main html template file of the app)
karma.conf.js         --> config file for running unit tests with Karma
test-cases/            --> end-to-end tests
  protractor-conf.js    --> Protractor config file
  calculatorTests.js    --> end-to-end scenarios to be run by Protractor
```

## Testing

### Running Unit Tests

Run the test script by using below command
```
npm install -g protractor
webdriver-manager update
webdriver-manager start
cd test-cases
protractor protractor.conf.js
```

**Note:**
Under the hood, Protractor uses the [Selenium Stadalone Server][selenium], which in turn requires 
the [Java Development Kit (JDK)][jdk] to be installed on your local machine. Check this by running 
`java -version` from the command line.

If JDK is not already installed, you can download it [here][jdk-download].



## Known issues 

Float point calculation can be inaccurate some times.
Because not all decimal values can be represented exactly in binary.