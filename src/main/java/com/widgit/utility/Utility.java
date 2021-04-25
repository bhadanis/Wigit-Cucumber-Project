package com.widgit.utility;

import com.widgit.basepage.BasePage;
import org.apache.commons.io.FileUtils;
import org.junit.Assert;
import org.openqa.selenium.*;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.*;

public class Utility extends BasePage {


    public List<WebElement> getElements(By locator) {
        return driver.findElements(locator);
    }


    public Set<String> getCarouselList(By locator, WebElement element) {
        List<WebElement> recomList = getElements(locator);

        System.out.println(recomList.size());
        scrollPageDown("1500");
        Set<String> dataSet = new TreeSet<String>();
        int iterator = 1;
        while (iterator != 9) {
            for (WebElement e : recomList) {
                String text = e.getText();
                if (!text.isEmpty()) {
                    dataSet.add(text);
                }
            }
            element.click();
            iterator++;
        }
        dataSet.stream().forEach(e -> System.out.println(e));
        return dataSet;
    }

       public void scrollPageDown(String height) {
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("window.scrollTo(0, '" + height + "')");
    }

    /**
     * This method will make the web driver wait until WebElement become clickable
     */
    public void waitUntilElementToBeClickable(WebElement element, int timeout) {
        WebDriverWait wait = new WebDriverWait(driver, timeout);
        wait.until(ExpectedConditions.elementToBeClickable(element));
    }
    public void doActionsMoveToElement(WebElement element) {
        Actions act = new Actions(driver);
        act.moveToElement(element).perform();
    }

    public void doActionsMoveToElementAndClick(WebElement element) {
        doActionsMoveToElement(element);
        clickOnElement(element);
    }

    public List<WebElement> waitForVisibilityOfElements(By locator, int timeOut) {
        WebDriverWait wait = new WebDriverWait(driver, timeOut);
        return wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(locator));
    }

    public List<String> getElementsTextList(By locator, int timeOut) {
        List<String> eleTextList = new ArrayList<String>();
        List<WebElement> eleList = waitForVisibilityOfElements(locator, timeOut);
        for (WebElement e : eleList) {
            if (!e.getText().isEmpty()) {
                eleTextList.add(e.getText());
            }
        }
        return eleTextList;
    }

    public static String getScreenshot(WebDriver driver, String screenshotName) {
        String dateName = new SimpleDateFormat("yyyyMMddhhmmss").format(new Date());
        TakesScreenshot ts = (TakesScreenshot) driver;
        File source = ts.getScreenshotAs(OutputType.FILE);

        /**
         * After execution, you could see a folder "FailedTestsScreenshots" under screenshot folder
         */
        String destination = System.getProperty("user.dir") + "/src/main/java/com/widgit/screenshots/" + screenshotName + dateName + ".png";
        File finalDestination = new File(destination);
        try {
            FileUtils.copyFile(source, finalDestination);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return destination;
    }

    public void waitUntilVisibilityOfElementLocated(WebElement element, int timeout) {
        WebDriverWait wait = new WebDriverWait(driver, timeout);
        wait.until(ExpectedConditions.visibilityOf(element));
    }

    public String waitForTitleContains(int timeOut, String title) {
        WebDriverWait wait = new WebDriverWait(driver, timeOut);
        wait.until(ExpectedConditions.titleContains(title));
        return driver.getTitle();
    }
     /**
     * This method will click on element
     */
    public void clickOnElement(WebElement element) {
        element.click();
    }

    /**
     * This method will verify Text using Assert.assertEquals function
     */
    public void verifyTextAssertEqualsMethod(WebElement element, String str) {
        String actualText = element.getText();
        String expectedText = str;
        Assert.assertEquals(expectedText,actualText);
    }

}



