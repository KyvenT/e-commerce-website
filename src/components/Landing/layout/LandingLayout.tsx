import { Outlet } from "react-router";
import { LandingNav } from "./LandingNav";

export const LandingLayout = () => {
  return (
    <div className="h-full">
      <LandingNav />
      <div className="h-[90%]">
        <Outlet />
      </div>
    </div>
  );
};
