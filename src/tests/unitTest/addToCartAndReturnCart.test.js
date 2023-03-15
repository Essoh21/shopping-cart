import addToCartAndReturnCart from "../../functions/addToCartAndReturnCart";
import isObjectWithPropIn from "../../functions/isObjectWithPropIn";

jest.mock("../../functions/isObjectWithPropIn");

describe('addToCartAndReturnCart function', () => {
    const existingItem = { id: 1, name: 'Existing Item' };
    const newItem = { id: 2, name: 'New Item' };
    const initialCart = [existingItem];

    it('returns the original cart if the item already exists in the cart', () => {
        isObjectWithPropIn.mockReturnValue(true);
        const result = addToCartAndReturnCart(existingItem, initialCart);
        expect(result).toEqual(initialCart);
    });

    it('adds the item to the cart if it does not already exist', () => {
        isObjectWithPropIn.mockReturnValue(false);
        const result = addToCartAndReturnCart(newItem, initialCart);
        expect(result).toEqual([...initialCart, newItem]);
    });

    it('does not modify the original cart', () => {
        isObjectWithPropIn.mockReturnValue(false);
        const result = addToCartAndReturnCart(newItem, initialCart);
        expect(result).not.toBe(initialCart);
    });

    it('calls isObjectWithPropIn with the correct arguments', () => {
        isObjectWithPropIn.mockReturnValue(true);
        addToCartAndReturnCart(existingItem, initialCart);
        expect(isObjectWithPropIn).toHaveBeenCalledWith(existingItem, existingItem.id, initialCart);
    });

    it('creates a deep copy of the cart before modifying it', () => {
        isObjectWithPropIn.mockReturnValue(false);
        const result = addToCartAndReturnCart(newItem, initialCart);
        expect(result).not.toBe(initialCart);
        expect(result).not.toBe([newItem]);
        expect(result[0]).toEqual(existingItem);
        expect(result[1]).toEqual(newItem);
    });
});
