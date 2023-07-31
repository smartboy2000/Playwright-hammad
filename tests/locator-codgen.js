import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('jimmyy');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('abcd@1234');
  await page.locator('#loginpassword').press('Enter');
  await page.getByRole('button', { name: 'Log in' }).click();

  
  await page.locator('.card > a').first().click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('link', { name: 'Add to cart' }).click();
  await page.getByRole('link', { name: 'Cart', exact: true }).click();
  await page.getByRole('button', { name: 'Place Order' }).click();
  await page.getByLabel('Total: 360').click();
  await page.getByLabel('Total: 360').fill('Jimmyy');
  await page.getByLabel('Country:').click();
  await page.getByLabel('Country:').fill('Canada');
  await page.getByLabel('City:').click();
  await page.getByLabel('City:').fill('Toronto');
  await page.getByLabel('Credit card:').click();
  await page.getByLabel('Credit card:').fill('4588526658525689');
  await page.getByLabel('Month:').click();
  await page.getByLabel('Month:').fill('July');
  await page.getByLabel('Year:').click();
  await page.getByLabel('Year:').fill('2023');
  await page.getByRole('button', { name: 'Purchase' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('link', { name: 'Cart' }).click();
});