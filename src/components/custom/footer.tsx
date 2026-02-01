import { Cat } from "lucide-react";
import { NavLink } from "react-router";

export const Footer = () => {
    return (
        <footer className="flex flex-row gap-1.5 sm:gap-3 md:gap-5 lg:gap-10 grow w-full justify-center-safe pt-20 pb-5">
            <NavLink
                className=""
                to="/">
            <Cat className="text-white bg-black md:h-10 md:w-10 hover:cursor-pointer"/>
            </NavLink>
            <div>
                <h1 className="pb-1 text-base sm:text-lg md:text-xl text-teal-500 hover:cursor-pointer">Contact</h1>
                <ul className="flex flex-col gap-1 text-xs/4 sm:text-sm/4 md:text-base/5 **:hover:underline">
                    <li><NavLink
                        className=""
                        to="/">+9 999-999-9999
                    </NavLink></li>
                    <li><NavLink
                        className=""
                        to="/">
                            emailourshop@shopmail.com
                    </NavLink></li>
                </ul>
            </div>
            <div>
                <h1 className="pb-1 text-base sm:text-lg md:text-xl text-red-800 hover:cursor-pointer">Additional Information</h1>
                <ul className="grid grid-cols-2 gap-1 text-xs/4 sm:text-sm/4 md:text-base/5 **:hover:underline">
                    <li><NavLink
                        className=""
                        to="/store">Shipping
                    </NavLink></li>
                    <li><NavLink
                        className=""
                        to="/">Return Policy
                    </NavLink></li>
                    <li><NavLink
                        className=""
                        to="/login">Payment Methods
                    </NavLink></li>
                    <li><NavLink
                        className=""
                        to="/">Terms & Conditions
                    </NavLink></li>
                    <li><NavLink
                        className=""
                        to="/">Security
                    </NavLink></li>
                    <li><NavLink
                        className=""
                        to="/">Cookies
                    </NavLink></li>
                    <li><NavLink
                        className=""
                        to="/">Privacy Policy
                    </NavLink></li>
                </ul>
            </div>
        </footer>    
    );
};
