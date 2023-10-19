import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const PageNav = () => {
  return (
    <nav className="flex justify-between items-center">
      <div className="logo flex gap-2 items-center">
        <img src={logo} alt="logo" width={50} />
        <span className="font-medium text-[#FF914D]">TravelPath.pro</span>
      </div>
      <ul className="list-none flex justify-end items-center text-white gap-8 my-4 mx-8 px-12 text-sm">
        <li className="mx-2">
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default PageNav;
