import { createContext, useReducer } from "react";
import ACTIONS from "./ACTIONS";

const CartContext = createContext(null);
const dispatchContext = createContext(null);

function cartReducer(cart, action) {
    switch (action.type) {
        case ACTIONS.AddToCart: {
            if (cart.some((cartItem) => cartItem.id === action.item.id)) {
                return;
            }
            return [...cart, action.item];
        }
        case ACTIONS.QtyChange: {
            return cart.map(item => {
                if ((item.id === action.id) && (Number(action.value) <= 5)) {
                    return { ...item, number: Number(action.value) };
                }
                return item;
            });
        }
        case ACTIONS.RemoveButtonClicked: {
            return (
                cart.filter((item) => item.id !== action.id)
            )
        }
        default: {
            throw console.error('unknown type');
        }
    }

}

function ContextProvider({ children }) {
    let savedData = !localStorage.getItem("cart")
        ? []
        : JSON.parse(localStorage.getItem("cart"));
    const [cart, dispatch] = useReducer(cartReducer, savedData);
    return (
        <CartContext.Provider value={cart}>
            <dispatchContext.Provider value={dispatch}>
                {children}
            </dispatchContext.Provider>

        </CartContext.Provider>)
}

export default ContextProvider;
export { CartContext, dispatchContext };