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

const initialState = {
  breeds: [],
  allBreeds: [],
  breedDetail: [],
  temperaments: [],
  dogDetail: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_BREEDS:
      return {
        ...state,
        breeds: action.payload,
        allBreeds: action.payload,
      };
    case GET_DOG_NAME:
      return {
        ...state,
        breeds: action.payload,
      };
    case GET_DOG_DETAIL:
      return {
        ...state,
        dogDetail: action.payload,
      };
    case GET_ALL_TEMPERAMENTS:
      return {
        ...state,
        temperaments: action.payload,
      };
    case FILTER_BY_NAME:
      const filterName =
        action.payload === "A-Z"
          ? state.breeds.sort((a, b) => {
              if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
              if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
              return 0;
            })
          : state.breeds.sort((a, b) => {
              if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
              if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
              return 0;
            });
      return {
        ...state,
        breeds: filterName,
      };
    case FILTER_BY_TEMPERAMENT:
      const temp = state.allBreeds;
      const filterTemp =
        action.payload === "All"
          ? temp
          : temp.filter((breed) => {
              return breed.temperament.name.includes(action.payload);
            });
      return {
        ...state,
        breeds: filterTemp,
      };
    case FILTER_BY_WEIGHT:
      const breedWeightValues = state.allBreeds.filter(
        (breed) => breed.weight.split(" - ")[0]
      );
      const filterWeight =
        action.payload === "min_weight"
          ? breedWeightValues.sort((a, b) => {
              return a.breedWeightValues[0] - b.breedWeightValues[1];
            })
          : breedWeightValues
              .sort((a, b) => {
                return a.breedWeightValues[0] - b.breedWeightValues[1];
              })
              .reverse();

      return {
        ...state,
        breeds: filterWeight,
      };
    case CLEAN_BREEDS:
      return {
        ...state,
        breeds: {},
      };
    default:
      return {
        ...state,
      };
  }
}
