import { useParams, useSearchParams } from "react-router-dom";

const CityDetail = () => {
  const { id } = useParams();
  const [searchParams, setSearchParam] = useSearchParams();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <div className="text-white">
      City {id}
      <h2>Coordinaltes</h2>
      <p>
        Latitude: {lat} - Longtiude: {lng}
      </p>
    </div>
  );
};

export default CityDetail;
