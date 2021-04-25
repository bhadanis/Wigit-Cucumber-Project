package com.widgit.cucumber;


import com.cucumber.listener.Reporter;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.AfterClass;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features   = ".",
        plugin     = {"pretty","html:target/cucumber-report/cucumber.html", "com.cucumber.listener.ExtentCucumberFormatter:target/Extent_Reports/report.html"},
        monochrome = true
                 )



public class CukeTestOrRunnerClass {
    @AfterClass
    public static void setUp(){

      String projectPath = System.getProperty("user.dir");
        //generates Extent report in the given path
      String reportConfigPath = projectPath + "/src/test/resources/extentreport/extent-config.xml";
        //using the Reporter from cucumber.Listener
      Reporter.loadXMLConfig(reportConfigPath);

        // System.getProperty gets system name & system timezone
        Reporter.setSystemInfo("User Name", System.getProperty("user.name"));
        Reporter.setSystemInfo("Time Zone", System.getProperty("user.timezone"));
        //generic info of the machine
        Reporter.setSystemInfo("Machine", "Windows 10" + "64 Bit");
        //selenium version
        Reporter.setSystemInfo("Selenium", "3.141.59");
        //maven version
        Reporter.setSystemInfo("Maven", "3.6.3");
        //java version
        Reporter.setSystemInfo("Java Version", "1.8.0_281");

}




}
