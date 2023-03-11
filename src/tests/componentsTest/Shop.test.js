import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom";
import Shop from "../../components/Shop"

describe("Shop", () => {
    test("it displays Cards", () => {
        render(<BrowserRouter> <Shop /> </BrowserRouter>);
        const imgs = screen.getAllByRole('img')
        expect(imgs.length).toBeGreaterThan(0);
    }
    )
})