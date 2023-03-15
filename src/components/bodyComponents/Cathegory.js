import Card from "./Card";
import images from "../../imagesSrcs";
import { useParams } from "react-router-dom";

const Cathegory = () => {
    const { cathegory } = useParams();
    let imagesToUse = images.filter((img) => {
        return img.type === cathegory;
    })


    return (
        <div className="Body">
            <div className="Cards">
                {
                    imagesToUse.map((card) => {
                        return <Card key={card.id} src={card.src} title={card.title} currentItem={card} />
                    })
                }
            </div>

        </div>
    )
}

export default Cathegory;