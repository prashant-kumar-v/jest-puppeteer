const { homePageLocators } = require("./locators/homePageLocators");
const helpers = require("../helpers/helpers");

async function closeLoginModal(page) {
    await helpers.waitAndClick(page, homePageLocators.loginModal.cross);
}

async function fillLoginFormAndSubmit(page, args) {
    const usr = await helpers.waitAndClick(page, homePageLocators.loginModal.username);
    await usr.type(args.username);
    const pw = await helpers.waitAndClick(page, homePageLocators.loginModal.password);
    await pw.type(args.password);
    await helpers.waitAndClick(page, homePageLocators.loginModal.loginBtn);
}

async function errorVerify(page, args) {
    for (const key in args) {
        const val = await helpers.getValue(page, homePageLocators.loginModal[key]);
        expect(val).toEqual(args[key]);
    }
}

module.exports = { closeLoginModal, fillLoginFormAndSubmit, errorVerify, };