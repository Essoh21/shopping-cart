import { useParams } from "react-router-dom"
import images from "../../imagesSrcs";

const ItemDetails = () => {
    const parameter = useParams();
    const items = JSON.parse(JSON.stringify(images))
        .map((item) => {
            return ({ ...item, itemDescription })
        })
    const currentArray = items.filter((el) => {
        return (el.name === parameter);
    })

    const currentItem = currentArray[0];
    return (
        <div>
            <img src=""></img>
        </div>
    )
}