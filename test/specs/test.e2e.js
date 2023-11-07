const { expect } = require('@wdio/globals')
const HomePage = require('../pageobjects/home.page')
const CartPage = require('../pageobjects/cart.page')

describe('Search for a product', () => {
    it('should search for a product by passing a product name', async () => {
        await HomePage.open();
        await HomePage.searchProduct("Macbook");
    })

    it('open the first product from the result list and add to the cart', async () => {
        await HomePage.openProduct();
    })
     it('assert if the product has been successfully added to cart its price', async () => {
         await CartPage.addProductToCart();
     })
})