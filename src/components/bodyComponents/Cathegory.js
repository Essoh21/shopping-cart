import Card from "./Card";
import { useParams } from "react-router-dom";

const Cathegory = (props) => {
    const { cathegory } = useParams();
    let imagesToUse = props.images.filter((img) => {
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