package com.widgit.cucumber.stepdefs;

import com.cucumber.listener.Reporter;
import com.widgit.pages.PointPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class PointSteps {
    @Given("^User is on Home page$")
    public void userIsOnHomePage() {
        Reporter.addStepLog("I am on Home Page: https://www.widgit.com");

    }

    @And("^User clicks on About Widgit link$")
    public void userClicksOnAboutWidgitLink() {
        new PointPage().userClicksOnAboutWidgitLink();

    }

    @Given("^A word has a valid symbol, or valid symbols$")
    public void aWordHasAValidSymbolOrValidSymbols() {

    }

    @When("^A user hovers over a word$")
    public void aUserHoversOverAWord() {
        new PointPage().aUserHoversOverAWord();

    }

    @And("^After a short delay$")
    public void afterAShortDelay() {
    }

    @Then("^The word should be highlighted$")
    public void theWordShouldBeHighlighted() {
        new PointPage().theWordShouldBeHighlighted();
    }

    @And("^A symbol,or multiple symbols,\"([^\"]*)\" should appear for that context$")
    public void aSymbolOrMultipleSymbolsShouldAppearForThatContext(String text){
        new PointPage().aSymbolOrMultipleSymbolsShouldAppearForThatContext(text);

    }

    @And("^verify title of the Page\"([^\"]*)\"$")
    public void verifyTitleOfThePage(String title) {
        new PointPage().verifyTitleOfThePage(title);


    }
}
