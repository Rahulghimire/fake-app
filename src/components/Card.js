import React from 'react';

const Card = ({title, description, image}) => {
    return(
        <>
        <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
              <img src={image} alt=""/>
              <div className="border">
              <h5>More Details...</h5>
          </div>
          </>
        )
}
export default Card
