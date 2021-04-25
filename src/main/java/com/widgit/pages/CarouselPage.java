package com.widgit.pages;

import com.cucumber.listener.Reporter;
import com.widgit.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class CarouselPage extends Utility {

    private static final Logger log = LogManager.getLogger(CarouselPage.class.getName());

    @FindBy(xpath = "//ul[@class='menu']/li/a[text()='Products']")
    WebElement _productLink;

    @FindBy(xpath = "//div[@class='mega_block']//h2[text()='Widgit Online']")
    WebElement _click_widgitOnline;

    @FindBy(xpath = "//button[text()='Next']")
    WebElement _rightClick;

   @FindBy(xpath = "(//span[text()='Mind'])[1]")
    WebElement _right_text;

    @FindBy(xpath = "//button[@aria-label='Previous']")
    WebElement _leftClick;

    @FindBy (xpath = "(//span[text()='EAL'])[3]")
    WebElement _left_text;

    @FindBy(xpath = "(//span[text()='Flashcards'])[1]")
    WebElement _first_text;

    private static final By list = By.xpath("//img[@alt='Symbol Communication Books']/../../parent::div/following-sibling::div");

    public void userClicksOnTheProductLink() {
        doActionsMoveToElement(_productLink);
        Reporter.addStepLog("User Clicks On The Product Link" + _productLink);
        log.info("User Clicks On The Product Link" + _productLink);
    }

    public void userClicksOnWidgitOnlineLink() {
        waitUntilVisibilityOfElementLocated(_click_widgitOnline, 10);
        doActionsMoveToElementAndClick(_click_widgitOnline);
        Reporter.addStepLog("User Clicks On WidgitOnline Link" + _click_widgitOnline);
        log.info("User Clicks On WidgitOnline Link" + _click_widgitOnline);
    }

    public void userClicksOnRightNavigationButton() {
        scrollPageDown("1400");
        waitUntilElementToBeClickable(_rightClick, 5);
        clickOnElement(_rightClick);
        Reporter.addStepLog("User Clicks On Right Navigation Button" + _rightClick);
        log.info("User Clicks On Right Navigation Button" + _rightClick);

    }

    public void theContentShiftsOnceToTheRight(String text) {
        Reporter.addStepLog("The content shifts on the right" + _right_text);
        log.info("The content shifts on the right" + _right_text);
        waitUntilVisibilityOfElementLocated(_right_text,10);
        verifyTextAssertEqualsMethod(_right_text,text);
    }
    public void userClicksOnLeftNavigationButton() {
        scrollPageDown("1400");
        waitUntilElementToBeClickable(_leftClick, 10);
        clickOnElement(_leftClick);
        Reporter.addStepLog("User Clicks On Left Navigation Button" + _leftClick);
        log.info("User Clicks On Left Navigation Button" + _leftClick);
    }
    public void theContentShiftsOnceToTheLeftWithNewText(String text){
        Reporter.addStepLog("The content shifts once to the left with new img" + _left_text);
        log.info("The content shifts once to the left with new img" + _left_text);
        waitUntilVisibilityOfElementLocated(_left_text,10);
        verifyTextAssertEqualsMethod(_left_text, text);
    }

    public void userHasNavigatedThroughAllTheContent(){
        Reporter.addStepLog("userHasNavigatedThroughAllTheContent" + list +""+ _rightClick);
        log.info("userHasNavigatedThroughAllTheContent" + list +""+ _rightClick);
        waitUntilElementToBeClickable(_rightClick, 20);
        clickOnElement(_rightClick);
        getCarouselList(list,_rightClick);
    }

    public void theCarouselGoesBackAndShowsTheFirstItemAgain(String text){
        Reporter.addStepLog("userHasNavigatedThroughAllTheContent" + list +""+ _rightClick +""+ text );
        log.info("userHasNavigatedThroughAllTheContent" + list +""+ _rightClick + "" + text);
        scrollPageDown("1500");
        waitUntilVisibilityOfElementLocated(_first_text,10);
        verifyTextAssertEqualsMethod(_first_text,text);

    }

}
