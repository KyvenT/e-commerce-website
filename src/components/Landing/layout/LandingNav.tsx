import { Cat, LogIn } from "lucide-react";
import { Button } from "../../ui/button";
import { LandingNavLink } from "./LandingNavLink";
import { NavLink } from "react-router";

export const LandingNav = () => {
  return (
    <nav className="h-[10%] flex justify-between items-center px-4 border border-black">
      <div className="flex items-center">
        <Cat className="text-white bg-black" />
        <h1>Brand</h1>
      </div>
      <ul className="flex items-center gap-8">
        <li>
          <h2>
            <LandingNavLink to="">Brand Details</LandingNavLink>
          </h2>
        </li>
        <li>
          <h2>
            <LandingNavLink to="/shop">Store</LandingNavLink>
          </h2>
        </li>
        <li>
          <h2>
            <LandingNavLink to="/about-us">About Us</LandingNavLink>
          </h2>
        </li>
      </ul>
      <Button>
        <NavLink className="flex items-center gap-1" to="/login">
          Log In <LogIn />
        </NavLink>
      </Button>
    </nav>
  );
};
