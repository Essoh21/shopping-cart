import isObjectWithPropIn from "./isObjectWithPropIn";

const addToCartAndReturnCart = (item, cart) => {
    // avoid modifying cart directley since cart is going to be used as state in react
    const copiedCart = [...JSON.parse(JSON.stringify(cart))];

    if (!isObjectWithPropIn(item, item.id, copiedCart)) {
        copiedCart.push(item);
        return copiedCart;
    }
    return cart;
}

export default addToCartAndReturnCart;