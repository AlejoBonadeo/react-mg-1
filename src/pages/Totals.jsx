import { useEffect } from "react";
import { useState } from "react";

const Totals = () => {
  const [users, setUsers] = useState();
  const [products, setProducts] = useState();
  const [categories, setCategories] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/api/users?limit=1")
      .then((res) => res.json())
      .then((data) => setUsers(data.count))
      .catch((error) => alert(error.msg));

    fetch("http://localhost:3000/api/products?limit=1")
      .then((res) => res.json())
      .then((data) => {
        if (data.count === 1) {
          setProducts(1);
          setCategories(1);
        } else {
          fetch(`http://localhost:3000/api/products?limit=${data.count}`)
            .then((res) => res.json())
            .then((newData) => {
              setProducts(newData.count);
              setCategories(
                [
                  ...new Set(
                    newData.products.map(({ category_id }) => category_id)
                  ),
                ].length
              );
            });
        }
      });
  }, []);

  return (
    <>
        <h1>Totales: </h1>
        <h3>Usuarios: {users}</h3>
        <h3>Productos: {products}</h3>
        <h3>Categorías activas: {categories}</h3>
    </>
  );
};

export default Totals;
