const loginModal = require("../pages/loginModal");
const productPage = require("../pages/productPage");
const cartPage = require("../pages/cartPage");
const helpers = require("../helpers/helpers");
const testData = require("../pages/fixtures/testData.json");
const url = "https://www.flipkart.com/";

describe("Flipkart", () => {
    beforeEach(async () => {
        await page.goto(url, {
            waitUntil: "domcontentloaded" || "networkidle0"
        });
    });

    test("username error", async () => {
        await loginModal.fillLoginFormAndSubmit(page, { username: "prashantstarvarshney28@gmail.com", password: "123" });
        await loginModal.errorVerify(page, { usernameError: "Your username or password is incorrect" });
    });

    test("password blank error", async () => {
        await loginModal.fillLoginFormAndSubmit(page, testData.loginForm);
        await loginModal.errorVerify(page, { passwordError: `Please enter Password` });
    });

    test.only("select product, verify highlights, add to cart, verify total", async () => {
        await loginModal.closeLoginModal(page);
        await productPage.searchProduct(page, testData.product1.productName);
        await productPage.clickOnProduct(page, testData.product1.productName);
        let newPage = await helpers.newTabInstance(page, browser);
        await productPage.getHighlightsAndVerify(newPage, testData.product1.highlights);
        await cartPage.addToCartAndVerifyTotal(newPage, testData.product1.totalPrice);
        await cartPage.removeProductFromCart(newPage);
        await cartPage.removeProductVerify(newPage, testData.product1.removeCartMsg);
    });

});