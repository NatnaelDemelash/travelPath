/* eslint-disable react/prop-types */
import { TbHttpDelete } from "react-icons/tb";
const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

const CityItem = ({ city }) => {
  const { cityName, emoji, date } = city;
  return (
    <li className="cityItem">
      <span className="emoji">{emoji}</span>
      <h3 className="name">{cityName}</h3>
      <time className="date">{formatDate(date)}</time>
      <button className="bg-[#EC7063] px-3 rounded-full ">
        <TbHttpDelete size={20} />
      </button>
    </li>
  );
};

export default CityItem;
