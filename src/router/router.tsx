import { BrowserRouter, Route, Routes } from "react-router";
import Landing from "../components/Landing/Landing";
import { Store } from "../components/Store/Store";
import { CartPage } from "@/components/Cart/Cart";
import { Login } from "../components/Login/Login";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="shop" element={<Store />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
