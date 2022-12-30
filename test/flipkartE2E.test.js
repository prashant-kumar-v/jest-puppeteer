const loginModal = require("../pages/loginModal");
const productPage = require("../pages/productPage");
const cartPage = require("../pages/cartPage");
const helpers = require("../helpers/helpers");
const testData = require("../pages/fixtures/testData.json");
const testWithRetry = require("../utility/testWithRetry")
const url = "https://www.flipkart.com/";

describe("Flipkart E2E", () => {
    beforeEach(async () => {
        await page.goto(url, {
            waitUntil: "domcontentloaded" || "networkidle0"
        });
    });

    testWithRetry("E2E product add to cart, remove from cart and verify (multiple times)", async () => {
        await loginModal.closeLoginModal(page);
        await productPage.searchProduct(page, testData.product1.productName);
        await productPage.clickOnProduct(page, testData.product1.productName);
        let newPage = await helpers.newTabInstance(page, browser);
        await productPage.getHighlightsAndVerify(newPage, testData.product1.highlights);
        await cartPage.addToCartAndVerifyTotal(newPage, testData.product1.totalPrice);
        await cartPage.removeProductFromCart(newPage);
        await cartPage.removeProductVerify(newPage, testData.product1.removeCartMsg);

        await newPage.goto(url, { waitUntil: "domcontentloaded" });
        await loginModal.closeLoginModal(newPage);
        await productPage.searchProduct(newPage, testData.product2.productName);
        await productPage.clickOnProduct(newPage, testData.product2.productName);
        newPage = await helpers.newTabInstance(newPage, browser);
        await productPage.getHighlightsAndVerify(newPage, testData.product2.highlights);
        await cartPage.addToCartAndVerifyTotal(newPage, testData.product2.totalPrice);
        await cartPage.removeProductFromCart(newPage);
        await cartPage.removeProductVerify(newPage, testData.product2.removeCartMsg);
        // await helpers.delay(20000);
    });
});