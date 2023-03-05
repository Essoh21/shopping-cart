import { render, screen } from "@testing-library/react"
import App from "../../components/App"

test("it renders App component", () => {
    render(<App />)
    const greeting = screen.getByText(/hello world/i);
    expect(greeting).toBeInTheDocument();
})
