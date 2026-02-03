import { Cat } from "lucide-react";
import { NavLink } from "react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
          className="grow w-xs md:w-xl lg:w-2xl border-neutral-200 flex flex-col m-auto border rounded-sm shadow-sm focus:border-teal-500 focus:shadow-teal-300 bg-white"
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
      <footer className="flex flex-row gap-1.5 sm:gap-3 md:gap-5 lg:gap-10 grow w-full justify-center-safe py-10 pb-8 md:pb-16 lg:pb-24 bg-neutral-200">
        <NavLink className="" to="/">
          <Cat className="md:h-10 md:w-10 hover:cursor-pointer text-white bg-black" />
        </NavLink>
        <div>
          <h1 className="sm:text-lg md:text-xl pb-1 text-base text-neutral-950 font-semibold">
            Contact
          </h1>
          <ul className="text-xs/4 sm:text-sm/4 md:text-base/5 lg:text-base/6 flex flex-col gap-1">
            <li>+9 999-999-9999</li>
            <li>emailourshop@shopmail.com</li>
          </ul>
        </div>
        <div>
          <h1
            onClick={handleAdditionalInfoClick}
            className="sm:text-lg md:text-xl hover:cursor-pointer pb-1 text-base text-neutral-950 font-semibold"
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
      </footer>
    </>
  );
};
