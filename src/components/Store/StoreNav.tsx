import {
  Cat,
  CircleChevronDown,
  CircleChevronUp,
  LogIn,
  LogOut,
  Menu,
  ShoppingCart,
} from "lucide-react";
import { Button } from "../ui/button";
import { NavLink } from "react-router";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";
import { useAuthContext } from "@/hooks/useAuthContext";

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
      { display: "Mens", url: "/store/category/men's%20clothing" },
      { display: "Womens", url: "/store/category/women's%20clothing" },
      { display: "Shop All", url: "/store/category/clothing" },
    ],
  },
  {
    display: "Jewelery",
    options: [{ display: "Shop All", url: "/store/category/jewelery" }],
  },
  {
    display: "Electronics",
    options: [{ display: "Shop All", url: "/store/category/electronics" }],
  },
];

export const StoreNav = () => {
  const isMobile = useIsMobile();
  const [displayMobileNav, setDisplayMobileNav] = useState<boolean>(false);
  const [categoriesHovered, setCategoriesHovered] = useState<boolean>(false);
  const { isLoggedIn } = useAuthContext();

  const handleMobileNavBtnClick = () => {
    setDisplayMobileNav((prev) => !prev);
  };

  return (
    <div onMouseLeave={() => setCategoriesHovered(false)}>
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
          <div className="bg-white border-1 py-4 md:py-0 md:border-0 gap-4 w-[100%] md:w-[100%] absolute md:[static] top-0 left-0 md:static flex flex-col md:flex-row items-center">
            <ul className="w-full flex-1 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-24 wrap-normal">
              <li>
                <NavLink to="/" className="text-lg hover:underline">
                  About
                </NavLink>
              </li>
              <li
                onMouseOver={() => setCategoriesHovered(true)}
                onClick={() => {
                  setCategoriesHovered((prev) => !prev);
                }}
                className="text-lg flex items-center gap-1 hover:underline"
              >
                Categories{" "}
                {categoriesHovered ? (
                  <CircleChevronUp size="1rem" />
                ) : (
                  <CircleChevronDown size="1rem" />
                )}
              </li>
              {isMobile && categoriesHovered && (
                <div className={`w-full flex flex-col items-center gap-6`}>
                  {categories.map((category, i) => (
                    <>
                      <div className="flex-1 flex justify-center">
                        <div>
                          <h2 className="font-semibold text-lg pb-2 cursor-default">
                            {category.display}
                          </h2>
                          <ul className="flex flex-col gap-1">
                            {category.options.map((option) => (
                              <NavLink
                                to={option.url}
                                className="hover:underline"
                              >
                                {option.display}
                              </NavLink>
                            ))}
                          </ul>
                        </div>
                      </div>
                      {i !== categories.length - 1 && (
                        <div className="border-b w-[80%] h-0"></div>
                      )}
                    </>
                  ))}
                </div>
              )}
            </ul>
            <div className="flex items-center gap-4">
              {isLoggedIn ? (
                <>
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
                </>
              ) : (
                <>
                  <Button>
                    <NavLink
                      className="flex items-center gap-1 text-base font-normal"
                      to="/login"
                    >
                      Log In
                      <LogIn />
                    </NavLink>
                  </Button>
                  <Button>
                    <NavLink
                      className="flex items-center gap-1 text-base font-normal"
                      to="/register"
                    >
                      Sign Up
                    </NavLink>
                  </Button>
                </>
              )}
            </div>
            {displayMobileNav && (
              <Button onClick={handleMobileNavBtnClick}>
                <Menu />
              </Button>
            )}
          </div>
        )}
      </nav>
      {!isMobile && categoriesHovered && (
        <div
          className={`bg-white w-full border border-black p-4 flex flex-row justify-between`}
        >
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
