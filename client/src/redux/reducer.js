import {
  GET_ALL_BREEDS,
  GET_BREED_ID,
  GET_BREEDS_FOR_PAGE,
  GET_ALL_TEMPERAMENTS,
  FILTERS,
} from "./types";

const initialState = {
  allBreeds: [],
  breedCards: [],
  breedDetail: [],
  allTemperaments: [],
  breedsForPage: [],
  filters: "",
  form: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_BREEDS:
      return {
        ...state,
        allBreeds: action.payload,
      };
    case GET_BREED_ID:
      return {
        ...state,
        breedCards: action.payload,
      };
    case GET_BREEDS_FOR_PAGE:
      return {
        ...state,
        breedsForPage: action.payload,
      };
    case GET_ALL_TEMPERAMENTS:
      return {
        ...state,
        allTemperaments: action.payload,
      };
    case FILTERS:
      return {
        ...state,
        filters: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}
