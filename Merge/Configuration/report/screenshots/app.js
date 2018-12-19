var app = angular.module('reportingApp', []);

app.controller('ScreenshotReportController', function ($scope) {
    $scope.searchSettings = Object.assign({
        description: '',
        allselected: true,
        passed: true,
        failed: true,
        pending: true,
        withLog: true
    }, {}); // enable customisation of search settings on first page hit

    var initialColumnSettings = undefined; // enable customisation of visible columns on first page hit
    if (initialColumnSettings) {
        if (initialColumnSettings.displayTime !== undefined) {
            // initial settings have be inverted because the html bindings are inverted (e.g. !ctrl.displayTime)
            this.displayTime = !initialColumnSettings.displayTime;
        }
        if (initialColumnSettings.displayBrowser !== undefined) {
            this.displayBrowser = !initialColumnSettings.displayBrowser; // same as above
        }
        if (initialColumnSettings.displaySessionId !== undefined) {
            this.displaySessionId = !initialColumnSettings.displaySessionId; // same as above
        }
        if (initialColumnSettings.displayOS !== undefined) {
            this.displayOS = !initialColumnSettings.displayOS; // same as above
        }
        if (initialColumnSettings.inlineScreenshots !== undefined) {
            this.inlineScreenshots = initialColumnSettings.inlineScreenshots; // this setting does not have to be inverted
        }

    }


    $scope.inlineScreenshots = false;
    this.showSmartStackTraceHighlight = true;

    this.chooseAllTypes = function () {
        var value = true;
        $scope.searchSettings.allselected = !$scope.searchSettings.allselected;
        if (!$scope.searchSettings.allselected) {
            value = false;
        }

        $scope.searchSettings.passed = value;
        $scope.searchSettings.failed = value;
        $scope.searchSettings.pending = value;
        $scope.searchSettings.withLog = value;
    };

    this.isValueAnArray = function (val) {
        return isValueAnArray(val);
    };

    this.getParent = function (str) {
        var arr = str.split('|');
        str = "";
        for (var i = arr.length - 2; i > 0; i--) {
            str += arr[i] + " > ";
        }
        return str.slice(0, -3);
    };

    this.getSpec = function (str) {
        return getSpec(str);
    };


    this.getShortDescription = function (str) {
        return str.split('|')[0];
    };

    this.convertTimestamp = function (timestamp) {
        var d = new Date(timestamp),
            yyyy = d.getFullYear(),
            mm = ('0' + (d.getMonth() + 1)).slice(-2),
            dd = ('0' + d.getDate()).slice(-2),
            hh = d.getHours(),
            h = hh,
            min = ('0' + d.getMinutes()).slice(-2),
            ampm = 'AM',
            time;

        if (hh > 12) {
            h = hh - 12;
            ampm = 'PM';
        } else if (hh === 12) {
            h = 12;
            ampm = 'PM';
        } else if (hh === 0) {
            h = 12;
        }

        // ie: 2013-02-18, 8:35 AM
        time = yyyy + '-' + mm + '-' + dd + ', ' + h + ':' + min + ' ' + ampm;

        return time;
    };


    this.round = function (number, roundVal) {
        return (parseFloat(number) / 1000).toFixed(roundVal);
    };


    this.passCount = function () {
        var passCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (result.passed) {
                passCount++;
            }
        }
        return passCount;
    };


    this.pendingCount = function () {
        var pendingCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (result.pending) {
                pendingCount++;
            }
        }
        return pendingCount;
    };


    this.failCount = function () {
        var failCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (!result.passed && !result.pending) {
                failCount++;
            }
        }
        return failCount;
    };

    this.passPerc = function () {
        return (this.passCount() / this.totalCount()) * 100;
    };
    this.pendingPerc = function () {
        return (this.pendingCount() / this.totalCount()) * 100;
    };
    this.failPerc = function () {
        return (this.failCount() / this.totalCount()) * 100;
    };
    this.totalCount = function () {
        return this.passCount() + this.failCount() + this.pendingCount();
    };

    this.applySmartHighlight = function (line) {
        if (this.showSmartStackTraceHighlight) {
            if (line.indexOf('node_modules') > -1) {
                return 'greyout';
            }
            if (line.indexOf('  at ') === -1) {
                return '';
            }

            return 'highlight';
        }
        return true;
    };


    var results = [
    {
        "description": "should verify the \"Download Menus and Info Link|Project1(MENU)",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 3254,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images/002400e9-00a7-00a4-0056-00d2004b001c.png",
        "timestamp": 1540440878526,
        "duration": 5203
    },
    {
        "description": "should verify the \"category item text\"|Project1(MENU)",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 3254,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "images/00f4008e-009b-00a6-00f2-00e500070000.png",
        "timestamp": 1540440884723,
        "duration": 13
    },
    {
        "description": "Should verify the \"category item Image\"|Project1(MENU)",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 3254,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "images/00760014-00d3-0045-00aa-007f00290014.png",
        "timestamp": 1540440885525,
        "duration": 50
    },
    {
        "description": "should clickOn Second Slide on the HomePage and Verify img. source|should verify Slide show part|Home Page",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 3193,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images/00ce004e-00d2-002c-000c-001d008300a4.png",
        "timestamp": 1540440882994,
        "duration": 3368
    },
    {
        "description": "should be able to get to Join Shmear Society Page from Home Page|Email Page Test|Test of functionality of joining Shmear Society",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 3276,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/Areas/Ccenrg/Assets/_shared/js/main.js 186:59 Uncaught TypeError: Cannot read property 'loadingStoresText' of undefined",
                "timestamp": 1540440888664,
                "type": ""
            }
        ],
        "screenShotFile": "images/009700bf-005d-007e-0084-00c60087001b.png",
        "timestamp": 1540440884627,
        "duration": 5353
    },
    {
        "description": "should clickOn Third Slide on the HomePage and Verify img. source|should verify Slide show part|Home Page",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 3193,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images/005c007d-00d6-00b1-00ee-00d7004800ce.png",
        "timestamp": 1540440888578,
        "duration": 2351
    },
    {
        "description": "should display Main Menu|should verify footer part|Home Page",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 3193,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images/00380019-00dc-00f6-00df-009500af00d0.png",
        "timestamp": 1540440892947,
        "duration": 344
    },
    {
        "description": "Should display a title THE BENEFITS|Email Page Test|Test of functionality of joining Shmear Society",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 3276,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/Areas/Ccenrg/Assets/_shared/js/main.js 186:59 Uncaught TypeError: Cannot read property 'loadingStoresText' of undefined",
                "timestamp": 1540440893499,
                "type": ""
            }
        ],
        "screenShotFile": "images/005900d5-0054-0078-0014-000900160060.png",
        "timestamp": 1540440892435,
        "duration": 1748
    },
    {
        "description": "Under the title THE BENEFITS must show 6 paragraphs|Email Page Test|Test of functionality of joining Shmear Society",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 3276,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/Areas/Ccenrg/Assets/_shared/js/main.js 186:59 Uncaught TypeError: Cannot read property 'loadingStoresText' of undefined",
                "timestamp": 1540440897230,
                "type": ""
            }
        ],
        "screenShotFile": "images/00b7009d-00e4-00a9-0060-002000b600e4.png",
        "timestamp": 1540440896332,
        "duration": 954
    },
    {
        "description": "should dicplay Catering Menu|should verify footer part|Home Page",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 3193,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images/005f0057-0078-00ba-008c-00c900600095.png",
        "timestamp": 1540440895679,
        "duration": 464
    },
    {
        "description": "Customer must be able to click on button CLICK HERE TO JOIN and be redirected to the corresponding page|Email Page Test|Test of functionality of joining Shmear Society",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 3276,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/Areas/Ccenrg/Assets/_shared/js/main.js 186:59 Uncaught TypeError: Cannot read property 'loadingStoresText' of undefined",
                "timestamp": 1540440898820,
                "type": ""
            }
        ],
        "screenShotFile": "images/00af0060-00ca-0052-001b-004100120086.png",
        "timestamp": 1540440897902,
        "duration": 1047
    },
    {
        "description": "should display a picture of a bagel in a hat and with title The Shmear Society above.|Email Page Test|Test of functionality of joining Shmear Society",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 3276,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/Areas/Ccenrg/Assets/_shared/js/main.js 186:59 Uncaught TypeError: Cannot read property 'loadingStoresText' of undefined",
                "timestamp": 1540440900503,
                "type": ""
            }
        ],
        "screenShotFile": "images/00860029-00d1-0000-00ad-00260006001a.png",
        "timestamp": 1540440899635,
        "duration": 915
    },
    {
        "description": "should dicplay OUR FOOD|should verify footer part|Home Page",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 3193,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images/000a0000-0099-0008-0063-002500ff00ed.png",
        "timestamp": 1540440898541,
        "duration": 404
    },
    {
        "description": "should show an error message if email field id left blank|Email Page Test|Test of functionality of joining Shmear Society",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 3276,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/Areas/Ccenrg/Assets/_shared/js/main.js 186:59 Uncaught TypeError: Cannot read property 'loadingStoresText' of undefined",
                "timestamp": 1540440902109,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/Areas/Ccenrg/Assets/_shared/js/main.js 186:59 Uncaught TypeError: Cannot read property 'loadingStoresText' of undefined",
                "timestamp": 1540440902662,
                "type": ""
            }
        ],
        "screenShotFile": "images/0033009b-00ee-0020-00a4-003c001200b4.png",
        "timestamp": 1540440901116,
        "duration": 1595
    },
    {
        "description": "should dicplay ABOUT US|should verify footer part|Home Page",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 3193,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images/00b3009c-0085-00d5-0006-001a000500c0.png",
        "timestamp": 1540440901403,
        "duration": 482
    },
    {
        "description": "should display an error message if email provided is an existing email|Email Page Test|Test of functionality of joining Shmear Society",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 3276,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/Areas/Ccenrg/Assets/_shared/js/main.js 186:59 Uncaught TypeError: Cannot read property 'loadingStoresText' of undefined",
                "timestamp": 1540440904173,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/Areas/Ccenrg/Assets/_shared/js/main.js 186:59 Uncaught TypeError: Cannot read property 'loadingStoresText' of undefined",
                "timestamp": 1540440905610,
                "type": ""
            }
        ],
        "screenShotFile": "images/003100ba-0067-00bd-005b-001700d90060.png",
        "timestamp": 1540440903307,
        "duration": 2375
    },
    {
        "description": "should dicplay CAREERS|should verify footer part|Home Page",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 3193,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images/00010089-000a-009a-0040-00c4005d000b.png",
        "timestamp": 1540440904333,
        "duration": 456
    },
    {
        "description": "should display an error message if phone number field is left blank|Email Page Test|Test of functionality of joining Shmear Society",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 3276,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/Areas/Ccenrg/Assets/_shared/js/main.js 186:59 Uncaught TypeError: Cannot read property 'loadingStoresText' of undefined",
                "timestamp": 1540440907062,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/Areas/Ccenrg/Assets/_shared/js/main.js 186:59 Uncaught TypeError: Cannot read property 'loadingStoresText' of undefined",
                "timestamp": 1540440907663,
                "type": ""
            }
        ],
        "screenShotFile": "images/000c00d0-0030-0007-0045-007400cf007b.png",
        "timestamp": 1540440906247,
        "duration": 1539
    },
    {
        "description": "should dicplay Contact Us|should verify footer part|Home Page",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 3193,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images/001a0041-004b-0080-00bb-00ba005a0069.png",
        "timestamp": 1540440907222,
        "duration": 408
    },
    {
        "description": "should display an error message if special characters are entered in phone number field|Email Page Test|Test of functionality of joining Shmear Society",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 3276,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/Areas/Ccenrg/Assets/_shared/js/main.js 186:59 Uncaught TypeError: Cannot read property 'loadingStoresText' of undefined",
                "timestamp": 1540440909218,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/Areas/Ccenrg/Assets/_shared/js/main.js 186:59 Uncaught TypeError: Cannot read property 'loadingStoresText' of undefined",
                "timestamp": 1540440909829,
                "type": ""
            }
        ],
        "screenShotFile": "images/007500a8-009e-000a-005d-007700aa00fa.png",
        "timestamp": 1540440908366,
        "duration": 1579
    },
    {
        "description": "should display an error message if letters are entered in phone number field|Email Page Test|Test of functionality of joining Shmear Society",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 3276,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/Areas/Ccenrg/Assets/_shared/js/main.js 186:59 Uncaught TypeError: Cannot read property 'loadingStoresText' of undefined",
                "timestamp": 1540440911363,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/Areas/Ccenrg/Assets/_shared/js/main.js 186:59 Uncaught TypeError: Cannot read property 'loadingStoresText' of undefined",
                "timestamp": 1540440911912,
                "type": ""
            }
        ],
        "screenShotFile": "images/002200ba-00f0-0050-00e2-00f700920099.png",
        "timestamp": 1540440910500,
        "duration": 1512
    },
    {
        "description": "should dicplay FAQS|should verify footer part|Home Page",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 3193,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images/008e000a-0071-00c9-000d-00060007003f.png",
        "timestamp": 1540440910075,
        "duration": 329
    },
    {
        "description": "User should select a menu on the page and should also select the number of menus. Should complete the order |Making an Order",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 3214,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images/00ff0088-009e-004d-00fa-00b800da00c9.png",
        "timestamp": 1540440840358,
        "duration": 71757
    },
    {
        "description": "should dicplay PRIVACY POLICY|should verify footer part|Home Page",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 3193,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images/00450057-0020-00fe-002f-00c900a000ef.png",
        "timestamp": 1540440912803,
        "duration": 476
    },
    {
        "description": "should successfully enter email and phone number and proceed to the page with application form|Email Page Test|Test of functionality of joining Shmear Society",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 3276,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/Areas/Ccenrg/Assets/_shared/js/main.js 186:59 Uncaught TypeError: Cannot read property 'loadingStoresText' of undefined",
                "timestamp": 1540440913614,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Credentials_Password: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440915030,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Credentials_PasswordConfirmation: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440915030,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Enrollee_ID: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440915031,
                "type": ""
            }
        ],
        "screenShotFile": "images/00890091-0073-008b-0013-00b700f000f9.png",
        "timestamp": 1540440912590,
        "duration": 2655
    },
    {
        "description": "should dicplay TERMS OF USE|should verify footer part|Home Page",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 3193,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images/00ad00a7-0090-0017-0056-00e500be00d6.png",
        "timestamp": 1540440915181,
        "duration": 335
    },
    {
        "description": "should give an error message if password is longer or shorter than 8 characters|Application for Membership Form Test|Test of functionality of joining Shmear Society",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 3276,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/Areas/Ccenrg/Assets/_shared/js/main.js 186:59 Uncaught TypeError: Cannot read property 'loadingStoresText' of undefined",
                "timestamp": 1540440916980,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Credentials_Password: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440918194,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Credentials_PasswordConfirmation: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440918195,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Enrollee_ID: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440918195,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Credentials_Password: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440918881,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Credentials_PasswordConfirmation: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440918882,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Enrollee_ID: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440918882,
                "type": ""
            }
        ],
        "screenShotFile": "images/001400d6-0074-0084-00d0-005100f80026.png",
        "timestamp": 1540440915885,
        "duration": 3280
    },
    {
        "description": "should dicplay ADA COMPLIANCE|should verify footer part|Home Page",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 3193,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images/00d40082-00a3-00bb-00c8-0090008f0027.png",
        "timestamp": 1540440917947,
        "duration": 414
    },
    {
        "description": "should get Main Menu URL|should verify footer part|Home Page",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 3193,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "images/003b00ac-0054-0095-00ab-005e002e009a.png",
        "timestamp": 1540440920805,
        "duration": 518
    },
    {
        "description": "should give an error message if password does not contain at least 1 integer|Application for Membership Form Test|Test of functionality of joining Shmear Society",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 3276,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/Areas/Ccenrg/Assets/_shared/js/main.js 186:59 Uncaught TypeError: Cannot read property 'loadingStoresText' of undefined",
                "timestamp": 1540440920876,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Credentials_Password: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440922130,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Credentials_PasswordConfirmation: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440922130,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Enrollee_ID: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440922130,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Credentials_Password: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440922730,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Credentials_PasswordConfirmation: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440922730,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Enrollee_ID: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440922730,
                "type": ""
            }
        ],
        "screenShotFile": "images/003100cf-0065-00e2-00eb-0016009300cf.png",
        "timestamp": 1540440919769,
        "duration": 3241
    },
    {
        "description": "should get Catering Menu URL|should verify footer part|Home Page",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 3193,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "images/008200a6-00e4-004b-0079-00eb00d2008e.png",
        "timestamp": 1540440923282,
        "duration": 631
    },
    {
        "description": "should give an error message if password does not contain at least 1 capital letter|Application for Membership Form Test|Test of functionality of joining Shmear Society",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 3276,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/Areas/Ccenrg/Assets/_shared/js/main.js 186:59 Uncaught TypeError: Cannot read property 'loadingStoresText' of undefined",
                "timestamp": 1540440924939,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Credentials_Password: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440926239,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Credentials_PasswordConfirmation: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440926240,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Enrollee_ID: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440926240,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Credentials_Password: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440926849,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Credentials_PasswordConfirmation: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440926849,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Enrollee_ID: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440926849,
                "type": ""
            }
        ],
        "screenShotFile": "images/0079006a-003c-00e6-0058-00980033001c.png",
        "timestamp": 1540440923587,
        "duration": 3526
    },
    {
        "description": "should get OUR FOOD URL|should verify footer part|Home Page",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 3193,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "images/008700e3-0043-00cf-009b-007e000c00c7.png",
        "timestamp": 1540440925305,
        "duration": 534
    },
    {
        "description": "should get ABOUT US URL|should verify footer part|Home Page",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 3193,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "images/0093005b-00ee-00d5-008d-0035005600f0.png",
        "timestamp": 1540440928727,
        "duration": 559
    },
    {
        "description": "should give an error message if password does not contain at least 1 lowercase letter|Application for Membership Form Test|Test of functionality of joining Shmear Society",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 3276,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/Areas/Ccenrg/Assets/_shared/js/main.js 186:59 Uncaught TypeError: Cannot read property 'loadingStoresText' of undefined",
                "timestamp": 1540440928831,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Credentials_Password: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440930133,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Credentials_PasswordConfirmation: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440930133,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Enrollee_ID: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440930133,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Credentials_Password: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440930871,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Credentials_PasswordConfirmation: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440930871,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Enrollee_ID: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440930871,
                "type": ""
            }
        ],
        "screenShotFile": "images/006f00d9-005e-00a8-00f6-006500a80067.png",
        "timestamp": 1540440927670,
        "duration": 3508
    },
    {
        "description": "should show an error message if First Name Field is left empty|Application for Membership Form Test|Test of functionality of joining Shmear Society",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 3276,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/Areas/Ccenrg/Assets/_shared/js/main.js 186:59 Uncaught TypeError: Cannot read property 'loadingStoresText' of undefined",
                "timestamp": 1540440932988,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Credentials_Password: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440934094,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Credentials_PasswordConfirmation: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440934095,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Enrollee_ID: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440934095,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Credentials_Password: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440934557,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Credentials_PasswordConfirmation: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440934557,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Enrollee_ID: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440934557,
                "type": ""
            }
        ],
        "screenShotFile": "images/00e50033-00d4-003a-00c4-00260086006a.png",
        "timestamp": 1540440931792,
        "duration": 3079
    },
    {
        "description": "should get CAREERS URL|should verify footer part|Home Page",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 3193,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "images/008500de-00f4-003c-00a7-00c4002a0091.png",
        "timestamp": 1540440931163,
        "duration": 2724
    },
    {
        "description": "should get Contact Us URL|should verify footer part|Home Page",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 3193,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "images/0064002f-004e-008c-004b-00460043005a.png",
        "timestamp": 1540440936115,
        "duration": 924
    },
    {
        "description": "should show an error message if Last Name Field is left empty|Application for Membership Form Test|Test of functionality of joining Shmear Society",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 3276,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/Areas/Ccenrg/Assets/_shared/js/main.js 186:59 Uncaught TypeError: Cannot read property 'loadingStoresText' of undefined",
                "timestamp": 1540440936758,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Credentials_Password: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440938021,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Credentials_PasswordConfirmation: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440938021,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Enrollee_ID: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440938021,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Credentials_Password: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440938524,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Credentials_PasswordConfirmation: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440938525,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Enrollee_ID: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440938525,
                "type": ""
            }
        ],
        "screenShotFile": "images/003100cc-00bc-008b-009d-00a900a20005.png",
        "timestamp": 1540440935459,
        "duration": 3400
    },
    {
        "description": "should get FAQS URL|should verify footer part|Home Page",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 3193,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "SEVERE",
                "message": "https://www.einsteinbros.com/images/bg-franchising.jpg - Failed to load resource: the server responded with a status of 404 ()",
                "timestamp": 1540440937077,
                "type": ""
            }
        ],
        "screenShotFile": "images/00820002-00a6-0049-00ee-009c002b0080.png",
        "timestamp": 1540440938870,
        "duration": 621
    },
    {
        "description": "should show an error message if Gender is not chosen|Application for Membership Form Test|Test of functionality of joining Shmear Society",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 3276,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/Areas/Ccenrg/Assets/_shared/js/main.js 186:59 Uncaught TypeError: Cannot read property 'loadingStoresText' of undefined",
                "timestamp": 1540440940505,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Credentials_Password: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440941674,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Credentials_PasswordConfirmation: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440941674,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Enrollee_ID: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440941675,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Credentials_Password: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440942159,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Credentials_PasswordConfirmation: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440942159,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Enrollee_ID: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440942159,
                "type": ""
            }
        ],
        "screenShotFile": "images/0027009e-009c-00d8-003a-00e700a9005a.png",
        "timestamp": 1540440939455,
        "duration": 2903
    },
    {
        "description": "should choose Gender from drop-down menu|Application for Membership Form Test|Test of functionality of joining Shmear Society",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 3276,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/Areas/Ccenrg/Assets/_shared/js/main.js 186:59 Uncaught TypeError: Cannot read property 'loadingStoresText' of undefined",
                "timestamp": 1540440944090,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Credentials_Password: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440945404,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Credentials_PasswordConfirmation: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440945404,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Enrollee_ID: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440945404,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Credentials_Password: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440946234,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Credentials_PasswordConfirmation: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440946234,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Enrollee_ID: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440946234,
                "type": ""
            }
        ],
        "screenShotFile": "images/00c400a1-0055-0060-0034-00ce009100cd.png",
        "timestamp": 1540440942898,
        "duration": 3387
    },
    {
        "description": "should test if Gender options are correct|Application for Membership Form Test|Test of functionality of joining Shmear Society",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 3276,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/Areas/Ccenrg/Assets/_shared/js/main.js 186:59 Uncaught TypeError: Cannot read property 'loadingStoresText' of undefined",
                "timestamp": 1540440947930,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Credentials_Password: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440949139,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Credentials_PasswordConfirmation: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440949139,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Enrollee_ID: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440949140,
                "type": ""
            }
        ],
        "screenShotFile": "images/00340004-006e-0017-0021-008100ac009c.png",
        "timestamp": 1540440946816,
        "duration": 2601
    },
    {
        "description": "should show an error message if birthday field is empty|Application for Membership Form Test|Test of functionality of joining Shmear Society",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 3276,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/Areas/Ccenrg/Assets/_shared/js/main.js 186:59 Uncaught TypeError: Cannot read property 'loadingStoresText' of undefined",
                "timestamp": 1540440951045,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Credentials_Password: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440952226,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Credentials_PasswordConfirmation: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440952226,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Enrollee_ID: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440952226,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Credentials_Password: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440952699,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Credentials_PasswordConfirmation: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440952699,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Enrollee_ID: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440952699,
                "type": ""
            }
        ],
        "screenShotFile": "images/00ed00f0-0013-00f6-00fd-00730006001c.png",
        "timestamp": 1540440949997,
        "duration": 2944
    },
    {
        "description": "should show an error message if age of an applicant is younger than 13|Application for Membership Form Test|Test of functionality of joining Shmear Society",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 3276,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/Areas/Ccenrg/Assets/_shared/js/main.js 186:59 Uncaught TypeError: Cannot read property 'loadingStoresText' of undefined",
                "timestamp": 1540440954489,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Credentials_Password: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440956676,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Credentials_PasswordConfirmation: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440956676,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Enrollee_ID: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440956676,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Credentials_Password: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440957155,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Credentials_PasswordConfirmation: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440957155,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Enrollee_ID: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440957155,
                "type": ""
            }
        ],
        "screenShotFile": "images/00800063-00cc-0057-00e9-00150085001e.png",
        "timestamp": 1540440953471,
        "duration": 3974
    },
    {
        "description": "should show an error message if city field is left empty|Application for Membership Form Test|Test of functionality of joining Shmear Society",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 3276,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/Areas/Ccenrg/Assets/_shared/js/main.js 186:59 Uncaught TypeError: Cannot read property 'loadingStoresText' of undefined",
                "timestamp": 1540440959105,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Credentials_Password: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440960380,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Credentials_PasswordConfirmation: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440960381,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Enrollee_ID: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440960381,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Credentials_Password: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440960782,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Credentials_PasswordConfirmation: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440960782,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Enrollee_ID: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440960782,
                "type": ""
            }
        ],
        "screenShotFile": "images/002d00a1-000f-00b5-00c0-0046004300eb.png",
        "timestamp": 1540440958014,
        "duration": 2969
    },
    {
        "description": "should show an error message if state is not chosen from drop-down menu|Application for Membership Form Test|Test of functionality of joining Shmear Society",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 3276,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/Areas/Ccenrg/Assets/_shared/js/main.js 186:59 Uncaught TypeError: Cannot read property 'loadingStoresText' of undefined",
                "timestamp": 1540440962903,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Credentials_Password: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440964059,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Credentials_PasswordConfirmation: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440964059,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Enrollee_ID: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440964059,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Credentials_Password: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440964588,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Credentials_PasswordConfirmation: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440964588,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Enrollee_ID: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440964589,
                "type": ""
            }
        ],
        "screenShotFile": "images/00cc007a-00ce-0041-00bb-004700ad00fb.png",
        "timestamp": 1540440961522,
        "duration": 3231
    },
    {
        "description": "should show an error message if zip code field is left empty|Application for Membership Form Test|Test of functionality of joining Shmear Society",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 3276,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/Areas/Ccenrg/Assets/_shared/js/main.js 186:59 Uncaught TypeError: Cannot read property 'loadingStoresText' of undefined",
                "timestamp": 1540440966319,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Credentials_Password: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440968090,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Credentials_PasswordConfirmation: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440968090,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Enrollee_ID: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440968090,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Credentials_Password: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440968449,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Credentials_PasswordConfirmation: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440968449,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Enrollee_ID: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440968449,
                "type": ""
            }
        ],
        "screenShotFile": "images/0005002d-0023-0029-009b-000e002c006b.png",
        "timestamp": 1540440965319,
        "duration": 3388
    },
    {
        "description": "should show an error message if there are letters in the zip code field|Application for Membership Form Test|Test of functionality of joining Shmear Society",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 3276,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/Areas/Ccenrg/Assets/_shared/js/main.js 186:59 Uncaught TypeError: Cannot read property 'loadingStoresText' of undefined",
                "timestamp": 1540440970341,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Credentials_Password: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440971426,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Credentials_PasswordConfirmation: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440971426,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Enrollee_ID: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440971426,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/Areas/Ccenrg/Assets/_shared/js/main.js 251:25 Uncaught TypeError: Cannot read property 'html' of undefined",
                "timestamp": 1540440971553,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/Areas/Ccenrg/Assets/_shared/js/main.js 251:25 Uncaught TypeError: Cannot read property 'html' of undefined",
                "timestamp": 1540440971559,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/Areas/Ccenrg/Assets/_shared/js/main.js 251:25 Uncaught TypeError: Cannot read property 'html' of undefined",
                "timestamp": 1540440971565,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/Areas/Ccenrg/Assets/_shared/js/main.js 251:25 Uncaught TypeError: Cannot read property 'html' of undefined",
                "timestamp": 1540440971569,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/Areas/Ccenrg/Assets/_shared/js/main.js 251:25 Uncaught TypeError: Cannot read property 'html' of undefined",
                "timestamp": 1540440971573,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Credentials_Password: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440971888,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Credentials_PasswordConfirmation: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440971889,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Enrollee_ID: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440971889,
                "type": ""
            }
        ],
        "screenShotFile": "images/00760003-001d-00d3-007d-00070056004e.png",
        "timestamp": 1540440969295,
        "duration": 2909
    },
    {
        "description": "should show an error message if there are special characters in the zip code field|Application for Membership Form Test|Test of functionality of joining Shmear Society",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 3276,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/Areas/Ccenrg/Assets/_shared/js/main.js 186:59 Uncaught TypeError: Cannot read property 'loadingStoresText' of undefined",
                "timestamp": 1540440973885,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Credentials_Password: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440975167,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Credentials_PasswordConfirmation: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440975168,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Enrollee_ID: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440975168,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Credentials_Password: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440975868,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Credentials_PasswordConfirmation: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440975886,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Enrollee_ID: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440975886,
                "type": ""
            }
        ],
        "screenShotFile": "images/00310012-00ee-008b-0079-008400d70081.png",
        "timestamp": 1540440972758,
        "duration": 3357
    },
    {
        "description": "should be able to uncheck checkmarks opposite Email Notifications|Application for Membership Form Test|Test of functionality of joining Shmear Society",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 3276,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/Areas/Ccenrg/Assets/_shared/js/main.js 186:59 Uncaught TypeError: Cannot read property 'loadingStoresText' of undefined",
                "timestamp": 1540440977744,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Credentials_Password: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440979070,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Credentials_PasswordConfirmation: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440979070,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Enrollee_ID: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440979070,
                "type": ""
            }
        ],
        "screenShotFile": "images/009500b2-0012-00c8-0070-005800930031.png",
        "timestamp": 1540440976667,
        "duration": 2612
    },
    {
        "description": "should be able to uncheck checkmarks opposite Catering Email Notifications|Application for Membership Form Test|Test of functionality of joining Shmear Society",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 3276,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/Areas/Ccenrg/Assets/_shared/js/main.js 186:59 Uncaught TypeError: Cannot read property 'loadingStoresText' of undefined",
                "timestamp": 1540440981077,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Credentials_Password: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440982373,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Credentials_PasswordConfirmation: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440982373,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Enrollee_ID: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440982373,
                "type": ""
            }
        ],
        "screenShotFile": "images/003b00e2-006b-00db-00c7-00b000c800ee.png",
        "timestamp": 1540440979799,
        "duration": 2761
    },
    {
        "description": "should test happy path|Successful Joining Shmear Society Test Scenario|Test of functionality of joining Shmear Society",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 3276,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/Areas/Ccenrg/Assets/_shared/js/main.js 186:59 Uncaught TypeError: Cannot read property 'loadingStoresText' of undefined",
                "timestamp": 1540440984146,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Credentials_Password: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440985458,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Credentials_PasswordConfirmation: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440985458,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Enrollee_ID: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440985458,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Credentials_Password: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440987761,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Credentials_PasswordConfirmation: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440987761,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Enrollee_ID: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440987761,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Credentials_Password: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440988361,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Credentials_PasswordConfirmation: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440988361,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://shared.einsteinbros.com/join - [DOM] Found 2 elements with non-unique id #Enrollee_ID: (More info: https://goo.gl/9p2vKq) %o %o",
                "timestamp": 1540440988361,
                "type": ""
            }
        ],
        "screenShotFile": "images/007900c1-0058-0053-0061-0000009300bc.png",
        "timestamp": 1540440983084,
        "duration": 5366
    },
    {
        "description": "find all the HomePage URL|should verify footer part|Home Page",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 3193,
        "browser": {
            "name": "chrome",
            "version": "69.0.3497.100"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "SEVERE",
                "message": "https://www.einsteinbros.com/images/bg-franchising.jpg - Failed to load resource: the server responded with a status of 404 ()",
                "timestamp": 1540440939548,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://www.einsteinbros.com/images/bg-franchising.jpg - Failed to load resource: the server responded with a status of 404 ()",
                "timestamp": 1540440968822,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://www.einsteinbros.com/images/bg-franchising.jpg - Failed to load resource: the server responded with a status of 404 ()",
                "timestamp": 1540440981894,
                "type": ""
            }
        ],
        "screenShotFile": "images/00850038-00c6-0076-000d-004900fa00e7.png",
        "timestamp": 1540440941391,
        "duration": 46893
    }
];

    this.sortSpecs = function () {
        this.results = results.sort(function sortFunction(a, b) {
    if (a.sessionId < b.sessionId) return -1;else if (a.sessionId > b.sessionId) return 1;

    if (a.timestamp < b.timestamp) return -1;else if (a.timestamp > b.timestamp) return 1;

    return 0;
});
    };

    this.sortSpecs();
});

app.filter('bySearchSettings', function () {
    return function (items, searchSettings) {
        var filtered = [];
        var prevItem = null;

        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            item.displaySpecName = false;

            countLogMessages(item);

            var hasLog = searchSettings.withLog && item.browserLogs && item.browserLogs.length > 0;
            if (searchSettings.description === '' ||
                (item.description && item.description.toLowerCase().indexOf(searchSettings.description.toLowerCase()) > -1)) {

                if (searchSettings.passed && item.passed || hasLog) {
                    checkIfShouldDisplaySpecName(prevItem, item);
                    filtered.push(item);
                    prevItem = item;
                } else if (searchSettings.failed && !item.passed && !item.pending || hasLog) {
                    checkIfShouldDisplaySpecName(prevItem, item);
                    filtered.push(item);
                    prevItem = item;
                } else if (searchSettings.pending && item.pending || hasLog) {
                    checkIfShouldDisplaySpecName(prevItem, item);
                    filtered.push(item);
                    prevItem = item;
                }

            }
        }

        return filtered;
    };
});

var isValueAnArray = function (val) {
    return Array.isArray(val);
};

var checkIfShouldDisplaySpecName = function (prevItem, item) {
    if (!prevItem) {
        item.displaySpecName = true;
        return;
    }

    if (getSpec(item.description) != getSpec(prevItem.description)) {
        item.displaySpecName = true;
        return;
    }
};

var getSpec = function (str) {
    var describes = str.split('|');
    return describes[describes.length - 1];
};

var countLogMessages = function (item) {
    if ((!item.logWarnings || !item.logErrors) && item.browserLogs && item.browserLogs.length > 0) {
        item.logWarnings = 0;
        item.logErrors = 0;
        for (var logNumber = 0; logNumber < item.browserLogs.length; logNumber++) {
            var logEntry = item.browserLogs[logNumber];
            if (logEntry.level === 'SEVERE') {
                item.logErrors++;
            }
            if (logEntry.level === 'WARNING') {
                item.logWarnings++;
            }
        }
    }
};
