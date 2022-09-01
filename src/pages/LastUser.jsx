import { useState } from "react";
import { useEffect } from "react";

const LastUser = () => {
  const [lastUser, setLastUser] = useState();

  useEffect(() => {
    /* Como no creamos la propiedad "createdAt" en la db, asumimos que nuestro
     * eCommerce no va a tener mas usuarios que MercadoLibre (aprox 140.000.000)
     * véase https://www.statista.com/topics/6357/mercado-libre/#dossierKeyfigures
     */
    fetch("http://localhost:3000/api/users?limit=140000000")
      .then((res) => res.json())
      .then((data) => setLastUser(data.users[data.count - 1]));
  }, []);

  return (
    <>
      <h1>Ultimo Usuario: </h1>
      <h3>Id: {lastUser?.id}</h3>
      <h3>Email: {lastUser?.email}</h3>
      <h3>Imagen: {lastUser?.image}</h3>
      <h3>Cumpleaños: {new Date(lastUser?.birthday).toLocaleDateString()}</h3>
      <h3>Rol: {lastUser?.roles_id === 1 ? "Admin" : "Usuario"}</h3>
    </>
  );
};

export default LastUser;
