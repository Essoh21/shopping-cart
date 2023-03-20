import Button from "../bodyComponents/Button";

const Item = ({ src, title, number, handleQtyChange, price, handleButtonClick }) => {

    return (
        <div className="selected-item">
            <img src={src} alt={title} />
            <div className="Details">
                <h5> <span>{title} </span>   <span className="price">{price}$ </span></h5>
                <div className="item-inputs">
                    <label >
                        Qty:  <input
                            type='number'
                            min="1"
                            max="5"
                            value={number}
                            onChange={handleQtyChange}
                        />
                    </label>
                    <Button buttonName="remove" handleButtonClick={handleButtonClick} />
                </div>
            </div>
        </div>
    )
}

export default Item;