import { Cat, LogIn, Menu } from "lucide-react";
import { Button } from "../../ui/button";
import { LandingNavLink } from "./LandingNavLink";
import { NavLink } from "react-router";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";

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
  const isMobile = useIsMobile();
  const [displayMobileNav, setDisplayMobileNav] = useState<boolean>(false);

  const handleMobileNavBtnClick = () => {
    setDisplayMobileNav((prev) => !prev);
  };

  return (
    <nav className="z-10 sticky top-0 h-fit w-full flex justify-between items-center p-4 bg-white border border-black text-nowrap">
      <div className="flex items-center gap-1 select-none">
        <Cat className="text-white bg-black" />
        <h1 className="text-lg">Cat Brand</h1>
      </div>
      {isMobile && (
        <Button onClick={handleMobileNavBtnClick}>
          <Menu />
        </Button>
      )}
      {(!isMobile || displayMobileNav) && (
        <div className="bg-white md:bg-transparent py-4 md:py-0 border-2 md:border-0 gap-4 w-[100%] md:w-[100%] absolute md:[static] top-0 left-0 md:static flex flex-col md:flex-row items-center">
          <ul className="w-full flex-1 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-24 wrap-normal">
            {linkURLs.map((link) => (
              <li key={link.url}>
                <h2 className="text-lg hover:underline decoration-1">
                  <LandingNavLink to={link.url}>{link.display}</LandingNavLink>
                </h2>
              </li>
            ))}
          </ul>
          <div>
            <Button>
              <NavLink
                className="flex items-center gap-1 text-base font-normal"
                to="/login"
              >
                Log In <LogIn />
              </NavLink>
            </Button>
          </div>
          {displayMobileNav && (
            <Button onClick={handleMobileNavBtnClick}>
              <Menu />
            </Button>
          )}
        </div>
      )}
    </nav>
  );
};
