import PageNav from "../components/PageNav";
import about from "../assets/about.jpg";

const Product = () => {
  return (
    <div className="h-[94vh] bg-[#34495E] m-3 px-6 py-4">
      <PageNav />
      <section className="flex justify-center items-center gap-8 my-10">
        <div>
          <img
            src={about}
            alt="AboutUs image"
            width={300}
            className="rounded-md shadow-xl"
          />
        </div>
        <div className="flex flex-col gap-6 justify-start text-justify items-center max-w-[400px] text-white font-light">
          <h1 className="text-4xl font-bold">
            About <span className="brand font-bold">TravelPath.pro ✈️</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            quo vero esse maiores vel alias enim. Quae minus inventore placeat
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            quo vero esse maiores vel alias enim. Quae minus inventore placeat
            nemo sed temporibus molestiae rem rerum, laborum, illum consectetur
            soluta.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            quo vero esse maiores vel alias enim. Quae minus inventore placeat
          </p>
        </div>
      </section>
    </div>
  );
};

export default Product;
