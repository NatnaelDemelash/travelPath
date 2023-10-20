import { NavLink } from "react-router-dom";

const AppNav = () => {
  return (
    <div>
      <ul className="cta gap-1 my-6">
        <li>
          <NavLink to="cities">Cities </NavLink>
        </li>
        <li>
          <NavLink to="countries">Countries </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AppNav;
