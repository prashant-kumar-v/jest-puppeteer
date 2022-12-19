const cartPageLocators = {
    addToCartBtn: `//*[text()="Add to cart"]`,
    totalAmount: `//*[text()=" ₹63,068"]`,
    removeProduct: `//div[text()="Remove"]`,
    removeConfirmBtn: `//div[text()="Cancel"]/following-sibling::div[text()="Remove"]`
}

module.exports = { cartPageLocators };