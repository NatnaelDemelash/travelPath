import Logo from "./Logo";
import AppNav from "./AppNav";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const SideBar = () => {
  return (
    <section className="flex flex-col items-center gap-2 bg-[#2d3439] h-[94vh] my-3 ml-3 mb-3 py-4 w-[40%] text-center relative">
      <Logo />
      <AppNav />

      <Outlet />

      <footer>
        <Footer />
      </footer>
    </section>
  );
};

export default SideBar;
