import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import AddToCart from "../../components/bodyComponents/AddToCart"

describe("AddToCart", () => {
    test("it renders button with textContent Add To Cart", () => {
        render(<AddToCart />);
        const button = screen.getByRole("button", { name: "Add To Cart" });
        expect(button).toBeInTheDocument();
    })
    test("it calls handleAddToCartClick when the button is clecked", () => {
        const handleAddToCartClick = jest.fn();
        render(<AddToCart handleAddToCartClick={handleAddToCartClick} />);
        const button = screen.getByRole("button", { name: "Add To Cart" });
        userEvent.click(button);
        expect(handleAddToCartClick).toBeCalled();
    })

})