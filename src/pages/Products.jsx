import React, { useEffect, useState } from "react";
import axios from "axios";

function Products() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProduct(response.data);
      console.log(response.data);
    }
    fetchData();
  }, []);
  return (
    <>
      {product.map((p) => {
        return (
          <>
            <div className="image">
              <img src={p.image} alt="" />
            </div>
            <h2>{p.title}</h2>
            <p>{p.price}</p>
          </>
        );
      })}
    </>
  );
}

export default Products;
