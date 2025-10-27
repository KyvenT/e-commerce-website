import { NavLink } from "react-router";
import { Button } from "../ui/button";

function Landing() {
  return (
    <div className="">
      <h2>Landing Page</h2>
      <Button>
        <NavLink to="/shop">View Store</NavLink>
      </Button>
    </div>
  );
}

export default Landing;
