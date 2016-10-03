'use strict';

angular.module('calculator').controller('calculationController', ['$scope', '$timeout', function ($scope, $timeout) {
    var ans = 0,
        resultsObj = {
            inputArr: [],
            calculationArr: [],
            finalResult: 0
        };
    $scope.inputRegex = /[0-9]*[+\-*\/.]+/;


    var operation = function (num1, opr, num2) {
        var ans = 0;
        switch (opr) {
            case '+':
                ans = num1 + num2;
                break;
            case '-':
                ans = num1 - num2;
                break;
            case '*':
                ans = num1 * num2;
                break;
            case '/':
                ans = num1 / num2;
                break;
        }
        return ans;
    };

    $scope.init = function () {
        $scope.calculationDisplay = 0;
        $scope.result = 'Ans';
        resultsObj.calculationArr = [];
        resultsObj.inputArr = [];
    };

    $scope.onShowResult = function () { //on "=" click
        var len = resultsObj.calculationArr.length;

        if(len == 1 ){
            if(resultsObj.calculationArr[0] ==  resultsObj.finalResult) return;
            resultsObj.finalResult = resultsObj.calculationArr[0];
        }
        if(!isNaN(resultsObj.calculationArr[len - 1])){
            resultsObj.calculationArr[len - 1] = parseFloat(resultsObj.calculationArr[len - 1]);
        }
            resultsObj.calculationArr.push("=");
        var i = 0;

        if (len > 2) {
                resultsObj.finalResult = resultsObj.calculationArr[i++];
                while (i < len) {
                    resultsObj.finalResult = operation(resultsObj.finalResult, resultsObj.calculationArr[i++], resultsObj.calculationArr[i++]);
                    //i += 3;
                }
            }
        $timeout(function () {
            if (resultsObj.finalResult == 0) {
                angular.copy(resultsObj.calculationArr, resultsObj.inputArr);
            } else {
                resultsObj.inputArr = resultsObj.inputArr.concat(resultsObj.calculationArr);
            }
            $scope.result = resultsObj.inputArr.join(' ');
            $scope.calculationDisplay = len <= 2 ? "Wrong Input" : resultsObj.finalResult;
            resultsObj.calculationArr = [];
            resultsObj.calculationArr.push(resultsObj.finalResult);
            console.log( $scope.calculationDisplay);
        });
    };

    $scope.calculatedResult = function (input) {
        var operator = false,
            len = resultsObj.calculationArr.length,
            pattern = /[+\-*\/]{1}/;
        if (pattern.test(input)) {
            operator = true;
        }
        if (operator) {
            if(pattern.test(resultsObj.calculationArr[len - 1]) && isNaN(resultsObj.calculationArr[len - 1])) { //if previous input was operator
                if (input == '-' && resultsObj.calculationArr[len - 2] != '-') { //input is -ve cases like 1 * -2 = -2 | 1 - - 2 = -1
                    resultsObj.calculationArr.push(input);
                } else {
                    resultsObj.calculationArr[len - 1] = input;
                }
            } else {
                if(len == 0 && input != '-'){
                    resultsObj.calculationArr[0] = 0;
                    resultsObj.calculationArr[1] = input;
                }else {
                    resultsObj.calculationArr.push(input);
                }
            }
            if(!isNaN(resultsObj.calculationArr[len - 1])){
                resultsObj.calculationArr[len - 1] = parseFloat(resultsObj.calculationArr[len - 1]);
            }

        }else if (!isNaN(input)) {
            if (len == 0 || (pattern.test(resultsObj.calculationArr[len - 1]) && isNaN(resultsObj.calculationArr[len - 1]))) {
                if (len > 2 && pattern.test(resultsObj.calculationArr[len - 2]) && resultsObj.calculationArr[len - 1] == '-') { // check for -ve operator
                    //resultsObj.calculationArr[len - 1] = parseFloat(resultsObj.calculationArr[len - 1] + input);
                    resultsObj.calculationArr[len - 1] = (resultsObj.calculationArr[len - 1] + input);
                } else {
                    if(len == 1 && resultsObj.calculationArr[0] == '-'){ //if 1st number is -ve
                        resultsObj.calculationArr[0] = resultsObj.calculationArr[0] + input;
                    }else {
                        resultsObj.calculationArr.push(input);
                    }
                }
            } else if (len == 1 && resultsObj.finalResult == resultsObj.calculationArr[0]) { //case 2 + 4 = 6 4(input) clear results
                resultsObj.calculationArr = [];
                resultsObj.calculationArr[0] = input;
                $scope.result = 'Ans';
                resultsObj.inputArr = [];
            }else {
                if (/\.{1}/.test(resultsObj.calculationArr[len - 1])) {// check for . in number if yes convert it to float
                    //resultsObj.calculationArr[len - 1] = parseFloat(resultsObj.calculationArr[len - 1] + input);
                    resultsObj.calculationArr[len - 1] = (resultsObj.calculationArr[len - 1] + input);

                } else {
                    //resultsObj.calculationArr[len - 1] = resultsObj.calculationArr[len - 1] * 10 + parseInt(input);
                    resultsObj.calculationArr[len - 1] = resultsObj.calculationArr[len - 1]  + (input);
                }
            }
        }else if (input == '.') {
            if (len == 0 || ( pattern.test(resultsObj.calculationArr[len - 1]) && isNaN(resultsObj.calculationArr[len - 1]))) {
                if(len > 2 && pattern.test(resultsObj.calculationArr[len - 2])){// in case of 5 * -.345
                    resultsObj.calculationArr[len - 1] = resultsObj.calculationArr[len - 1] + "0" +input;
                }else {
                    resultsObj.calculationArr.push(input);
                }
            } else {
                resultsObj.calculationArr[len - 1] = resultsObj.calculationArr[len - 1] + input;
            }
        }

        $timeout(function () {
            $scope.calculationDisplay = resultsObj.calculationArr.join(' ');

        });
    };
    $scope.init();
}]);


//Known issues

//1. Wrong decimal results