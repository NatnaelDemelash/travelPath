import SideBar from "../components/SideBar";
import Map from "../components/Map";

const AppLayout = () => {
  return (
    <div className="">
      <section>
        <div className="flex items-center ">
          <SideBar />
          <Map />
        </div>
      </section>
    </div>
  );
};

export default AppLayout;
