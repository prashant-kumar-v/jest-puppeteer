const cartPageLocators = {
    addToCartBtn: `//button[text()="Add to cart"]`,
    totalPrice: (total) => `//*[text()=" ₹${total}"]`,
    removeProduct: `//div[text()="Remove"]`,
    removeConfirmBtn: `//div[text()="Cancel"]/following-sibling::div[text()="Remove"]`,
    removeProductMsgPopup: (removedProductMsg) => `//*[text()="${removedProductMsg}"]`,
}

module.exports = { cartPageLocators };