import { useEffect } from "react";
import { useState } from "react";

const Categories = () => {
  const [countByCategory, setCountByCategory] = useState({});
  useEffect(() => {
    fetch("http://localhost:3000/api/products?limit=1")
      .then((res) => res.json())
      .then((data) => {
        if (data.count === 1) {
          setCountByCategory(data.countByCategory);
        } else {
          fetch(`http://localhost:3000/api/products?limit=${data.count}`)
            .then((res) => res.json())
            .then((newData) => {
              setCountByCategory(newData.countByCategory);
            });
        }
      });
  }, []);

  return (
    <>
      <h1>Productos por categoría: </h1>
      {Object.entries(countByCategory).map(([key, value]) => (
        <h3>
          {key}: {value}
        </h3>
      ))}
    </>
  );
};

export default Categories;
