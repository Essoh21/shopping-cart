import { useParams } from "react-router-dom"
import images from "../../imagesSrcs";
import { loremIpsum, LoremIpsum } from "react-lorem-ipsum";
import BuyCard from "./BuyCard";

const ItemDetails = (props) => {
    const { parameter } = useParams();
    const itemDescription = loremIpsum();
    const items = JSON.parse(JSON.stringify(images))
        .map((item) => {
            return ({ ...item, itemDescription })
        })
    const currentArray = items.filter((el) => {
        return (el.title === parameter);
    })

    const currentItem = currentArray[0];
    return (
        <div className="ItemDetails">
            <img src={currentItem.src} alt={currentItem.title} />
            <div className="Details">
                <h3>{currentItem.title}</h3>
                <LoremIpsum p={3} />
            </div>
            <BuyCard
                Price={currentItem.price}
                currentItem={currentItem}
                handleAddToCart={props.handleAddToCart}
            />
        </div>
    )
}

export default ItemDetails;