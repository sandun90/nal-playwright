import {test,expect, Browser, Page, Locator} from '@playwright/test'
import {webkit,chromium,firefox} from 'playwright'

test('login test',async()=>{
    
    const browser:Browser=await chromium.launch({headless:false});
    
    const page:Page=await browser.newPage();
    await page.goto('https://www.saucedemo.com/');
    
    const username:Locator=await page.locator('#user-name');
    const password:Locator=await page.locator('#password');
    const loginButon:Locator=await page.locator("[value='Login']");

    await username.fill("standard_user");
    await password.fill("secret_sauce");
    await loginButon.click();

    const title=await page.title();

    console.log("Home page Title :" , title);

    await page.screenshot({path:'homepage.png'});

    expect (title).toEqual('Swag Labs');

    await browser.close();


})