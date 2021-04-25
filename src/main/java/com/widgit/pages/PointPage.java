package com.widgit.pages;

import com.cucumber.listener.Reporter;
import com.widgit.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;

public class PointPage extends Utility {

    private static final Logger log = LogManager.getLogger(CarouselPage.class.getName());

    @FindBy(xpath = "//a[text()='About Widgit']")
    WebElement _aboutWidgit;


    @FindBy(xpath = "(//p[@class='txtgreylarge acenter']/span)[position()=7]")
    WebElement _mouseHover_SupportWord;

    private static final By symbols = By.xpath("//div[@id='point_Point.tooltipDiv']/p");

    public void userClicksOnAboutWidgitLink() {
        clickOnElement(_aboutWidgit);
        Reporter.addStepLog("User Clicks On AboutWidgit Link" + _aboutWidgit);
        log.info("User Clicks On AboutWidgit Link" + _aboutWidgit);
    }

    public void verifyTitleOfThePage(String title){
        String pageTitle = waitForTitleContains(10,title);
        Assert.assertEquals(pageTitle, title);
        Reporter.addStepLog("verify Title of ThePage" + pageTitle);
        log.info("verify Title of ThePage" + pageTitle);
    }

    public void aUserHoversOverAWord() {
        doActionsMoveToElement(_mouseHover_SupportWord);
        Reporter.addStepLog("User mouse hover on word" + _mouseHover_SupportWord);
        log.info("User mouse hover on word" + _mouseHover_SupportWord);
    }

    public void theWordShouldBeHighlighted() {
        waitUntilVisibilityOfElementLocated(_mouseHover_SupportWord, 10);
        Reporter.addStepLog("The Word ShouldBe Highlighted" + _mouseHover_SupportWord);
        log.info("The Word ShouldBe Highlighted" + _mouseHover_SupportWord);

    }

    public void aSymbolOrMultipleSymbolsShouldAppearForThatContext(String text) {
       List<String> textList= getElementsTextList(symbols,10);
       Assert.assertEquals(textList.toString(),text);
        Reporter.addStepLog("Symbol should appear on the context" + symbols);
        log.info("Symbol should appear on the context" + symbols);


    }

}


