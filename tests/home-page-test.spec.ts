import { test } from '@playwright/test'
import { HomePage } from '../pages/home-page'

test('Header verification', async ({ page }) => {

    let homePage = new HomePage(page);

    await page.goto('https://www.cars.com/');
   
    await homePage.validateHeader("Imagine the possibilities")
})