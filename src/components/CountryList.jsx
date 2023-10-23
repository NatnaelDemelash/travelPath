/* eslint-disable react/prop-types */
import Spinner from "./Spinner";
import Message from "./Message";
import CountryItem from "./CountryItem";

const CountryList = ({ cities, isLoading }) => {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your Country by clicking on a Country on the map" />
    );

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);
  return (
    <ul className="countryList w-full h-[65vh] flex flex-col gap-4">
      {countries.map((country) => (
        <CountryItem country={country} key={country} />
      ))}
    </ul>
  );
};

export default CountryList;
