const helpers = require("../helpers/helpers");
const { cartPageLocators } = require("../pages/locators/cartPageLocators");
/**
 * @module cartPage
 */
/**
 * Add to cart product, fetch and verify total price
 * @param {string} page - Page instance
 * @param {string} total - Enter total price 
 */
async function addToCartAndVerifyTotal(page, total) {
    await helpers.waitAndClick(page, cartPageLocators.addToCartBtn);
    await totalVerify(page, total);
}

/**
 * Fetch & verify total price
 * @param {string} page - Page instance  
 * @param {string} total - Enter total price  
 */
async function totalVerify(page, total) {
    const element = await page.waitForXPath(cartPageLocators.totalPrice(total));
    const data = await page.evaluate(ele => ele.innerText, element);
    expect(data).toEqual(`₹${total}`);
}

/**
 * A product remove from cart
 * @param {string} page - Page instance
 */
async function removeProductFromCart(page) {
    await helpers.waitAndClick(page, cartPageLocators.removeProduct);
    await helpers.waitAndClick(page, cartPageLocators.removeConfirmBtn)
}
/**
 * Fetch remove product message and verify with entered message
 * @param {string} page - Page instance
 * @param {string} removedProductMsg - Enter popup message for removed product from cart
 */
async function removeProductVerify(page, removedProductMsg) {
    await page.waitForXPath(cartPageLocators.removeProductMsgPopup(removedProductMsg));
    const [element] = await page.$x(cartPageLocators.removeProductMsgPopup(removedProductMsg));
    const data = await page.evaluate(ele => ele.innerText, element);
    expect(data).toEqual(removedProductMsg);
}

module.exports = { addToCartAndVerifyTotal, totalVerify, removeProductFromCart, removeProductVerify };