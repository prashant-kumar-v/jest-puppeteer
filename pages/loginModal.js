const { homePageLocators } = require("./locators/homePageLocators");
const helpers = require("../helpers/helpers");
/**
 * @module loginModal
 */
/**
 * Close Login modal
 * @param {string} page - Page instance 
 */
async function closeLoginModal(page) {
    await helpers.waitAndClick(page, homePageLocators.loginModal.cross);
}

/**
 * Fill login form and click on submit
 * @param {string} page - Page instance
 * @param {object} args
 * @param {string} args.username - Enter email as your username
 * @param {string} args.password - Enter password
 */
async function fillLoginFormAndSubmit(page, args) {
    const usr = await helpers.waitAndClick(page, homePageLocators.loginModal.username);
    await usr.type(args.username);
    const pw = await helpers.waitAndClick(page, homePageLocators.loginModal.password);
    await pw.type(args.password);
    await helpers.waitAndClick(page, homePageLocators.loginModal.loginBtn);
}

/**
 * Fetch error and verify
 * @param {string} page - Page instance 
 * @param {object} args - 
 * @param {string} [args.usernameError] - Enter username error
 * @param {string} [args.passwordError] - Enter password error
 */
async function errorVerify(page, args) {
    for (const key in args) {
        const val = await helpers.getValue(page, homePageLocators.loginModal[key]);
        expect(val).toEqual(args[key]);
    }
}

module.exports = { closeLoginModal, fillLoginFormAndSubmit, errorVerify, };