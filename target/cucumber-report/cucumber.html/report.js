$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/widgit/featurefile/carousel.feature");
formatter.feature({
  "line": 2,
  "name": "Carousel",
  "description": "",
  "id": "carousel",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5037195000,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User clicks on the Product Link",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User clicks on Widgit Online link",
  "keyword": "And "
});
formatter.match({
  "location": "CarouselSteps.userIsOnHomePage()"
});
formatter.result({
  "duration": 180682100,
  "status": "passed"
});
formatter.match({
  "location": "CarouselSteps.userClicksOnTheProductLink()"
});
formatter.result({
  "duration": 255241700,
  "status": "passed"
});
formatter.match({
  "location": "CarouselSteps.userClicksOnWidgitOnlineLink()"
});
formatter.result({
  "duration": 2258950500,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Verify Carousel navigates right",
  "description": "",
  "id": "carousel;verify-carousel-navigates-right",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "User clicks on right navigation button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "The content shifts once to the right with new img displaying text \"Mind\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CarouselSteps.userClicksOnRightNavigationButton()"
});
formatter.result({
  "duration": 264233500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mind",
      "offset": 67
    }
  ],
  "location": "CarouselSteps.theContentShiftsOnceToTheRightWithNewImgDisplayingText(String)"
});
formatter.result({
  "duration": 123325100,
  "status": "passed"
});
formatter.after({
  "duration": 801085900,
  "status": "passed"
});
formatter.before({
  "duration": 2719829700,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User clicks on the Product Link",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User clicks on Widgit Online link",
  "keyword": "And "
});
formatter.match({
  "location": "CarouselSteps.userIsOnHomePage()"
});
formatter.result({
  "duration": 279900,
  "status": "passed"
});
formatter.match({
  "location": "CarouselSteps.userClicksOnTheProductLink()"
});
formatter.result({
  "duration": 461068800,
  "status": "passed"
});
formatter.match({
  "location": "CarouselSteps.userClicksOnWidgitOnlineLink()"
});
formatter.result({
  "duration": 3808126900,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Verify Carousel navigates left",
  "description": "",
  "id": "carousel;verify-carousel-navigates-left",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "User clicks on left navigation button",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "The content shifts once to the left with new img displaying text \"EAL\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CarouselSteps.userClicksOnLeftNavigationButton()"
});
formatter.result({
  "duration": 189171500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "EAL",
      "offset": 66
    }
  ],
  "location": "CarouselSteps.theContentShiftsOnceToTheLeftWithNewImgDisplayingText(String)"
});
formatter.result({
  "duration": 665464000,
  "status": "passed"
});
formatter.after({
  "duration": 880606000,
  "status": "passed"
});
formatter.before({
  "duration": 2810142200,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User clicks on the Product Link",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User clicks on Widgit Online link",
  "keyword": "And "
});
formatter.match({
  "location": "CarouselSteps.userIsOnHomePage()"
});
formatter.result({
  "duration": 238500,
  "status": "passed"
});
formatter.match({
  "location": "CarouselSteps.userClicksOnTheProductLink()"
});
formatter.result({
  "duration": 611643100,
  "status": "passed"
});
formatter.match({
  "location": "CarouselSteps.userClicksOnWidgitOnlineLink()"
});
formatter.result({
  "duration": 2151077200,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Verify Carousel rotates through all the content",
  "description": "",
  "id": "carousel;verify-carousel-rotates-through-all-the-content",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "User has navigated through all the content",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "The carousel goes back and shows the first item \"Flashcards\"again",
  "keyword": "Then "
});
formatter.match({
  "location": "CarouselSteps.userHasNavigatedThroughAllTheContent()"
});
formatter.result({
  "duration": 3931832400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Flashcards",
      "offset": 49
    }
  ],
  "location": "CarouselSteps.theCarouselGoesBackAndShowsTheFirstItemAgain(String)"
});
formatter.result({
  "duration": 699906200,
  "status": "passed"
});
formatter.after({
  "duration": 809810200,
  "status": "passed"
});
formatter.uri("src/test/java/com/widgit/featurefile/point.feature");
formatter.feature({
  "line": 1,
  "name": "Point",
  "description": "",
  "id": "point",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3249421500,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User clicks on About Widgit link",
  "keyword": "And "
});
formatter.match({
  "location": "PointSteps.userIsOnHomePage()"
});
formatter.result({
  "duration": 283300,
  "status": "passed"
});
formatter.match({
  "location": "PointSteps.userClicksOnAboutWidgitLink()"
});
formatter.result({
  "duration": 1069966000,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Check symbols appear correctly",
  "description": "",
  "id": "point;check-symbols-appear-correctly",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "A word has a valid symbol, or valid symbols",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "verify title of the Page\"About Us | Widgit\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "A user hovers over a word",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "After a short delay",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "The word should be highlighted",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "A symbol,or multiple symbols,\"[support, support, support]\" should appear for that context",
  "keyword": "And "
});
formatter.match({
  "location": "PointSteps.aWordHasAValidSymbolOrValidSymbols()"
});
formatter.result({
  "duration": 23100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "About Us | Widgit",
      "offset": 25
    }
  ],
  "location": "PointSteps.verifyTitleOfThePage(String)"
});
formatter.result({
  "duration": 15533300,
  "status": "passed"
});
formatter.match({
  "location": "PointSteps.aUserHoversOverAWord()"
});
formatter.result({
  "duration": 191577500,
  "status": "passed"
});
formatter.match({
  "location": "PointSteps.afterAShortDelay()"
});
formatter.result({
  "duration": 22900,
  "status": "passed"
});
formatter.match({
  "location": "PointSteps.theWordShouldBeHighlighted()"
});
formatter.result({
  "duration": 87118300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "[support, support, support]",
      "offset": 30
    }
  ],
  "location": "PointSteps.aSymbolOrMultipleSymbolsShouldAppearForThatContext(String)"
});
formatter.result({
  "duration": 2536285600,
  "status": "passed"
});
formatter.after({
  "duration": 786610200,
  "status": "passed"
});
});