import {
  Cat,
  CircleChevronDown,
  LogOut,
  Menu,
  ShoppingCart,
} from "lucide-react";
import { Button } from "../ui/button";
import { NavLink } from "react-router";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";

type DisplayURL = {
  display: React.ReactNode | string;
  url: string;
};

type Category = {
  display: React.ReactNode | string;
  options: DisplayURL[];
};

const categories: Category[] = [
  {
    display: "Clothing",
    options: [
      { display: "Mens", url: "/store/clothing/men" },
      { display: "Womens", url: "/store/clothing/women" },
      { display: "Shop All", url: "/store/clothing" },
    ],
  },
  {
    display: "Jewellery",
    options: [
      { display: "Mens", url: "/store/jewellery/men" },
      { display: "Womens", url: "/store/jewellery/women" },
      { display: "Shop All", url: "/store/jewellery" },
    ],
  },
  {
    display: "Electronics",
    options: [{ display: "Shop All", url: "/store/electronics" }],
  },
];

export const StoreNav = () => {
  const isMobile = useIsMobile();
  const [displayMobileNav, setDisplayMobileNav] = useState<boolean>(false);
  const [categoriesHovered, setCategoriesHovered] = useState<boolean>(false);

  const handleMobileNavBtnClick = () => {
    setDisplayMobileNav((prev) => !prev);
  };

  return (
    <div onMouseLeave={() => setCategoriesHovered(false)}>
      <nav className="z-10 sticky top-0 h-[15%] md:h-[10%] w-full flex justify-between items-center px-4 py-4 bg-white border border-black text-nowrap">
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
          <div className="bg-white gap-[8px] w-[80%] md:w-[100%] absolute md:[static] top-0 right-0 md:static flex flex-col md:flex-row items-center">
            <ul className="w-full flex-1 flex flex-col md:flex-row items-center justify-center gap-24 wrap-normal">
              <li>
                <NavLink to="/" className="text-lg hover:underline">
                  About
                </NavLink>
              </li>
              <li onMouseOver={() => setCategoriesHovered(true)}>
                <h2 className="text-lg flex items-center gap-1 p-4">
                  Categories <CircleChevronDown />
                </h2>
              </li>
            </ul>
            <div className="flex items-center gap-4">
              <Button>
                <NavLink
                  className="flex items-center gap-1 text-base font-normal"
                  to="/cart"
                >
                  Cart <ShoppingCart />
                </NavLink>
              </Button>
              <Button>
                <NavLink
                  className="flex items-center gap-1 text-base font-normal"
                  to="/logout"
                >
                  Log out
                  <LogOut />
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
      {categoriesHovered && (
        <div className="bg-white w-full border border-black border-t-0 p-4 flex flex-row justify-between">
          {categories.map((category, i) => (
            <>
              <div className="flex-1 flex justify-center">
                <div>
                  <h2 className="font-semibold text-lg pb-2 cursor-default">
                    {category.display}
                  </h2>
                  <ul className="flex flex-col gap-1">
                    {category.options.map((option) => (
                      <NavLink to={option.url} className="hover:underline">
                        {option.display}
                      </NavLink>
                    ))}
                  </ul>
                </div>
              </div>
              {i !== categories.length - 1 && (
                <div className="border-l w-0"></div>
              )}
            </>
          ))}
        </div>
      )}
    </div>
  );
};
