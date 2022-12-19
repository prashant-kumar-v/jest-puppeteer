const loginModal = require("../pages/loginModal");
const productPage = require("../pages/productPage");
const cartPage = require("../pages/cartPage");
const helpers = require("../helpers/helpers");
const url = "https://www.flipkart.com/";

describe("Flipkart E2E", () => {
    beforeEach(async () => {
        await page.goto(url, {
            waitUntil: "domcontentloaded" || "networkidle0"
        });
    });

    test("E2E multiple add to cart, remove and verify", async () => {
        const product1 = "iphone 13";
        const product1Highlights = ["128 GB ROM", "15.49 cm (6.1 inch) Super Retina XDR Display", "12MP + 12MP | 12MP Front Camera", "A15 Bionic Chip Processor"];
        await loginModal.closeLoginModal(page);
        await productPage.searchProduct(page, product1);
        await productPage.clickOnProduct(page, "APPLE iPhone 13 5G (Midnight, 128 GB)");
        let newPage = await helpers.newTabInstance(page, browser);
        await productPage.getHighlightsAndVerify(newPage, product1Highlights);
        await cartPage.addToCartAndVerifyTotal(newPage, "₹63,068");
        await cartPage.totalVerify(newPage, "63,068");
        let removeMsg = "Successfully removed APPLE iPhone 13 5G (Midnight, 128 GB) from your cart";
        await cartPage.removeProductFromCart(newPage);
        await cartPage.removeProductVerify(newPage, removeMsg);

        await newPage.goto(url, { waitUntil: "domcontentloaded" });
        const product2 = "poco m4";
        const product2Highlights = ["6 GB RAM | 128 GB ROM | Expandable Upto 512 GB", "16.71 cm (6.58 inch) Full HD+ Display", "50MP + 2MP | 8MP Front Camera", "5000 mAh Lithium Ion Polymer Battery", "Mediatek Dimensity 700 Processor"];
        await loginModal.closeLoginModal(newPage);
        await productPage.searchProduct(newPage, product2);
        await productPage.clickOnProduct(newPage, "POCO M4 5G (Power Black, 128 GB)");
        newPage = await helpers.newTabInstance(newPage, browser);
        await productPage.getHighlightsAndVerify(newPage, product2Highlights);
        await cartPage.addToCartAndVerifyTotal(newPage, "₹13,048");
        await cartPage.removeProductFromCart(newPage);
        removeMsg = "Successfully removed POCO M4 5G (Power Black, 128 GB) from your cart";
        await cartPage.removeProductVerify(newPage, removeMsg);
        // await helpers.delay(20000);
    });
});