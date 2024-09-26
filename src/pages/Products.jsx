import React, { useEffect, useState } from "react";
import axios from "axios";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <div class="loader-wrapper">
        <div class="loader"></div>
      </div>
    );
  }
  return (
    <>
      {products.map((p) => (
        <div key={p.id} className="product-card">
          <div className="image">
            <img src={p.image} alt={p.title} />
          </div>
          <h2>{p.title}</h2>
          <p>${p.price}</p>
        </div>
      ))}
    </>
  );
}

export default Products;
