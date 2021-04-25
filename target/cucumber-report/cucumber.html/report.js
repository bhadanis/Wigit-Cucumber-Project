$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/widgit/featurefile/carousel.feature");
formatter.feature({
  "line": 2,
  "name": "Carousel",
  "description": "",
  "id": "carousel",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6563967600,
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
  "duration": 142362900,
  "status": "passed"
});
formatter.match({
  "location": "CarouselSteps.userClicksOnTheProductLink()"
});
formatter.result({
  "duration": 246945200,
  "status": "passed"
});
formatter.match({
  "location": "CarouselSteps.userClicksOnWidgitOnlineLink()"
});
formatter.result({
  "duration": 2085210700,
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
  "duration": 281474900,
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
  "duration": 123259400,
  "status": "passed"
});
formatter.after({
  "duration": 983164800,
  "status": "passed"
});
formatter.before({
  "duration": 3081760600,
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
  "duration": 394800,
  "status": "passed"
});
formatter.match({
  "location": "CarouselSteps.userClicksOnTheProductLink()"
});
formatter.result({
  "duration": 504352200,
  "status": "passed"
});
formatter.match({
  "location": "CarouselSteps.userClicksOnWidgitOnlineLink()"
});
formatter.result({
  "duration": 1556895800,
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
  "duration": 293688700,
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
  "duration": 658949300,
  "status": "passed"
});
formatter.after({
  "duration": 1170365800,
  "status": "passed"
});
formatter.before({
  "duration": 3030386800,
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
  "duration": 218000,
  "status": "passed"
});
formatter.match({
  "location": "CarouselSteps.userClicksOnTheProductLink()"
});
formatter.result({
  "duration": 594537900,
  "status": "passed"
});
formatter.match({
  "location": "CarouselSteps.userClicksOnWidgitOnlineLink()"
});
formatter.result({
  "duration": 1543276900,
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
  "duration": 3491976700,
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
  "duration": 680586500,
  "status": "passed"
});
formatter.after({
  "duration": 989015900,
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
  "duration": 3120585500,
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
  "duration": 321600,
  "status": "passed"
});
formatter.match({
  "location": "PointSteps.userClicksOnAboutWidgitLink()"
});
formatter.result({
  "duration": 1213357800,
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
  "duration": 28100,
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
  "duration": 14086700,
  "status": "passed"
});
formatter.match({
  "location": "PointSteps.aUserHoversOverAWord()"
});
formatter.result({
  "duration": 194825100,
  "status": "passed"
});
formatter.match({
  "location": "PointSteps.afterAShortDelay()"
});
formatter.result({
  "duration": 79200,
  "status": "passed"
});
formatter.match({
  "location": "PointSteps.theWordShouldBeHighlighted()"
});
formatter.result({
  "duration": 60208000,
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
  "duration": 2451636200,
  "status": "passed"
});
formatter.after({
  "duration": 887997200,
  "status": "passed"
});
});