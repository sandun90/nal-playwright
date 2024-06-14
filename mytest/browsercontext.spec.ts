import {test,expect, Browser, Page, Locator, BrowserContext} from '@playwright/test'
import {webkit,chromium,firefox} from 'playwright'

test('login browser contest test',async()=>{

    const browser:Browser=await chromium.launch({headless:false});
    const browserContext_1:BrowserContext=await browser.newContext();
    const page1:Page=await browserContext_1.newPage(); 


    const browserContext_2:BrowserContext=await browser.newContext();
    const page2:Page=await browserContext_2.newPage(); 

    await page1.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    const username1:Locator=await page1.locator('#input-email');
    const password1:Locator=await page1.locator('#input-password');
    const loginButon1:Locator=await page1.locator("[value='Login']");

    await username1.fill("pwtest@opencart.com");
    await password1.fill("playwright@123");
    await loginButon1.click();

    await page2.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    const username2:Locator=await page2.locator('#input-email');
    const password2:Locator=await page2.locator('#input-password');
    const loginButon2:Locator=await page2.locator("[value='Login']");

    await username2.fill("userpw@pw.com");
    await password2.fill("Test@123");
    await loginButon2.click();


    // const title=await page1.title();

    // console.log("Home page Title :" , title);

    // await page1.screenshot({path:'homepage.png'});

    // expect (title).toEqual('Swag Labs');

    await browserContext_1.close();
    await browserContext_2.close();


    await browser.close();

})