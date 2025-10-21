import { BrowserRouter, Route, Routes } from "react-router";
import Landing from "../components/Landing";
import { Store } from "../components/Store";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="shop" element={<Store />} />
      </Routes>
    </BrowserRouter>
  );
};
