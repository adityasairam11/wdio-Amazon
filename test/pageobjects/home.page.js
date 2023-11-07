const { $ } = require('@wdio/globals')
var productPriceValue=0;

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage{
    /**
     * define selectors using getter methods
     */
    get searchBox () {
        return $('#twotabsearchtextbox');
    }

    get product () {
        return $('.s-product-image-container');
    }

    get productPrice(){
        return $('//span[@class="a-price aok-align-center reinventPricePriceToPayMargin priceToPay"]//span[@class="a-price-whole"]')
    }

    get btnSubmit () {
        return $('#nav-search-submit-button');
    }


    get addToCart () {
        const addToCartEle = $('#add-to-cart-button');
        return addToCartEle;
    }


    async searchProduct(productName) {
        await this.searchBox.setValue(productName);
        await this.btnSubmit.click();
    }

    async openProduct(){
        await this.product.click();
        browser.switchWindow("amazon.in/Apple");
        //await this.productPrice.waitForDisplayed({timeout:5000});
        productPriceValue = await this.productPrice.getText();
        console.log("productPriceValue::",productPriceValue);
        await this.addToCart.waitForDisplayed({timeout:5000});
        await this.addToCart.click();
    }

    get getProductPrice(){
        return productPriceValue;
    }

    open () {
        browser.maximizeWindow();
        return browser.url('/');
    }
}

module.exports = new HomePage();