import Card from "./bodyComponents/Card";
import images from "../imagesSrcs";
import AssideNavBar from "./bodyComponents/AssideNavBar";

const Body = (props) => {
    return (
        <div className="Body">
            <AssideNavBar />
            <div className="Cards">
                {
                    images.map((card) => {
                        return <Card key={card.id} src={card.src} title={card.title} />
                    })
                }
            </div>

        </div>
    )
}

export default Body;