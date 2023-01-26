import axios from "axios";

export const getBreeds = () => {
  return async (dispatch) => {
    await axios
      .get("http://localhost:3001/breeds")
      .then((data) => dispatch({ type: "GET_BREEDS", payload: data.data }));
  };
};

export const cleanBreeds = () => {
  return { type: "CLEAN_BREEDS" };
};
