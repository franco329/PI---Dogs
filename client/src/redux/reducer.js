import { GET_ALL_BREEDS, GET_BREED_ID, GET_BREEDS_FOR_PAGE } from "./types";

const initialState = {
  allBreeds: [],
  breedCards: [],
  breedDetail: [],
  allTemperaments: [],
  breedsForPage: [],
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
    default:
      return {
        ...state,
      };
  }
}
