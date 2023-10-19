import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Logo = () => {
  return (
    <Link to="/" className="logo flex gap-1 items-center">
      <img src={logo} alt="logo" width={36} />
      <span className="font-medium text-[#FF914D] text-2xl font-dancing">
        TravelPath.pro
      </span>
    </Link>
  );
};

export default Logo;
