import Card from "./bodyComponents/Card";
import AssideNavBar from "./bodyComponents/AssideNavBar";

const Shop = (props) => {
    const cathegory = "all"
    let imagesToUse = props.images;
    if (cathegory !== "all") {
        imagesToUse = props.images.filter((img) => {
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