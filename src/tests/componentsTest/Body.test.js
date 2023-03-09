import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom";
import Body from "../../components/Body"

describe("Body", () => {
    test("it displays Cards", () => {
        render(<BrowserRouter> <Body /> </BrowserRouter>);
        const imgs = screen.getAllByRole('img')
        expect(imgs.length).toBeGreaterThan(0);
    }
    )
})