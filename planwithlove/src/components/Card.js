import { useState } from "react";
import './card.css';

function Card({ id, image, info, price, name, removeTour }) {
    const [readmore, setReadmore] = useState(false);
    const description = `${info ? info.substring(0, 200) : ''}...`;

    function readMoreHandler() {
        setReadmore(!readmore);
    }

    return (
        <div className="card-container">
        <div className="card">
            <img src={image} alt={name} className="image" />
            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price">{price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>

                <div className="description">
                    {readmore ? info : description} {/* Toggle full description */}
                    <span onClick={readMoreHandler}>
                        {readmore ? 'show less' : 'read more'}
                    </span>
                </div>
            </div>

            <button onClick={() => removeTour(id)} className="btn-red">Not Interested</button>
        </div>
        </div>
    );
}

export default Card;
