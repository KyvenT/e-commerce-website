import { NavLink } from "react-router";

type NavLinkProps = {
  to: string;
  children: React.ReactNode;
};

export const LandingNavLink = ({ to, children }: NavLinkProps) => {
  return <NavLink to={to}>{children}</NavLink>;
};
