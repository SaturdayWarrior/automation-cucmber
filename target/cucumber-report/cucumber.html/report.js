$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("womenCategoryTest.feature");
formatter.feature({
  "line": 1,
  "name": "Test women category page",
  "description": "",
  "id": "test-women-category-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Verify that user add product to cart successfully",
  "description": "",
  "id": "test-women-category-page;verify-that-user-add-product-to-cart-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@WomenAddToCart"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User click on women tab",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User should successfully navigate to women category page and verify \u003c\"WOMEN\"\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User click on the product \"\u003cproduct\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User change quantity \"\u003cqty\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User select size \"\u003csize\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User select colour \"\u003ccolour\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User click on Add To Cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Verify the message \u003c\"Product successfully added to your shopping cart\"\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Click on X button and close the popup",
  "keyword": "And "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "test-women-category-page;verify-that-user-add-product-to-cart-successfully;",
  "rows": [
    {
      "cells": [
        "product",
        "qty",
        "size",
        "colour"
      ],
      "line": 22,
      "id": "test-women-category-page;verify-that-user-add-product-to-cart-successfully;;1"
    },
    {
      "cells": [
        "Blouse",
        "2",
        "M",
        "White"
      ],
      "line": 23,
      "id": "test-women-category-page;verify-that-user-add-product-to-cart-successfully;;2"
    },
    {
      "cells": [
        "Printed Dress",
        "3",
        "L",
        "Orange"
      ],
      "line": 24,
      "id": "test-women-category-page;verify-that-user-add-product-to-cart-successfully;;3"
    },
    {
      "cells": [
        "Printed Chiffon Dress",
        "4",
        "S",
        "Green"
      ],
      "line": 25,
      "id": "test-women-category-page;verify-that-user-add-product-to-cart-successfully;;4"
    },
    {
      "cells": [
        "Printed Summer Dress",
        "2",
        "M",
        "Blue"
      ],
      "line": 26,
      "id": "test-women-category-page;verify-that-user-add-product-to-cart-successfully;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 14920445500,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Verify that user add product to cart successfully",
  "description": "",
  "id": "test-women-category-page;verify-that-user-add-product-to-cart-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@WomenAddToCart"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User click on women tab",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User should successfully navigate to women category page and verify \u003c\"WOMEN\"\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User click on the product \"Blouse\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User change quantity \"2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User select size \"M\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User select colour \"White\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User click on Add To Cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Verify the message \u003c\"Product successfully added to your shopping cart\"\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Click on X button and close the popup",
  "keyword": "And "
});
formatter.match({
  "location": "SignInSteps.userIsOnHomepage()"
});
formatter.result({
  "duration": 244092600,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.userClickOnWomenTab()"
});
formatter.result({
  "duration": 4345076800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "WOMEN",
      "offset": 70
    }
  ],
  "location": "WomenCategorySteps.userShouldSuccessfullyNavigateToWomenCategoryPageAndVerify(String)"
});
formatter.result({
  "duration": 86406200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blouse",
      "offset": 27
    }
  ],
  "location": "WomenCategorySteps.userClickOnTheProduct(String)"
});
formatter.result({
  "duration": 3953146800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 22
    }
  ],
  "location": "WomenCategorySteps.userChangeQuantity(String)"
});
formatter.result({
  "duration": 311610900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "M",
      "offset": 18
    }
  ],
  "location": "WomenCategorySteps.userSelectSize(String)"
});
formatter.result({
  "duration": 292018300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "White",
      "offset": 20
    }
  ],
  "location": "WomenCategorySteps.userSelectColour(String)"
});
formatter.result({
  "duration": 110412600,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.userClickOnAddToCartButton()"
});
formatter.result({
  "duration": 95451200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product successfully added to your shopping cart",
      "offset": 21
    }
  ],
  "location": "WomenCategorySteps.verifyTheMessage(String)"
});
formatter.result({
  "duration": 50446300,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.clickOnXButtonAndCloseThePopup()"
});
formatter.result({
  "duration": 37300,
  "status": "passed"
});
formatter.after({
  "duration": 859323200,
  "status": "passed"
});
formatter.before({
  "duration": 8164926300,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Verify that user add product to cart successfully",
  "description": "",
  "id": "test-women-category-page;verify-that-user-add-product-to-cart-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@WomenAddToCart"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User click on women tab",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User should successfully navigate to women category page and verify \u003c\"WOMEN\"\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User click on the product \"Printed Dress\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User change quantity \"3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User select size \"L\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User select colour \"Orange\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User click on Add To Cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Verify the message \u003c\"Product successfully added to your shopping cart\"\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Click on X button and close the popup",
  "keyword": "And "
});
formatter.match({
  "location": "SignInSteps.userIsOnHomepage()"
});
formatter.result({
  "duration": 58700,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.userClickOnWomenTab()"
});
formatter.result({
  "duration": 3046412600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "WOMEN",
      "offset": 70
    }
  ],
  "location": "WomenCategorySteps.userShouldSuccessfullyNavigateToWomenCategoryPageAndVerify(String)"
});
formatter.result({
  "duration": 58951200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Dress",
      "offset": 27
    }
  ],
  "location": "WomenCategorySteps.userClickOnTheProduct(String)"
});
formatter.result({
  "duration": 2188420200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 22
    }
  ],
  "location": "WomenCategorySteps.userChangeQuantity(String)"
});
formatter.result({
  "duration": 292889800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "L",
      "offset": 18
    }
  ],
  "location": "WomenCategorySteps.userSelectSize(String)"
});
formatter.result({
  "duration": 263892300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orange",
      "offset": 20
    }
  ],
  "location": "WomenCategorySteps.userSelectColour(String)"
});
formatter.result({
  "duration": 98042300,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.userClickOnAddToCartButton()"
});
formatter.result({
  "duration": 86101800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product successfully added to your shopping cart",
      "offset": 21
    }
  ],
  "location": "WomenCategorySteps.verifyTheMessage(String)"
});
formatter.result({
  "duration": 41448700,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.clickOnXButtonAndCloseThePopup()"
});
formatter.result({
  "duration": 24800,
  "status": "passed"
});
formatter.after({
  "duration": 829329500,
  "status": "passed"
});
formatter.before({
  "duration": 9225380100,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Verify that user add product to cart successfully",
  "description": "",
  "id": "test-women-category-page;verify-that-user-add-product-to-cart-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@WomenAddToCart"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User click on women tab",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User should successfully navigate to women category page and verify \u003c\"WOMEN\"\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User click on the product \"Printed Chiffon Dress\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User change quantity \"4\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User select size \"S\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User select colour \"Green\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User click on Add To Cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Verify the message \u003c\"Product successfully added to your shopping cart\"\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Click on X button and close the popup",
  "keyword": "And "
});
formatter.match({
  "location": "SignInSteps.userIsOnHomepage()"
});
formatter.result({
  "duration": 50400,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.userClickOnWomenTab()"
});
formatter.result({
  "duration": 2754347700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "WOMEN",
      "offset": 70
    }
  ],
  "location": "WomenCategorySteps.userShouldSuccessfullyNavigateToWomenCategoryPageAndVerify(String)"
});
formatter.result({
  "duration": 69928800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Chiffon Dress",
      "offset": 27
    }
  ],
  "location": "WomenCategorySteps.userClickOnTheProduct(String)"
});
formatter.result({
  "duration": 2843330600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 22
    }
  ],
  "location": "WomenCategorySteps.userChangeQuantity(String)"
});
formatter.result({
  "duration": 289588600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 18
    }
  ],
  "location": "WomenCategorySteps.userSelectSize(String)"
});
formatter.result({
  "duration": 138038600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Green",
      "offset": 20
    }
  ],
  "location": "WomenCategorySteps.userSelectColour(String)"
});
formatter.result({
  "duration": 207858500,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.userClickOnAddToCartButton()"
});
formatter.result({
  "duration": 71274400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product successfully added to your shopping cart",
      "offset": 21
    }
  ],
  "location": "WomenCategorySteps.verifyTheMessage(String)"
});
formatter.result({
  "duration": 40321700,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.clickOnXButtonAndCloseThePopup()"
});
formatter.result({
  "duration": 17100,
  "status": "passed"
});
formatter.after({
  "duration": 822879400,
  "status": "passed"
});
formatter.before({
  "duration": 10782388600,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Verify that user add product to cart successfully",
  "description": "",
  "id": "test-women-category-page;verify-that-user-add-product-to-cart-successfully;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@WomenAddToCart"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User click on women tab",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User should successfully navigate to women category page and verify \u003c\"WOMEN\"\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User click on the product \"Printed Summer Dress\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User change quantity \"2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User select size \"M\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User select colour \"Blue\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User click on Add To Cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Verify the message \u003c\"Product successfully added to your shopping cart\"\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Click on X button and close the popup",
  "keyword": "And "
});
formatter.match({
  "location": "SignInSteps.userIsOnHomepage()"
});
formatter.result({
  "duration": 85900,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.userClickOnWomenTab()"
});
formatter.result({
  "duration": 3427451300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "WOMEN",
      "offset": 70
    }
  ],
  "location": "WomenCategorySteps.userShouldSuccessfullyNavigateToWomenCategoryPageAndVerify(String)"
});
formatter.result({
  "duration": 87186700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Summer Dress",
      "offset": 27
    }
  ],
  "location": "WomenCategorySteps.userClickOnTheProduct(String)"
});
formatter.result({
  "duration": 2353389600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 22
    }
  ],
  "location": "WomenCategorySteps.userChangeQuantity(String)"
});
formatter.result({
  "duration": 293037400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "M",
      "offset": 18
    }
  ],
  "location": "WomenCategorySteps.userSelectSize(String)"
});
formatter.result({
  "duration": 200288700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blue",
      "offset": 20
    }
  ],
  "location": "WomenCategorySteps.userSelectColour(String)"
});
formatter.result({
  "duration": 83966600,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.userClickOnAddToCartButton()"
});
formatter.result({
  "duration": 84076800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product successfully added to your shopping cart",
      "offset": 21
    }
  ],
  "location": "WomenCategorySteps.verifyTheMessage(String)"
});
formatter.result({
  "duration": 35740000,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.clickOnXButtonAndCloseThePopup()"
});
formatter.result({
  "duration": 44200,
  "status": "passed"
});
formatter.after({
  "duration": 808412500,
  "status": "passed"
});
});