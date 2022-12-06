const { homePageLocators } = require("./locators/homePageLocators");
const { productPageLocators } = require("../pages/locators/productPageLocators");
const helpers = require("../helpers/helpers");

async function searchProductAndVerify(browser, page, item, args) {
    //-----------close login modal------------
    await closeLoginModal(page);
    //-----------search product---------------
    await searchProduct(page, item);
    await helpers.waitAndClick(page, productPageLocators.product);
    //-----------new tab instance-------------
    const newPage = await helpers.newTabInstance(page, browser);
    //-----------highlights verify-------------
    await highlightsVerify(newPage, args)
    return newPage;
}

async function closeLoginModal(page) {
    await helpers.waitAndClick(page, homePageLocators.loginModal.cross);
}

async function searchProduct(page, item) {
    await page.click(homePageLocators.searchBar);
    await page.type(homePageLocators.searchBar, item);
    await page.click(homePageLocators.searchBtn);
}

async function highlightsVerify(page, args) {
    for (const key in args) {
        const val = await helpers.getValue(page, productPageLocators.highlights[key]);
        expect(val).toEqual(args[key]);
    }
}

module.exports = { searchProductAndVerify, }