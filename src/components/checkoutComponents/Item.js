import Button from "../bodyComponents/Button";

const Item = ({ src, title, number, handleInputChange }) => {
    return (
        <div className="selected-item">
            <img src={src} alt={title} />
            <div className="Details">
                <h5>{title}</h5>
                <div className="item-inputs">
                    <label >
                        Qty:  <input
                            type='number'
                            min="1"
                            max="5"
                            value={number}
                            onChange={handleInputChange}
                        />
                    </label>
                    <Button buttonName="remove" />
                </div>
            </div>
        </div>
    )
}

export default Item;