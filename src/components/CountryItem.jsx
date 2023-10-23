/* eslint-disable react/prop-types */

const CountryItem = ({ country }) => {
  return (
    <div className="countryItem">
      <li>{country.emoji}</li>
      <li>{country.country}</li>
    </div>
  );
};

export default CountryItem;
