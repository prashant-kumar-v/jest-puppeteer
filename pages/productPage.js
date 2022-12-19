const { homePageLocators } = require("./locators/homePageLocators");
const { productPageLocators } = require("../pages/locators/productPageLocators");
const helpers = require("../helpers/helpers");

async function searchProduct(page, item) {
    await page.click(homePageLocators.searchBar);
    await page.type(homePageLocators.searchBar, item);
    await page.click(homePageLocators.searchBtn);
}

async function clickOnProduct(page, searchProductStr) {
    await helpers.waitAndClick(page, `//*[text()="${searchProductStr}"]`);
}

async function getHighlightsAndVerify(page, expected) {
    await page.waitForXPath(productPageLocators.hl);
    const elements = await page.$x(productPageLocators.hl);
    const data = [];
    for (const hl of elements) {
        data.push(await page.evaluate(ele => ele.innerText, hl));
    }
    expect(data).toEqual(expect.arrayContaining(expected));
}

module.exports = { searchProduct, clickOnProduct, getHighlightsAndVerify }