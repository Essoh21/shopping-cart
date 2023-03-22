import Card from "./bodyComponents/Card";

const HomePage = (props) => {
    const imagesToUseHere = props.images.filter((img) => {
        return img.type === props.cathegory;
    })
    return (
        <div className="Body">
            <div className="Cards">
                {
                    imagesToUseHere.map((card) => {
                        return <Card
                            key={card.id}
                            src={card.src}
                            title={card.title}
                            handleAddToCart={props.handleAddToCart}
                            item={card}
                        />
                    })
                }
            </div>

        </div>
    )
}

export default HomePage;