import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom";
import AssideNavBar from "../../components/bodyComponents/AssideNavBar"

describe("AssideNavBar", () => {
    test("it displays 3  links", () => {
        render(<BrowserRouter> <AssideNavBar /></BrowserRouter>);
        const links = screen.getAllByRole("link");
        expect(links.length).toBe(4);
    }
    )
})