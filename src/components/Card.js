import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({id, title, description, image}) => {
    return(
        <>
        <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
              <img src={image} alt=""/>
              <div className="border">
              <Link to ={{pathname:`/products/${id}`}}><button>More Details...</button></Link>
          </div>
          </>
        )
}
export default Card
