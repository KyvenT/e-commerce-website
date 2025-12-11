import { BrowserRouter, Route, Routes } from "react-router";
import Landing from "../components/Landing/Landing";
import { Store } from "../components/Store/Store";
import { CartPage } from "@/components/Cart/Cart";
import { Login } from "../components/Login/Login";
import { LandingLayout } from "@/components/Landing/layout/LandingLayout";
import { ContactUs } from "@/components/Landing/ContactUs";
import { ProductPage } from "@/components/Product/ProductPage";
import { StoreLayout } from "@/components/Store/StoreLayout";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LandingLayout />}>
          <Route index element={<Landing />} />
          <Route path="contact-us" element={<ContactUs />} />
        </Route>
        <Route path="store" element={<StoreLayout />}>
          <Route index element={<Store />}></Route>
          <Route path=":productId" element={<ProductPage />} />
        </Route>
        <Route path="cart" element={<CartPage />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
