
exports.purchaseItem = class purchaseItem {
    /**
    * @param {import('@playwright/test').Page} page
    */
    constructor(page) {
        this.page = page;
        this.selectFirstItem = page.locator('.card > a');
        this.clickAddToCartBtn = page.getByRole('link', { name: 'Add to cart' });
        this.clickCartMenu = page.getByRole('link', { name: 'Cart', exact: true });
        this.totalAmount = page.locator('#totalp');
        this.clickPlaceOrderBtn = page.getByRole('button', { name: 'Place Order' });
        this.placeOrderFormName = page.locator('#name');
        this.placeOrderFormCountry = page.getByLabel('Country:');
        this.placeOrderFormCity = page.getByLabel('City:');
        this.placeOrderFormCreditCard = page.getByLabel('Credit card:');
        this.placeOrderFormMonth = page.getByLabel('Month:');
        this.placeOrderFormYear = page.getByLabel('Year:');
        this.placeOrderFormPurchaseBtn = page.getByRole('button', { name: 'Purchase' });
        this.placeOrderFormSuccessfullyPurchasedPopup = page.getByText('Thank you for your purchase!');
        this.placeOrderPopupOkBtn = page.getByRole('button', { name: 'OK' });
        this.selectSecondItem = page.locator('div:nth-child(2) > .card > a');
        this.goToHomePage = page.getByRole('link', { name: 'Home (current)' });
        this.selectThirdItem = page.locator('div:nth-child(5) > .card > a');
        this.deleteItemFromCart = page.locator('//*[@id="tbodyid"]/tr[1]/td[4]/a');
    }

    async addFirstProductToCart() {
        await this.selectFirstItem.first().click();
        await this.clickAddToCartBtn.click();
        await this.page.once('dialog', dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
            dialog.dismiss().catch(() => {});
        });
    }

    async gotoCart(){
        await this.clickCartMenu.click();
        await this.totalAmount.waitFor(30000);
    }

    async addMultipleProductsToCart(){
        await this.goToHomePage.click();
        await this.selectFirstItem.first().click();
        await this.clickAddToCartBtn.click();
        await this.page.once('dialog', dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
            dialog.dismiss().catch(() => {});
        });
        await this.goToHomePage.click();
        await this.selectSecondItem.click();
        await this.page.once('dialog', dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
            dialog.dismiss().catch(() => {});
          });
        await this.clickAddToCartBtn.click();
        await this.goToHomePage.click();
        await this.selectThirdItem.click()
        await this.clickAddToCartBtn.click();
        await this.page.once('dialog', dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
            dialog.dismiss().catch(() => {});
        }); 

    }

    async deleteProductFromtheCart(){
        await this.deleteItemFromCart.click();
    }

    async placeOrder(){
        await this.clickPlaceOrderBtn.click();
        await this.placeOrderFormName.fill('Jimmyy');
        await this.placeOrderFormCountry.fill('Canada');
        await this.placeOrderFormCity.fill('Toronto');
        await this.placeOrderFormCreditCard.fill('4588526658525689');
        await this.placeOrderFormMonth.fill('July');
        await this.placeOrderFormYear.fill('2023');
        await this.placeOrderFormPurchaseBtn.click();
        await this.placeOrderPopupOkBtn.click();
    }
}
