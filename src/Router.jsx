import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Categories from "./pages/Categories";
import Home from "./pages/Home";
import LastUser from "./pages/LastUser";
import Products from "./pages/Products";
import Totals from "./pages/Totals";

const Router = () => {
  return (
    <BrowserRouter>
    <NavBar/>
    <div
      style={{
        padding: "10% 20%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="totals" element={<Totals />} />
        <Route path="products" element={<Products />} />
        <Route path="categories" element={<Categories />} />
        <Route path="last-user" element={<LastUser />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
};

export default Router;
