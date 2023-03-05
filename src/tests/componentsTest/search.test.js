import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import Search from "../../components/headerComponents/Search"

describe("search", () => {
    test("contains an input of type search ", () => {
        render(<Search />);
        const typeSearchInput = screen.getByRole('searchbox', { name: "Search:" });
        expect(typeSearchInput).toBeInTheDocument();
    })
    test("contains a button of type submit", () => {
        render(<Search />);
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
    })
    test("calls handleChange function when input change", () => {
        const handleChange = jest.fn();
        render(<Search handleChange={handleChange} />);
        const typeSearchInput = screen.getByRole('searchbox', { name: 'Search:' });
        userEvent.type(typeSearchInput, "hello");
        expect(handleChange).toBeCalled();
    })
    test("calls handleSubmit function when submit button is clicked or enter button is clicked", () => {
        const handleSubmit = jest.fn();
        render(<Search handleSubmit={handleSubmit} />);
        const button = screen.getByRole('button');
        const input = screen.getByRole('searchbox', { name: 'Search:' });
        userEvent.click(button);
        expect(handleSubmit).toBeCalled();
        userEvent.type(input, "hello", { press: "Enter" });
        expect(handleSubmit).toBeCalled();
    })

})