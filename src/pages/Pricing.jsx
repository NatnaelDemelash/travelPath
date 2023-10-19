import PageNav from "../components/PageNav";
import pricing from "../assets/pricing.jpg";

const Pricing = () => {
  return (
    <div className="h-[94vh] bg-[#34495E] m-3 px-6 py-4">
      <PageNav />
      <section className="flex justify-center items-center gap-8 my-10">
        <div className="flex flex-col gap-4 text-white max-w-[380px]">
          <h1 className="text-4xl font-semibold ">
            Simple Pricing just (ETB) 2000 per month
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            totam saepe ab itaque voluptatibus consectetur repudiandae iusto
          </p>
          <div className="justify-start">
            <button className="btn text-sm rounded-full transform hover:scale-105 hover:ease-out duration-300">
              Subscribe Now
            </button>
          </div>
        </div>

        <div>
          <img
            src={pricing}
            alt="pricing image"
            width={350}
            className="rounded-md"
          />
        </div>
      </section>
    </div>
  );
};

export default Pricing;
