import Card from "./bodyComponents/Card";
import images from "../imagesSrcs";

const Body = () => {
    return (
        <div className="Body">
            Hello World!
            <Card src={images[0].src} title='hello' />
        </div>
    )
}

export default Body;