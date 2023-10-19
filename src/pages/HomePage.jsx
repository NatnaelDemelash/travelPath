import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";

const HomePage = () => {
  return (
    <div className="homepage">
      <PageNav />
      <section className="max-w-[600px] mx-auto my-6 text-center text-white flex flex-col justify-center items-center gap">
        <h1 className="text-[3rem] leading-[1.25] mt-10 mb-5">
          You Travel the World. <span className="brand">TravelPath.pro</span>{" "}
          keep track of your adventures
        </h1>
        <p className="mb-8 ">
          A world map that tracks your footstep into every city you can think
          of. Never forget your wonderful experiances and show you friends how
          you have wandered the world
        </p>
        <Link
          to="/app"
          className="btn btn-ui text-white text-sm uppercase shadow-sm rounded-md transform hover:-translate-y-2 hover:ease-in duration-500"
        >
          Start Tracking Now
        </Link>
      </section>
    </div>
  );
};

export default HomePage;
