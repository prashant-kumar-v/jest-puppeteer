const { homePageLocators } = require("./locators/homePageLocators");
const { productPageLocators } = require("../pages/locators/productPageLocators");
const helpers = require("../helpers/helpers");

/**
 * @module productPage
 */

/**
 * Search product and displayed
 * @param {string} page - Page instance 
 * @param {string} item - Item wants to search
 */
async function searchProduct(page, item) {
    await page.click(homePageLocators.searchBar);
    await page.type(homePageLocators.searchBar, item);
    await page.click(homePageLocators.searchBtn);
}

/**
 * Click on product to open in new page
 * @param {string} page - Page instance 
 * @param {string} searchProductName - Searched product name
 */
async function clickOnProduct(page, searchProductName) {
    await helpers.waitAndClick(page, productPageLocators.product(searchProductName));
}

/**
 * Fetch and verify product highlights
 * @param {string} page - Page instance 
 * @param {Array<highlights>} expected - Expected product highlights
 */
async function getHighlightsAndVerify(page, expected) {
    await page.waitForXPath(productPageLocators.highlights);
    const elements = await page.$x(productPageLocators.highlights);
    const data = [];
    for (const hl of elements) {
        data.push(await page.evaluate(ele => ele.innerText, hl));
    }
    expect(data).toEqual(expect.arrayContaining(expected));
}

module.exports = { searchProduct, clickOnProduct, getHighlightsAndVerify }