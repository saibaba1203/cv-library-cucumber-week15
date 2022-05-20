$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("JobSearchTest.feature");
formatter.feature({
  "line": 1,
  "name": "Job Search Test",
  "description": "",
  "id": "job-search-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Verify user should be ablt to search job successfully",
  "description": "",
  "id": "job-search-test;verify-user-should-be-ablt-to-search-job-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I enter \"\u003cJOB TITLE\u003e\" in job title field",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter \"\u003cLOCATION\u003e\" in location field",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select \"\u003cDISTANCE\u003e\" in the distance field",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on the More Search Option Link",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter \"\u003cMINIMUM SALARY\u003e\" data in the minimum salary field",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter \"\u003cMAXIMUM SALARY\u003e\" data in the maximum salary field",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select the \"\u003cSALARY TYPE\u003e\" salary type",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select the \"\u003cJOB TYPE\u003e\" job type",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on the Find Jobs Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify the Result \"\u003cRESULT\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "job-search-test;verify-user-should-be-ablt-to-search-job-successfully;",
  "rows": [
    {
      "cells": [
        "JOB TITLE",
        "LOCATION",
        "DISTANCE",
        "MINIMUM SALARY",
        "MAXIMUM SALARY",
        "SALARY TYPE",
        "JOB TYPE",
        "RESULT"
      ],
      "line": 20,
      "id": "job-search-test;verify-user-should-be-ablt-to-search-job-successfully;;1"
    },
    {
      "cells": [
        "Software Tester",
        "Crawley",
        "up to 5 miles",
        "30000",
        "50000",
        "Per annum",
        "Permanent",
        "Permanent Software Tester jobs in Crawley"
      ],
      "line": 21,
      "id": "job-search-test;verify-user-should-be-ablt-to-search-job-successfully;;2"
    },
    {
      "cells": [
        "Software Automation Tester",
        "Harrow",
        "up to 15 miles",
        "30000",
        "60000",
        "Per annum",
        "Contract",
        "Contract Software Automation Tester jobs in Harrow on the Hill"
      ],
      "line": 22,
      "id": "job-search-test;verify-user-should-be-ablt-to-search-job-successfully;;3"
    },
    {
      "cells": [
        "Manual Software Tester",
        "West Sussex",
        "up to 7 miles",
        "30000",
        "60000",
        "Per annum",
        "Any",
        "Manual Software Tester jobs in West Sussex"
      ],
      "line": 23,
      "id": "job-search-test;verify-user-should-be-ablt-to-search-job-successfully;;4"
    },
    {
      "cells": [
        "Retail Manager",
        "Horley",
        "up to 25 miles",
        "30000",
        "50000",
        "Per annum",
        "Permanent",
        "Permanent Retail Manager jobs in Horley"
      ],
      "line": 24,
      "id": "job-search-test;verify-user-should-be-ablt-to-search-job-successfully;;5"
    },
    {
      "cells": [
        "Automation Tester",
        "HA1 1AB",
        "up to 10 miles",
        "300",
        "400",
        "Per day",
        "Contract",
        "Contract Automation Tester jobs in HA1 1AB"
      ],
      "line": 25,
      "id": "job-search-test;verify-user-should-be-ablt-to-search-job-successfully;;6"
    },
    {
      "cells": [
        "Research Scientist",
        "SS12 0NY",
        "up to 50 miles",
        "500",
        "800",
        "Per day",
        "Contract",
        "Contract Research Scientist jobs in SS12 0NY"
      ],
      "line": 26,
      "id": "job-search-test;verify-user-should-be-ablt-to-search-job-successfully;;7"
    },
    {
      "cells": [
        "Software Developer",
        "London",
        "up to 35 miles",
        "45000",
        "75000",
        "Per annum",
        "Permanent",
        "Permanent Software Developer jobs in London"
      ],
      "line": 27,
      "id": "job-search-test;verify-user-should-be-ablt-to-search-job-successfully;;8"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 11304075600,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I accept cookies",
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchTestSteps.iAcceptCookies()"
});
formatter.result({
  "duration": 843601800,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Verify user should be ablt to search job successfully",
  "description": "",
  "id": "job-search-test;verify-user-should-be-ablt-to-search-job-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I enter \"Software Tester\" in job title field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter \"Crawley\" in location field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select \"up to 5 miles\" in the distance field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on the More Search Option Link",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter \"30000\" data in the minimum salary field",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter \"50000\" data in the maximum salary field",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select the \"Per annum\" salary type",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select the \"Permanent\" job type",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on the Find Jobs Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify the Result \"Permanent Software Tester jobs in Crawley\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Software Tester",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterInJobTitleField(String)"
});
formatter.result({
  "duration": 1422390199,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Crawley",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterInLocationField(String)"
});
formatter.result({
  "duration": 171325800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 5 miles",
      "offset": 10
    }
  ],
  "location": "JobSearchTestSteps.iSelectInTheDistanceField(String)"
});
formatter.result({
  "duration": 293171500,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTestSteps.iClickOnTheMoreSearchOptionLink()"
});
formatter.result({
  "duration": 556824099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30000",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterDataInTheMinimumSalaryField(String)"
});
formatter.result({
  "duration": 395474800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50000",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterDataInTheMaximumSalaryField(String)"
});
formatter.result({
  "duration": 120485800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 14
    }
  ],
  "location": "JobSearchTestSteps.iSelectTheSalaryType(String)"
});
formatter.result({
  "duration": 62461301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 14
    }
  ],
  "location": "JobSearchTestSteps.iSelectTheJobType(String)"
});
formatter.result({
  "duration": 164501199,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTestSteps.iClickOnTheFindJobsButton()"
});
formatter.result({
  "duration": 214960800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Software Tester jobs in Crawley",
      "offset": 21
    }
  ],
  "location": "JobSearchTestSteps.iVerifyTheResult(String)"
});
formatter.result({
  "duration": 40204060500,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027search-header__title\u0027]\"}\n  (Session info: chrome\u003d101.0.4951.67)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.1.3\u0027, revision: \u00277b1ebf28ef\u0027\nSystem info: host: \u0027RISHABH\u0027, ip: \u0027192.168.0.15\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [eb6a355618745d7540982d87708c92b0, findElement {using\u003dxpath, value\u003d//div[@class\u003d\u0027search-header__title\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\Sairam12\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:65079}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:65079/devtoo..., se:cdpVersion: 101.0.4951.67, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: eb6a355618745d7540982d87708c92b0\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:567)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:385)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:377)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy22.getText(Unknown Source)\r\n\tat uk.co.library.utility.Utility.getTextFromElement(Utility.java:41)\r\n\tat uk.co.library.utility.Utility.verifyElementText(Utility.java:351)\r\n\tat uk.co.library.pages.ResultPage.verifyTheResults(ResultPage.java:33)\r\n\tat uk.co.library.steps.JobSearchTestSteps.iVerifyTheResult(JobSearchTestSteps.java:62)\r\n\tat ✽.Then I verify the Result \"Permanent Software Tester jobs in Crawley\"(JobSearchTest.feature:17)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 2083255201,
  "status": "passed"
});
formatter.before({
  "duration": 6416120400,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I accept cookies",
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchTestSteps.iAcceptCookies()"
});
formatter.result({
  "duration": 418002100,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Verify user should be ablt to search job successfully",
  "description": "",
  "id": "job-search-test;verify-user-should-be-ablt-to-search-job-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I enter \"Software Automation Tester\" in job title field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter \"Harrow\" in location field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select \"up to 15 miles\" in the distance field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on the More Search Option Link",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter \"30000\" data in the minimum salary field",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter \"60000\" data in the maximum salary field",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select the \"Per annum\" salary type",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select the \"Contract\" job type",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on the Find Jobs Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify the Result \"Contract Software Automation Tester jobs in Harrow on the Hill\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Software Automation Tester",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterInJobTitleField(String)"
});
formatter.result({
  "duration": 302062400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harrow",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterInLocationField(String)"
});
formatter.result({
  "duration": 576019599,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 15 miles",
      "offset": 10
    }
  ],
  "location": "JobSearchTestSteps.iSelectInTheDistanceField(String)"
});
formatter.result({
  "duration": 67674600,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTestSteps.iClickOnTheMoreSearchOptionLink()"
});
formatter.result({
  "duration": 232360700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30000",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterDataInTheMinimumSalaryField(String)"
});
formatter.result({
  "duration": 427077000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "60000",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterDataInTheMaximumSalaryField(String)"
});
formatter.result({
  "duration": 131791400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 14
    }
  ],
  "location": "JobSearchTestSteps.iSelectTheSalaryType(String)"
});
formatter.result({
  "duration": 80862000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contract",
      "offset": 14
    }
  ],
  "location": "JobSearchTestSteps.iSelectTheJobType(String)"
});
formatter.result({
  "duration": 171298301,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTestSteps.iClickOnTheFindJobsButton()"
});
formatter.result({
  "duration": 171309600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contract Software Automation Tester jobs in Harrow on the Hill",
      "offset": 21
    }
  ],
  "location": "JobSearchTestSteps.iVerifyTheResult(String)"
});
formatter.result({
  "duration": 40169813300,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027search-header__title\u0027]\"}\n  (Session info: chrome\u003d101.0.4951.67)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.1.3\u0027, revision: \u00277b1ebf28ef\u0027\nSystem info: host: \u0027RISHABH\u0027, ip: \u0027192.168.0.15\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [04f42ef2fe2dc7a6dc47fcfb21299ecb, findElement {using\u003dxpath, value\u003d//div[@class\u003d\u0027search-header__title\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\Sairam12\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:65261}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:65261/devtoo..., se:cdpVersion: 101.0.4951.67, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 04f42ef2fe2dc7a6dc47fcfb21299ecb\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:567)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:385)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:377)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy22.getText(Unknown Source)\r\n\tat uk.co.library.utility.Utility.getTextFromElement(Utility.java:41)\r\n\tat uk.co.library.utility.Utility.verifyElementText(Utility.java:351)\r\n\tat uk.co.library.pages.ResultPage.verifyTheResults(ResultPage.java:33)\r\n\tat uk.co.library.steps.JobSearchTestSteps.iVerifyTheResult(JobSearchTestSteps.java:62)\r\n\tat ✽.Then I verify the Result \"Contract Software Automation Tester jobs in Harrow on the Hill\"(JobSearchTest.feature:17)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1319683900,
  "status": "passed"
});
formatter.before({
  "duration": 5808941500,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I accept cookies",
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchTestSteps.iAcceptCookies()"
});
formatter.result({
  "duration": 403610199,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Verify user should be ablt to search job successfully",
  "description": "",
  "id": "job-search-test;verify-user-should-be-ablt-to-search-job-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I enter \"Manual Software Tester\" in job title field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter \"West Sussex\" in location field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select \"up to 7 miles\" in the distance field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on the More Search Option Link",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter \"30000\" data in the minimum salary field",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter \"60000\" data in the maximum salary field",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select the \"Per annum\" salary type",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select the \"Any\" job type",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on the Find Jobs Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify the Result \"Manual Software Tester jobs in West Sussex\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Manual Software Tester",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterInJobTitleField(String)"
});
formatter.result({
  "duration": 703439599,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "West Sussex",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterInLocationField(String)"
});
formatter.result({
  "duration": 178556400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 7 miles",
      "offset": 10
    }
  ],
  "location": "JobSearchTestSteps.iSelectInTheDistanceField(String)"
});
formatter.result({
  "duration": 144859300,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTestSteps.iClickOnTheMoreSearchOptionLink()"
});
formatter.result({
  "duration": 365797100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30000",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterDataInTheMinimumSalaryField(String)"
});
formatter.result({
  "duration": 158573700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "60000",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterDataInTheMaximumSalaryField(String)"
});
formatter.result({
  "duration": 247820000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 14
    }
  ],
  "location": "JobSearchTestSteps.iSelectTheSalaryType(String)"
});
formatter.result({
  "duration": 56234000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Any",
      "offset": 14
    }
  ],
  "location": "JobSearchTestSteps.iSelectTheJobType(String)"
});
formatter.result({
  "duration": 54161500,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTestSteps.iClickOnTheFindJobsButton()"
});
formatter.result({
  "duration": 187341399,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Manual Software Tester jobs in West Sussex",
      "offset": 21
    }
  ],
  "location": "JobSearchTestSteps.iVerifyTheResult(String)"
});
formatter.result({
  "duration": 45268561200,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027search-header__title\u0027]\"}\n  (Session info: chrome\u003d101.0.4951.67)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.1.3\u0027, revision: \u00277b1ebf28ef\u0027\nSystem info: host: \u0027RISHABH\u0027, ip: \u0027192.168.0.15\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [fcc4c1679c24544a897cf939d1558682, findElement {using\u003dxpath, value\u003d//div[@class\u003d\u0027search-header__title\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\Sairam12\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:65466}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:65466/devtoo..., se:cdpVersion: 101.0.4951.67, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: fcc4c1679c24544a897cf939d1558682\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:567)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:385)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:377)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy22.getText(Unknown Source)\r\n\tat uk.co.library.utility.Utility.getTextFromElement(Utility.java:41)\r\n\tat uk.co.library.utility.Utility.verifyElementText(Utility.java:351)\r\n\tat uk.co.library.pages.ResultPage.verifyTheResults(ResultPage.java:33)\r\n\tat uk.co.library.steps.JobSearchTestSteps.iVerifyTheResult(JobSearchTestSteps.java:62)\r\n\tat ✽.Then I verify the Result \"Manual Software Tester jobs in West Sussex\"(JobSearchTest.feature:17)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1540616801,
  "status": "passed"
});
formatter.before({
  "duration": 5855042700,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I accept cookies",
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchTestSteps.iAcceptCookies()"
});
formatter.result({
  "duration": 410423500,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Verify user should be ablt to search job successfully",
  "description": "",
  "id": "job-search-test;verify-user-should-be-ablt-to-search-job-successfully;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I enter \"Retail Manager\" in job title field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter \"Horley\" in location field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select \"up to 25 miles\" in the distance field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on the More Search Option Link",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter \"30000\" data in the minimum salary field",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter \"50000\" data in the maximum salary field",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select the \"Per annum\" salary type",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select the \"Permanent\" job type",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on the Find Jobs Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify the Result \"Permanent Retail Manager jobs in Horley\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Retail Manager",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterInJobTitleField(String)"
});
formatter.result({
  "duration": 235161500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Horley",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterInLocationField(String)"
});
formatter.result({
  "duration": 614536400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 25 miles",
      "offset": 10
    }
  ],
  "location": "JobSearchTestSteps.iSelectInTheDistanceField(String)"
});
formatter.result({
  "duration": 131649100,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTestSteps.iClickOnTheMoreSearchOptionLink()"
});
formatter.result({
  "duration": 282189401,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30000",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterDataInTheMinimumSalaryField(String)"
});
formatter.result({
  "duration": 210915600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50000",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterDataInTheMaximumSalaryField(String)"
});
formatter.result({
  "duration": 241440799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 14
    }
  ],
  "location": "JobSearchTestSteps.iSelectTheSalaryType(String)"
});
formatter.result({
  "duration": 97641301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 14
    }
  ],
  "location": "JobSearchTestSteps.iSelectTheJobType(String)"
});
formatter.result({
  "duration": 152454001,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTestSteps.iClickOnTheFindJobsButton()"
});
formatter.result({
  "duration": 162598700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Retail Manager jobs in Horley",
      "offset": 21
    }
  ],
  "location": "JobSearchTestSteps.iVerifyTheResult(String)"
});
formatter.result({
  "duration": 40085428899,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027search-header__title\u0027]\"}\n  (Session info: chrome\u003d101.0.4951.67)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.1.3\u0027, revision: \u00277b1ebf28ef\u0027\nSystem info: host: \u0027RISHABH\u0027, ip: \u0027192.168.0.15\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [ea2d1aea1f4564cf505693c0f049bdcd, findElement {using\u003dxpath, value\u003d//div[@class\u003d\u0027search-header__title\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\Sairam12\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:58727}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:58727/devtoo..., se:cdpVersion: 101.0.4951.67, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: ea2d1aea1f4564cf505693c0f049bdcd\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:567)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:385)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:377)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy22.getText(Unknown Source)\r\n\tat uk.co.library.utility.Utility.getTextFromElement(Utility.java:41)\r\n\tat uk.co.library.utility.Utility.verifyElementText(Utility.java:351)\r\n\tat uk.co.library.pages.ResultPage.verifyTheResults(ResultPage.java:33)\r\n\tat uk.co.library.steps.JobSearchTestSteps.iVerifyTheResult(JobSearchTestSteps.java:62)\r\n\tat ✽.Then I verify the Result \"Permanent Retail Manager jobs in Horley\"(JobSearchTest.feature:17)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1776255401,
  "status": "passed"
});
formatter.before({
  "duration": 6378624200,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I accept cookies",
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchTestSteps.iAcceptCookies()"
});
formatter.result({
  "duration": 429975600,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Verify user should be ablt to search job successfully",
  "description": "",
  "id": "job-search-test;verify-user-should-be-ablt-to-search-job-successfully;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I enter \"Automation Tester\" in job title field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter \"HA1 1AB\" in location field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select \"up to 10 miles\" in the distance field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on the More Search Option Link",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter \"300\" data in the minimum salary field",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter \"400\" data in the maximum salary field",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select the \"Per day\" salary type",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select the \"Contract\" job type",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on the Find Jobs Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify the Result \"Contract Automation Tester jobs in HA1 1AB\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Automation Tester",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterInJobTitleField(String)"
});
formatter.result({
  "duration": 373552199,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HA1 1AB",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterInLocationField(String)"
});
formatter.result({
  "duration": 497729600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 10 miles",
      "offset": 10
    }
  ],
  "location": "JobSearchTestSteps.iSelectInTheDistanceField(String)"
});
formatter.result({
  "duration": 139741301,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTestSteps.iClickOnTheMoreSearchOptionLink()"
});
formatter.result({
  "duration": 243343800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "300",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterDataInTheMinimumSalaryField(String)"
});
formatter.result({
  "duration": 424473900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterDataInTheMaximumSalaryField(String)"
});
formatter.result({
  "duration": 154950500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per day",
      "offset": 14
    }
  ],
  "location": "JobSearchTestSteps.iSelectTheSalaryType(String)"
});
formatter.result({
  "duration": 116837100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contract",
      "offset": 14
    }
  ],
  "location": "JobSearchTestSteps.iSelectTheJobType(String)"
});
formatter.result({
  "duration": 103534300,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTestSteps.iClickOnTheFindJobsButton()"
});
formatter.result({
  "duration": 195337399,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contract Automation Tester jobs in HA1 1AB",
      "offset": 21
    }
  ],
  "location": "JobSearchTestSteps.iVerifyTheResult(String)"
});
formatter.result({
  "duration": 40073683399,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027search-header__title\u0027]\"}\n  (Session info: chrome\u003d101.0.4951.67)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.1.3\u0027, revision: \u00277b1ebf28ef\u0027\nSystem info: host: \u0027RISHABH\u0027, ip: \u0027192.168.0.15\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [698be3b9d4bf086dd16a7c5a9f1a0289, findElement {using\u003dxpath, value\u003d//div[@class\u003d\u0027search-header__title\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\Sairam12\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:63661}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:63661/devtoo..., se:cdpVersion: 101.0.4951.67, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 698be3b9d4bf086dd16a7c5a9f1a0289\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:567)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:385)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:377)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy22.getText(Unknown Source)\r\n\tat uk.co.library.utility.Utility.getTextFromElement(Utility.java:41)\r\n\tat uk.co.library.utility.Utility.verifyElementText(Utility.java:351)\r\n\tat uk.co.library.pages.ResultPage.verifyTheResults(ResultPage.java:33)\r\n\tat uk.co.library.steps.JobSearchTestSteps.iVerifyTheResult(JobSearchTestSteps.java:62)\r\n\tat ✽.Then I verify the Result \"Contract Automation Tester jobs in HA1 1AB\"(JobSearchTest.feature:17)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1868290201,
  "status": "passed"
});
formatter.before({
  "duration": 6155342200,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I accept cookies",
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchTestSteps.iAcceptCookies()"
});
formatter.result({
  "duration": 471845401,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Verify user should be ablt to search job successfully",
  "description": "",
  "id": "job-search-test;verify-user-should-be-ablt-to-search-job-successfully;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I enter \"Research Scientist\" in job title field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter \"SS12 0NY\" in location field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select \"up to 50 miles\" in the distance field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on the More Search Option Link",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter \"500\" data in the minimum salary field",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter \"800\" data in the maximum salary field",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select the \"Per day\" salary type",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select the \"Contract\" job type",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on the Find Jobs Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify the Result \"Contract Research Scientist jobs in SS12 0NY\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Research Scientist",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterInJobTitleField(String)"
});
formatter.result({
  "duration": 756875700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SS12 0NY",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterInLocationField(String)"
});
formatter.result({
  "duration": 193551700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 50 miles",
      "offset": 10
    }
  ],
  "location": "JobSearchTestSteps.iSelectInTheDistanceField(String)"
});
formatter.result({
  "duration": 324040100,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTestSteps.iClickOnTheMoreSearchOptionLink()"
});
formatter.result({
  "duration": 244183300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterDataInTheMinimumSalaryField(String)"
});
formatter.result({
  "duration": 449250799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "800",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterDataInTheMaximumSalaryField(String)"
});
formatter.result({
  "duration": 130901500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per day",
      "offset": 14
    }
  ],
  "location": "JobSearchTestSteps.iSelectTheSalaryType(String)"
});
formatter.result({
  "duration": 129107500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contract",
      "offset": 14
    }
  ],
  "location": "JobSearchTestSteps.iSelectTheJobType(String)"
});
formatter.result({
  "duration": 98961500,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTestSteps.iClickOnTheFindJobsButton()"
});
formatter.result({
  "duration": 153616200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contract Research Scientist jobs in SS12 0NY",
      "offset": 21
    }
  ],
  "location": "JobSearchTestSteps.iVerifyTheResult(String)"
});
formatter.result({
  "duration": 40123819800,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027search-header__title\u0027]\"}\n  (Session info: chrome\u003d101.0.4951.67)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.1.3\u0027, revision: \u00277b1ebf28ef\u0027\nSystem info: host: \u0027RISHABH\u0027, ip: \u0027192.168.0.15\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [02f2a54baabac53628468d07b263eecf, findElement {using\u003dxpath, value\u003d//div[@class\u003d\u0027search-header__title\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\Sairam12\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:55215}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:55215/devtoo..., se:cdpVersion: 101.0.4951.67, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 02f2a54baabac53628468d07b263eecf\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:567)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:385)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:377)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy22.getText(Unknown Source)\r\n\tat uk.co.library.utility.Utility.getTextFromElement(Utility.java:41)\r\n\tat uk.co.library.utility.Utility.verifyElementText(Utility.java:351)\r\n\tat uk.co.library.pages.ResultPage.verifyTheResults(ResultPage.java:33)\r\n\tat uk.co.library.steps.JobSearchTestSteps.iVerifyTheResult(JobSearchTestSteps.java:62)\r\n\tat ✽.Then I verify the Result \"Contract Research Scientist jobs in SS12 0NY\"(JobSearchTest.feature:17)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1827386101,
  "status": "passed"
});
formatter.before({
  "duration": 6186374800,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I accept cookies",
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchTestSteps.iAcceptCookies()"
});
formatter.result({
  "duration": 417687301,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Verify user should be ablt to search job successfully",
  "description": "",
  "id": "job-search-test;verify-user-should-be-ablt-to-search-job-successfully;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I enter \"Software Developer\" in job title field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter \"London\" in location field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select \"up to 35 miles\" in the distance field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on the More Search Option Link",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter \"45000\" data in the minimum salary field",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter \"75000\" data in the maximum salary field",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select the \"Per annum\" salary type",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select the \"Permanent\" job type",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on the Find Jobs Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify the Result \"Permanent Software Developer jobs in London\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Software Developer",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterInJobTitleField(String)"
});
formatter.result({
  "duration": 695333699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterInLocationField(String)"
});
formatter.result({
  "duration": 138168400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 35 miles",
      "offset": 10
    }
  ],
  "location": "JobSearchTestSteps.iSelectInTheDistanceField(String)"
});
formatter.result({
  "duration": 123536099,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTestSteps.iClickOnTheMoreSearchOptionLink()"
});
formatter.result({
  "duration": 210310500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "45000",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterDataInTheMinimumSalaryField(String)"
});
formatter.result({
  "duration": 440324400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "75000",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterDataInTheMaximumSalaryField(String)"
});
formatter.result({
  "duration": 120952601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 14
    }
  ],
  "location": "JobSearchTestSteps.iSelectTheSalaryType(String)"
});
formatter.result({
  "duration": 56347200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 14
    }
  ],
  "location": "JobSearchTestSteps.iSelectTheJobType(String)"
});
formatter.result({
  "duration": 140995000,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTestSteps.iClickOnTheFindJobsButton()"
});
formatter.result({
  "duration": 298792100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Software Developer jobs in London",
      "offset": 21
    }
  ],
  "location": "JobSearchTestSteps.iVerifyTheResult(String)"
});
formatter.result({
  "duration": 47071999500,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027search-header__title\u0027]\"}\n  (Session info: chrome\u003d101.0.4951.67)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.1.3\u0027, revision: \u00277b1ebf28ef\u0027\nSystem info: host: \u0027RISHABH\u0027, ip: \u0027192.168.0.15\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [abb5186426e29b692d2d6987c499041d, findElement {using\u003dxpath, value\u003d//div[@class\u003d\u0027search-header__title\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\Sairam12\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:55492}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:55492/devtoo..., se:cdpVersion: 101.0.4951.67, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: abb5186426e29b692d2d6987c499041d\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:567)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:385)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:377)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy22.getText(Unknown Source)\r\n\tat uk.co.library.utility.Utility.getTextFromElement(Utility.java:41)\r\n\tat uk.co.library.utility.Utility.verifyElementText(Utility.java:351)\r\n\tat uk.co.library.pages.ResultPage.verifyTheResults(ResultPage.java:33)\r\n\tat uk.co.library.steps.JobSearchTestSteps.iVerifyTheResult(JobSearchTestSteps.java:62)\r\n\tat ✽.Then I verify the Result \"Permanent Software Developer jobs in London\"(JobSearchTest.feature:17)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1871242100,
  "status": "passed"
});
});