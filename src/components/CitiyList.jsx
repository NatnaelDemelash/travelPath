/* eslint-disable react/prop-types */
import CityItem from "./CityItem";
import Spinner from "./Spinner";
import Message from "./Message";

const CitiyList = ({ cities, isLoading }) => {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return <Message message="Add your city by clicking on a city on the map" />;

  return (
    <ul className=" w-full h-[65vh] flex flex-col gap-4">
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
};

export default CitiyList;
