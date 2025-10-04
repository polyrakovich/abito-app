import React from 'react';
import './Card.css'
import {Link} from "react-router-dom";

const Card = ({id, title, price, address, date, img}) => {
    return (
        <Link to={`/product/${id}`} className="card">
            <div className="card--img">
                <img src={img} alt="card-img"/>
            </div>

            <h5 className="card--title">
                {title}
            </h5>

            <strong className="card--price">{price}</strong>

            <div className="card--desc-box">
                <span className="card--desc">{address}</span>
                <span className="card--desc">{date}</span>
            </div>
        </Link>
    );
};

export default Card;