import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addHobbyDetails } from "../features/hobbySlice/hobbySlice";

const HobbiesInput = () => {
  const hobbies = useSelector((state) => state.hobbyDetails);
  const dispatch = useDispatch();

  const [hobbiesInput, setHobbiesInput] = useState({
    hobbies: "",
  });

  const handleHobbiesInputChange = (e) => {
    setHobbiesInput({ ...hobbiesInput, [e.target.name]: e.target.value });
  };

  const handleAddHobby = (e) => {
    e.preventDefault();
    if (hobbies.hobbies === "") {
      alert("Kindly tell atleast one hobby about yourself.");
      return;
    } else {
      dispatch(addHobbyDetails(hobbiesInput));
      setHobbiesInput({ hobbies: "" });
    }
  };

  return (
    <form className="border bg-[#1c1c1c] rounded-xl mt-3 p-10">
      <h2 className="text-2xl font-semibold mt-5 font-alfa text-white mb-5">
        Enter Hobbies
      </h2>
      <input
        type="text"
        name="hobbies"
        value={hobbiesInput.hobby}
        onChange={handleHobbiesInputChange}
        placeholder="Enter a hobby"
        className="py-2 px-3 rounded border focus:outline-none focus:border-blue-500"
      />
      <button
        onClick={handleAddHobby}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
      >
        Add
      </button>
    </form>
  );
};

HobbiesInput.propTypes = {
  setHobbiesInput: PropTypes.func.isRequired,
  hobbiesInput: PropTypes.shape({
    hobbies: PropTypes.string.isRequired,
  }).isRequired,
  setHobbies: PropTypes.func.isRequired,
  hobbies: PropTypes.arrayOf(
    PropTypes.shape({
      hobbies: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default HobbiesInput;
