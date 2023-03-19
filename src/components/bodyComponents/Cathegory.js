import Card from "./Card";
import images from "../../imagesSrcs";
import { useParams } from "react-router-dom";

alert(images[0].number)
const Cathegory = (props) => {
    const { cathegory } = useParams();
    let imagesToUse = images.filter((img) => {
        return img.type === cathegory;
    })


    return (
        <div className="Body">
            <div className="Cards">
                {
                    imagesToUse.map((card) => {
                        return <Card
                            key={card.id}
                            src={card.src}
                            title={card.title}
                            handleAddToCart={props.handleAddToCart}
                            item={card} />
                    })
                }
            </div>

        </div>
    )
}

export default Cathegory;