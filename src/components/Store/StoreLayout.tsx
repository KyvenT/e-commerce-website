import { Outlet } from "react-router";
import { StoreNav } from "./StoreNav";

export const StoreLayout = () => {
  return (
    <div className="h-full">
      <StoreNav />
      <div className="h-[90%]">
        <Outlet />
      </div>
    </div>
  );
};
