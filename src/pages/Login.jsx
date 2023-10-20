import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";

const Login = () => {
  return (
    <div className="h-[94vh] bg-[#34495E] m-3 px-6 py-4">
      <PageNav />
      <section className="flex justify-center items-center gap-8 my-10">
        <div className="bg-[#1e3954d3] rounded-lg shadow-xl w-[480px] my-10 py-2 px-4">
          <form>
            <div>
              <label htmlFor="email" className="text-white">
                Email:
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full"
              />
            </div>
            <div>
              <label htmlFor="password" className="text-white">
                Password:
              </label>
              <input
                type="password"
                placeholder="Enter your Password"
                className="w-full"
              />
            </div>
            <Link to="/app">
              <button className="btn rounded-sm text-white my-4">Login</button>
            </Link>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
