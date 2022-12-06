const helpers = require("../helpers/helpers");
const { cartPageLocators } = require("../pages/locators/cartPageLocators");
async function addToCartAndVerifyTotal(page, total) {
    //-----------add to cart------------
    await helpers.waitAndClick(page, cartPageLocators.addToCartBtn);
    //--------total amount verify-------
    const totalAmt = await helpers.getValue(page, cartPageLocators.totalAmount);
    expect(totalAmt).toEqual(total);
}

module.exports = { addToCartAndVerifyTotal };