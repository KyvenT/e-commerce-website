import { 
  Cat,
  HeartPlus,
 } from "lucide-react";
import { NavLink } from "react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "../ui/button";
import { useRef } from "react";

const accordionItems = [
  {
    value: "item-1",
    trigger: "What are your shipping options?",
    content: "Santa's sled",
  },
  {
    value: "item-2",
    trigger: "What is your return policy?",
    content:
      "Leave items on front porch with cookies and milk within 14 days of delivery for a free refund.",
  },
  {
    value: "item-3",
    trigger: "How do I cancel an order?",
    content: "You can cancel an order through our customer support.",
  },
];

export const Footer = () => {
  const accordionHeaderRef = useRef<HTMLDivElement>(null);

  const handleAdditionalInfoClick = () => {
    const accordionHeader = accordionHeaderRef.current;
    accordionHeader?.setAttribute("tabIndex", "-1");
    accordionHeader?.focus();
  };

  return (
    <>
      <div className="py-5 md:py-10 bg-neutral-100">
        <div
          ref={accordionHeaderRef}
          className="flex flex-col m-auto bg-white border rounded-sm shadow-sm grow w-xs md:w-xl lg:w-2xl border-neutral-200 focus:border-teal-500 focus:shadow-teal-300"
        >
          <Accordion type="multiple" defaultValue={["item-1"]} className="px-5">
            {accordionItems.map((accordionItems) => (
              <AccordionItem
                key={accordionItems.value}
                value={accordionItems.value}
              >
                <AccordionTrigger>{accordionItems.trigger}</AccordionTrigger>
                <AccordionContent>{accordionItems.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      <footer>
      <section className="flex flex-row w-full gap-5 py-10 pb-8 sm:gap-7 md:gap-9 lg:gap-12 grow justify-center-safe md:pb-10 bg-neutral-200">
        <NavLink className="" to="/">
          <Cat className="text-white bg-black md:h-10 md:w-10 lg:h-12 lg:w-12 hover:cursor-pointer" />
        </NavLink>
        <div>
          <h1 className="pb-1 text-base font-semibold sm:text-lg md:text-xl text-neutral-950">
            Contact
          </h1>
          <ul className="flex flex-col gap-1 text-xs/4 sm:text-sm/4 md:text-base/5 lg:text-base/6">
            <li>+9 999-999-9999</li>
            <li>emailourshop@shopmail.com</li>
          </ul>
        </div>
        <div>
          <h1
            onClick={handleAdditionalInfoClick}
            className="pb-1 text-base font-semibold sm:text-lg md:text-xl hover:cursor-pointer text-neutral-950"
          >
            Additional Information
          </h1>
          <ul className="grid grid-cols-2 gap-1 text-xs/4 sm:text-sm/4 md:text-base/5 lg:text-base/6 **:hover:underline">
            <li>
              <NavLink className="" to="/store">
                Shipping
              </NavLink>
            </li>
            <li>
              <NavLink className="" to="/">
                Return Policy
              </NavLink>
            </li>
            <li>
              <NavLink className="" to="/login">
                Payment Methods
              </NavLink>
            </li>
            <li>
              <NavLink className="" to="/">
                Terms & Conditions
              </NavLink>
            </li>
            <li>
              <NavLink className="" to="/">
                Security
              </NavLink>
            </li>
            <li>
              <NavLink className="" to="/">
                Cookies
              </NavLink>
            </li>
            <li>
              <NavLink className="" to="/">
                Privacy Policy
              </NavLink>
            </li>
          </ul>
        </div> 
      </section>
      <hr className="flex m-auto border-l border-neutral-300"/>
      <section className="flex flex-row items-center gap-2 px-5 py-2 m-auto bg-neutral-200 grow justify-center-safe">
        <p className="text-xs sm:text-sm md:text-base">To stay connected, follow our social media:</p>
        <Button variant="default" className="transition-transform bg-teal-500 w-7 h-7 md:w-10 md:h-8 hover:bg-teal-700 hover:cursor-pointer active:scale-105">
          <NavLink
            to="/">
            <HeartPlus />
          </NavLink>
        </Button>
      </section>
      </footer>
    </>
  );
};
