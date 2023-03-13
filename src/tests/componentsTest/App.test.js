import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import App from "../../components/App";

describe("App", () => {
    test("it renders navBar with two links ", () => {
        render(<App />);
        const links = screen.getAllByRole("link");
        expect(links.length).toBe(11);

    })
    test("it add 4 cathegory links  when shop link is clicked", () => {
        const { getByRole, getAllByRole, getByAltText, rerender } = render(<App />);
        const shop = screen.getByRole("link", { name: "Shop" });
        expect(shop.textContent).toBe("Shop");
        act(() => {
            userEvent.click(shop);
        })
        const links = screen.getAllByRole("link");
        expect(links.length).toBe(27);
        const BasketCathegory = screen.getByRole("link", { name: "KuroKos Basket" });
        act(() => {
            userEvent.click(BasketCathegory);
        })
        const aomineDaiki = screen.getByAltText("Aomine Daiki");
        expect(aomineDaiki).toBeInTheDocument();

    })
})