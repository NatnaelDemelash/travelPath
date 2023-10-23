import { useSearchParams } from "react-router-dom";

const Map = () => {
  const [searchParams, setSearchParam] = useSearchParams();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <div className="bg-slate-400 h-[94vh] w-[58%]">
      <h1>Map</h1>
      <h2>
        Position: {lat}, {lng}
      </h2>
    </div>
  );
};

export default Map;
