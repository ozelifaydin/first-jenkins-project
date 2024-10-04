import { test } from '@playwright/test';

test('Getting the title of the page', async ({ page }) => {
   //go to the https://practice.cydeo.com/
   await page.goto('https://practice.cydeo.com/');
   
   // Get the title of the page
   let pageTitle = await page.title();
   console.log('Title of the page: ', pageTitle);
   // await page.waitForTimeout(3000);

//    // Verify the title of the page
//    expect(pageTitle).toContain('Practice');
 
});

test('Getting the correct URL of the page', async ({ page }) => {
    //go to the https://practice.cydeo.com/
   await page.goto('https://practice.cydeo.com/');

   // Get the URL of the page
   let pageURL = await page.url();
   console.log('URL of the page: ', pageURL);
   // await page.waitForTimeout(3000);

 });

 test('Set the window size', async ({ page }) => {
    await page.setViewportSize({ width: 1900, height: 1080 });
    //go to the https://practice.cydeo.com/ 
    await page.goto('https://practice.cydeo.com/');
   // await page.waitForTimeout(3000);
    
    
 });