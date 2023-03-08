import { render, screen } from "@testing-library/react"
import Card from "../../components/bodyComponents/Card";

describe("Card", () => {
    test("it renders an  image in the card ", () => {
        render(<Card />);
        const image = screen.getByRole("img", { alt: "Aominé" });
        expect(image).toBeInTheDocument();

    })
})