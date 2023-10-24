import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");

  const navigate = useNavigate();

  return (
    <form className="form">
      <div className="row">
        <label htmlFor="cityName" className="text-white">
          City name
        </label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        {/* <span className={styles.flag}>{emoji}</span> */}
      </div>

      <div className="row">
        <label htmlFor="date" className="text-white">
          When did you go to {cityName}?
        </label>
        <input
          id="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </div>

      <div className="row">
        <label htmlFor="notes" className="text-white">
          Notes about your trip to {cityName}
        </label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className="buttons">
        <button className="bg-[#ff914d] py-2 px-6 rounded-md text-white">
          Add
        </button>
        <button
          className="bg-[#f4d03f] py-2 px-6 rounded-md"
          onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
        >
          &larr; Back
        </button>
      </div>
    </form>
  );
};

export default Form;
