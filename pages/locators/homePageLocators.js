const homePageLocators = {
    loginModal: {
        cross: `//button[text()="✕"]`,
        username: `//span[text()="Enter Email/Mobile number"]`,
        password: `//span[text()="Enter Password"]`,
        loginBtn: `//span[text()="Login"]/parent::button`,
        usernameError: `//*[text()="Your username or password is incorrect"]`,
        passwordError: `//*[text()="Please enter Password"]`
    },
    searchBar: `input[name="q"]`,
    searchBtn: `button[type="submit"]:has(svg)`,
}

module.exports = { homePageLocators };