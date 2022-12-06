const puppeteer = require("puppeteer");
const loginModal = require("../pages/loginModal");
const productPage = require("../pages/productPage");
const cartPage = require("../pages/cartPage");
const url = "https://www.flipkart.com/";

describe("Flipkart", () => {
    let page;
    beforeEach(async () => {
        // browser = await puppeteer.launch({
        //     headless: false,
        //     defaultViewport: null,
        //     args: ["--start-maximized"]
        // });
        // page = await browser.newPage();
        page = await globalThis.__BROWSER_GLOBAL__.newPage();
        await page.goto(url, {
            waitUntil: "domcontentloaded" || "networkidle0"
        });
    });

    test.skip("username error", async () => {
        await loginModal.fillLoginFormAndSubmit(page, { username: "prashantstarvarshney28@gmail.com", password: "123" });
        await loginModal.errorVerify(page, { usernameError: "Your username or password is incorrect" });
    });

    test("password blank error", async () => {
        await loginModal.fillLoginFormAndSubmit(page, { username: "prashantstarvarshney28@gmail.com", password: "" });
        await loginModal.errorVerify(page, { passwordError: `Please enter Password` });
    });

    test("select product, verify highlights, add to cart, verify total", async () => {
        const highlights = {
            rom: "128 GB ROM",
            display: "15.49 cm (6.1 inch) Super Retina XDR Display",
            camera: "12MP + 12MP | 12MP Front Camera",
            processor: "A15 Bionic Chip Processor"
        }
        const newPage = await productPage.searchProductAndVerify(globalThis.__BROWSER_GLOBAL__, page, "iphone 13", highlights);
        await cartPage.addToCartAndVerifyTotal(newPage, "₹66,028");
    });

});