package com.widgit.cucumber.stepdefs;

import com.cucumber.listener.Reporter;
import com.widgit.pages.CarouselPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CarouselSteps {
    @Given("^User is on HomePage$")
    public void userIsOnHomePage() {
        Reporter.addStepLog("I am on Home Page: https://www.widgit.com");
    }

    @And("^User clicks on the Product Link$")
    public void userClicksOnTheProductLink() {
        new CarouselPage().userClicksOnTheProductLink();
    }

    @And("^User clicks on Widgit Online link$")
    public void userClicksOnWidgitOnlineLink() {
        new CarouselPage().userClicksOnWidgitOnlineLink();
    }

    @When("^User clicks on right navigation button$")
    public void userClicksOnRightNavigationButton() {
        new CarouselPage().userClicksOnRightNavigationButton();
    }

       @Then("^The content shifts once to the right with new img displaying text \"([^\"]*)\"$")
    public void theContentShiftsOnceToTheRightWithNewImgDisplayingText(String text) {
        new CarouselPage().theContentShiftsOnceToTheRight(text);
    }

    @When("^User clicks on left navigation button$")
    public void userClicksOnLeftNavigationButton() {
        new CarouselPage().userClicksOnLeftNavigationButton();
    }

    @Then("^The content shifts once to the left with new img displaying text \"([^\"]*)\"$")
    public void theContentShiftsOnceToTheLeftWithNewImgDisplayingText(String text)  {
        new CarouselPage().theContentShiftsOnceToTheLeftWithNewText(text);
    }

    @When("^User has navigated through all the content$")
    public void userHasNavigatedThroughAllTheContent() {
        new CarouselPage().userHasNavigatedThroughAllTheContent();
    }

    @Then("^The carousel goes back and shows the first item \"([^\"]*)\"again$")
    public void theCarouselGoesBackAndShowsTheFirstItemAgain(String text)  {
        new CarouselPage().theCarouselGoesBackAndShowsTheFirstItemAgain(text);
    }
}
