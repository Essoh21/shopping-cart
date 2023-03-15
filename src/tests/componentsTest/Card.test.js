import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { act } from "react-dom/test-utils"
import { BrowserRouter } from "react-router-dom"

import Card from "../../components/bodyComponents/Card"

describe("Card", () => {
    test(" renders a button with name Add To Cart", () => {
        render(
            <BrowserRouter><Card /></BrowserRouter>
        )
        const button = screen.getByRole("button", { name: "Add To Cart" });
        expect(button).toBeInTheDocument();
    })
    test(" calls handleItemClick when an image is clicked ", () => {
        const handleItemClick = jest.fn();
        const item = { "src": "someSrc", "id": 1, "title": "something" };
        const cart = [item];
        render(
            <BrowserRouter>
                <Card
                    handleItemClick={handleItemClick}
                    currentItem={item}
                    title={item.title}
                    src={item.src}
                />
            </BrowserRouter>
        )
        const image = screen.getByAltText(item.title);
        expect(image).toBeInTheDocument();

        act(() => {
            userEvent.click(image);
        })
        expect(handleItemClick).toBeCalled();
    })


})