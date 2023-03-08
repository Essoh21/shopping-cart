import { render } from "@testing-library/react"
import Cart from "../../components/headerComponents/Cart"

describe("Cart", () => {
    test(
        "it renders an img", () => {
            const { getByRole } = render(<Cart />);
            const imgTag = getByRole('img', { name: "cart-icon" });
            expect(imgTag).toBeInTheDocument();

        }
    )
    test(
        "it render the Cart component with the correct number of articles ", () => {
            const numberOfArticles = 10;
            const { getByText } = render(<Cart numberOfArticles={numberOfArticles} />);
            const numberOfArticlesSpan = getByText(numberOfArticles.toString());
            expect(numberOfArticlesSpan).toBeInTheDocument();

        }
    )


})