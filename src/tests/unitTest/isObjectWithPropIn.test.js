import isObjectWithPropIn from "../../functions/isObjectWithPropIn";

describe('isObjectWithPropIn', () => {
    it('should return true if an object with the specified property exists in the array', () => {
        const obj = { id: 1, name: 'Product 1', price: 10 };
        const prop = 'id';
        const anArray = [
            { id: 1, name: 'Product 1', price: 10 },
            { id: 2, name: 'Product 2', price: 20 },
            { id: 3, name: 'Product 3', price: 30 },
        ];
        expect(isObjectWithPropIn(obj, prop, anArray)).toBe(true);
    });

    it('should return false if an object with the specified property does not exist in the array', () => {
        const obj = { id: 4, name: 'Product 4', price: 40 };
        const prop = 'id';
        const anArray = [
            { id: 1, name: 'Product 1', price: 10 },
            { id: 2, name: 'Product 2', price: 20 },
            { id: 3, name: 'Product 3', price: 30 },
        ];
        expect(isObjectWithPropIn(obj, prop, anArray)).toBe(false);
    });

    it('should return false if the array is empty', () => {
        const obj = { id: 1, name: 'Product 1', price: 10 };
        const prop = 'id';
        const anArray = [];
        expect(isObjectWithPropIn(obj, prop, anArray)).toBe(false);
    });
});
