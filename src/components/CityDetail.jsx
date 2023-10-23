import { useParams } from "react-router-dom";

const CityDetail = () => {
  const { id } = useParams();
  return <div>City {id}</div>;
};

export default CityDetail;
