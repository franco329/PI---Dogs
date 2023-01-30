import axios from "axios";
import {
  GET_ALL_BREEDS,
  CLEAN_BREEDS,
  GET_BREED_ID,
  GET_BREEDS_FOR_PAGE,
  GET_ALL_TEMPERAMENTS,
  FILTERS,
} from "./types";

export const initBreeds = (data) => {
  return {
    type: GET_ALL_BREEDS,
    payload: data,
  };
};

export const cleanBreeds = () => {
  return { type: CLEAN_BREEDS };
};

export const breedId = (id) => {
  return async (dispatch) => {
    await axios.get(`http://localhost:3001/breeds/${id}`).then((data) => {
      dispatch({
        type: GET_BREED_ID,
        payload: data.data,
      });
    });
  };
};

export const breedsForPage = (data) => {
  return {
    type: GET_BREEDS_FOR_PAGE,
    payload: data,
  };
};

export const allTemperaments = (temps) => {
  return {
    type: GET_ALL_TEMPERAMENTS,
    payload: temps,
  };
};

export const filtered = (event) => {
  return {
    type: FILTERS,
    payload: event,
  };
};
