import { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [next, setNext] = useState();
  useEffect(() => {
    fetchProducts("http://localhost:3000/api/products?limit=1");
  }, []);

  const fetchProducts = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setProducts([...products, ...data.products]);
    setNext(data.next);
  };

  return (
    <>
      <h1>Productos: </h1>
      {products.map((product) => (
        <div key={product.id}>
          <img
            src={`http://localhost:3000/images/productImg/${product.image}`}
            alt={product.name}
            style={{maxWidth: "100%"}}
          />
          <h3>{product.name}</h3>
          <h3>autor: {product.autor}</h3>
          <h3>precio: {product.price} ETH</h3>
        </div>
      ))}
      {next && 
        <button onClick={() => fetchProducts(next)}>Mostrar mas...</button>
      }
    </>
  );
};

export default Products;
