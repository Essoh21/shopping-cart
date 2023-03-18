import Card from "./bodyComponents/Card";
import images from "../imagesSrcs";
import AssideNavBar from "./bodyComponents/AssideNavBar";

const Shop = (props) => {
    const cathegory = "all"
    let imagesToUse = images;
    if (cathegory !== "all") {
        imagesToUse = images.filter((img) => {
            return img.type === cathegory;
        })
    }

    return (
        <div className="Body">
            <AssideNavBar />
            <div className="Cards">
                {
                    imagesToUse.map((card) => {
                        return <Card
                            key={card.id}
                            src={card.src}
                            title={card.title}
                            item={card}
                            handleAddToCart={props.handleAddToCart}
                        />
                    })
                }
            </div>

        </div>
    )
}

export default Shop;