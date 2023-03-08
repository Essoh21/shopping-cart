import { render } from "@testing-library/react"
import Body from "../../components/Body"

describe("Body", () => {
    test("it displays Cards", () => {
        const { getByText } = render(<Body />);
        const helloWorld = getByText(/Hello world!/i);
        expect(helloWorld).toBeInTheDocument();
    }
    )
})