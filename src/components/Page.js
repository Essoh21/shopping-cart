import Card from "./bodyComponents/Card";
import images from "../imagesSrcs";

const HomePage = (props) => {
    const imagesToUseHere = images.filter((img) => {
        return img.type === props.cathegory;
    })
    return (
        <div className="Body">
            <div className="Cards">
                {
                    imagesToUseHere.map((card) => {
                        return <Card key={card.id} src={card.src} title={card.title} currentItem={card} />
                    })
                }
            </div>

        </div>
    )
}

export default HomePage;