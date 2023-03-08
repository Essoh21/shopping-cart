import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom";
import NavBar from "../../components/NavBar"

describe("NavBar", () => {

    test("it renders two links element", () => {
        render(<BrowserRouter><NavBar /></BrowserRouter>);
        const links = screen.getAllByRole("link")
        expect(links.length).toBe(2);

    })


})