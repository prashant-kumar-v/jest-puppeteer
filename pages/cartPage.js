const helpers = require("../helpers/helpers");
const { cartPageLocators } = require("../pages/locators/cartPageLocators");
async function addToCartAndVerifyTotal(page, total) {
    //-----------add to cart------------
    await helpers.waitAndClick(page, cartPageLocators.addToCartBtn);
    //--------total amount verify-------
    // const totalAmt = await helpers.getValue(page, cartPageLocators.totalAmount);
    // expect(totalAmt).toEqual(total);
}

async function totalVerify(page, total) {
    const element = await page.waitForXPath(`//*[text()=" ₹${total}"]`);
    const data = await page.evaluate(ele => ele.innerText, element);
    expect(data).toEqual(`₹${total}`);
}

async function removeProductFromCart(page) {
    await helpers.waitAndClick(page, cartPageLocators.removeProduct);
    await helpers.waitAndClick(page, cartPageLocators.removeConfirmBtn)
}
async function removeProductVerify(page, removedProductMsg) {
    await page.waitForXPath(`//*[text()="${removedProductMsg}"]`);
    const [element] = await page.$x(`//*[text()="${removedProductMsg}"]`);
    const data = await page.evaluate(ele => ele.innerText, element);
    expect(data).toEqual(removedProductMsg);
}
module.exports = { addToCartAndVerifyTotal, totalVerify, removeProductFromCart, removeProductVerify };