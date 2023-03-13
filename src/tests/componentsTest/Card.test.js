import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import Card from "../../components/bodyComponents/Card";

describe("Card", () => {
    test("it renders an  image in the card ", () => {
        render(<Card />);
        const image = screen.getByRole("img", { alt: "Aominé" });
        expect(image).toBeInTheDocument();

    })

    test("it calls handleItemClick when the image is clicked ", () => {
        const handleItemClick = jest.fn();
        render(<Card handleItemClick={handleItemClick} />);
        const image = screen.getByRole("img", { alt: "Aominé" });
        userEvent.click(image);
        expect(handleItemClick).toBeCalled();

    })
})