import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import internal.GlobalVariable as GlobalVariable

WebUI.openBrowser('');
WebUI.navigateToUrl('http://localhost:3000/canvas')
WebUI.delay(1)

TestObject canvas = findTestObject('Page_Buildstreet POC/canvas page/Canvas');
TestObject msg = findTestObject('Page_Buildstreet POC/canvas page/Click message');

WebUI.clickOffset(canvas, 10, 10)
WebUI.delay(1)

WebUI.clickOffset(canvas, 50, 50)
WebUI.delay(1)
WebUI.verifyElementPresent(msg, 20)
WebUI.verifyElementText(msg, 'You clicked on the red rectangle!');

WebUI.clickOffset(canvas, 300, 50)
WebUI.delay(1)
WebUI.verifyElementPresent(msg, 20)
WebUI.verifyElementText(msg, 'You clicked on the blue rectangle!');

WebUI.clickOffset(canvas, 10, 10)
WebUI.delay(1)
WebUI.closeBrowser();
