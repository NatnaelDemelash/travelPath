import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const PageNav = () => {
  return (
    <nav className="flex justify-between items-center">
      <Logo />
      <ul className="list-none flex justify-end items-center text-white gap-8 my-4 mx-8 px-12 text-sm">
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/app">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default PageNav;
