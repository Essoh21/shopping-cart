import isObjectWithPropIn from "./isObjectWithPropIn";

const addToCartAndReturnCart = (item, cart) => {
    // avoid modifying cart directly since cart is going to be used as state in react
    let copiedCart = [...JSON.parse(JSON.stringify(cart))];
    //item should have an id (this is not a good practice)
    if (!isObjectWithPropIn(item, item.id, cart)) {
        copiedCart = [...copiedCart, item];
        return copiedCart;
    }
    return cart;
}

export default addToCartAndReturnCart;