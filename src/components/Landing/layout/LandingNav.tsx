import { Cat, LogIn } from "lucide-react";
import { Button } from "../../ui/button";
import { LandingNavLink } from "./LandingNavLink";
import { NavLink } from "react-router";

type DisplayURL = {
  display: string;
  url: string;
};

const linkURLs: DisplayURL[] = [
  { display: "Our Brand", url: "" },
  { display: "Store", url: "/store" },
  { display: "Contact Us", url: "/contact-us" },
];

export const LandingNav = () => {
  return (
    <nav className="sticky top-0 h-[10%] flex justify-between items-center px-4 py-4 bg-white border border-black text-nowrap">
      <div className="flex items-center gap-1 select-none">
        <Cat className="text-white bg-black" />
        <h1 className="text-lg">Cat Brand</h1>
      </div>
      <ul className="w-[50%] flex items-center justify-evenly">
        {linkURLs.map((link) => (
          <li>
            <h2 className="hover:underline decoration-1">
              <LandingNavLink to={link.url}>{link.display}</LandingNavLink>
            </h2>
          </li>
        ))}
      </ul>
      <div>
        <Button>
          <NavLink className="flex items-center gap-1" to="/login">
            Log In <LogIn />
          </NavLink>
        </Button>
      </div>
    </nav>
  );
};
