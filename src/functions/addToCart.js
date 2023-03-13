import isObjectWithPropIn from "./isObjectWithPropIn";

const addToCart = (item, cart) => {
    if (!isObjectWithPropIn(item, item.id, cart)) {
        cart.push(item);
    }

}

export default addToCart;