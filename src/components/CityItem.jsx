/* eslint-disable react/prop-types */
import { TbHttpDelete } from "react-icons/tb";
import { Link } from "react-router-dom";
const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

const CityItem = ({ city }) => {
  const { cityName, emoji, date, id, position } = city;
  return (
    <li>
      <Link
        className="cityItem"
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <span className="emoji">{emoji}</span>
        <h3 className="name">{cityName}</h3>
        <time className="date">{formatDate(date)}</time>
        <button className="bg-[#EC7063] px-3 rounded-full ">
          <TbHttpDelete size={20} />
        </button>
      </Link>
    </li>
  );
};

export default CityItem;
