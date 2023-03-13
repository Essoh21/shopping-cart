import addToCart from "../../functions/addToCart";
import isObjectWithPropIn from "../../functions/isObjectWithPropIn";

jest.mock("../../functions/isObjectWithPropIn", () => ({
    __esModule: true,
    default: jest.fn(),
}));

describe("addToCart", () => {
    let item;
    let cart;

    beforeEach(() => {
        item = { id: 1, title: "Product A", price: 9.99 };
        cart = [{ id: 2, title: "Product B", price: 19.99 }];
        isObjectWithPropIn.mockClear();
    });

    test("adds item to cart if it doesn't exist", () => {
        isObjectWithPropIn.mockReturnValue(false);

        addToCart(item, cart);

        expect(cart).toContainEqual(item);
        expect(cart).toHaveLength(2);
        expect(isObjectWithPropIn).toHaveBeenCalledWith(item, item.id, cart);
    });

    test("doesn't add item to cart if it already exists", () => {
        isObjectWithPropIn.mockReturnValue(true);

        addToCart(cart[0], cart);

        expect(cart).toContainEqual(cart[0]);
        expect(cart).toHaveLength(1);
        expect(isObjectWithPropIn).toHaveBeenCalledWith(cart[0], cart[0].id, cart);
    });
});
