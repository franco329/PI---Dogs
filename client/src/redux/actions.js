import axios from "axios";
import {
  GET_ALL_BREEDS,
  GET_ALL_TEMPERAMENTS,
  GET_DOG_NAME,
  GET_DOG_DETAIL,
  FILTER_BY_NAME,
  FILTER_BY_WEIGHT,
  FILTER_BY_TEMPERAMENT,
  CLEAN_BREEDS,
} from "./types";

export function getAllBreeds() {
  return async function (dispatch) {
    var res = await axios.get("http://localhost:3001/breeds");
    return dispatch({
      type: GET_ALL_BREEDS,
      payload: res.data,
    });
  };
}

export function getAllTemperaments() {
  return async function (dispatch) {
    var res = await axios.get("http://localhost:3001/temperaments");
    return dispatch({
      type: GET_ALL_TEMPERAMENTS,
      payload: res.data,
    });
  };
}

export function getDogName(name) {
  return async function (dispatch) {
    try {
      var res = await axios.get(`http://localhost:3001/breeds?name=${name}`);
      return dispatch({
        type: GET_DOG_NAME,
        payload: res.data,
      });
    } catch (error) {
      alert("The dog could not be found");
    }
  };
}

export function getDogId(id) {
  return {
    type: GET_DOG_DETAIL,
    payload: id,
  };
}

export function filterByName(payload) {
  return {
    type: FILTER_BY_NAME,
    payload,
  };
}

export function filterByWeight(payload) {
  return {
    type: FILTER_BY_WEIGHT,
    payload,
  };
}

export function filterByTemperament(payload) {
  return {
    type: FILTER_BY_TEMPERAMENT,
    payload,
  };
}

export function clearDetail() {
  return {
    type: CLEAN_BREEDS,
  };
}
