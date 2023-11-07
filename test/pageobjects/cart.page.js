const { $ } = require('@wdio/globals')
const HomePage = require('../pageobjects/home.page')
var assert = require('assert');

class CartPage{

    get checkoutBtn () {
        return $('.a-button-input[aria-labelledby="attach-sidesheet-checkout-button-announce"]');
    }

    get cartSuccessMsg(){
        const cartMsgEle = $('//div[@class="a-box a-alert a-alert-success added-to-cart-message-box"]//h4[@class="a-alert-heading"]');
        return cartMsgEle;
    }

    get cartTotal () {
        const cartPrice =  $('//span[@id="attach-accessory-cart-subtotal"]');
        return cartPrice;
    }

    async addProductToCart(){
        await expect(this.cartSuccessMsg).toHaveText('Added to Cart');
        var cartTotalValue = await (this.cartTotal).getText();
        cartTotalValue = cartTotalValue.substring(1,(cartTotalValue.length-3));
        assert(cartTotalValue==HomePage.getProductPrice); 
    }
}

module.exports = new CartPage();