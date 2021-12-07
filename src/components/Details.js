/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const [products, setProducts] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fakeStore = async () => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const jsondata = await response.json();
    setProducts(jsondata);
    setIsLoading(false);
  };
  useEffect(() => {
    fakeStore();
  }, []);

  return (
    <div className="container">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="details_style">
          <h1>Title: {products.title}</h1>
          <h1>Price: {products.price}</h1>
          <h1>Description: {products.description}</h1>
          <img src={products.image} alt="" className="image"></img>
        </div>
      )}
    </div>
  );
};
export default Details;
