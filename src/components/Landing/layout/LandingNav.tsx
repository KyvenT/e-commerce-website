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
    <nav className="h-fit text-nowrap sticky top-0 z-10 flex items-center justify-between w-full p-4 bg-white border border-black">
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
          <ul className="md:flex-row md:gap-24 wrap-normal flex flex-col items-center justify-center flex-1 w-full gap-4">
            {linkURLs.map((link) => (
              <li key={link.url}>
                <h2 className="hover:underline decoration-1 text-lg">
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
