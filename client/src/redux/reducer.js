import { GET_BREEDS, CLEAN_BREEDS } from "./types";

const initialState = {
  breeds: [],
  //   dogsToDisplay: new Array(8).fill(""),
  //   temperaments: [],
  //   dogsIsFetching: false,
  //   temperamentsIsFetching: false,
  //   modalDogCreatedSuccess: false,
  //   modalDogCreatedFailed: false,
  //   postDogIsFetching: false,
  //   dogsFetchError: false,
  //   temperamentsFetchError: false,
  //   postDogError: false,
  //   order: orderOp[0],
  //   filterByTemperament: [],
  //   filterByOrigin: originOp[0],
  //   filterBySearch: "",
  //   page: 1,
  //   prevPage: 1,
  //   totalPages: 1,
  //   imgStack: false,
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_BREEDS:
      return {
        ...state,
        breeds: action.payload,
      };
    case CLEAN_BREEDS:
      return {
        ...state,
        breeds: [],
      };
    default:
      return {
        ...state,
      };
  }
}

//   switch (action.type) {
// case FETCH_DOGS_START: {
//   return {
//     ...state,
// dogsFetchError: false,
// dogsIsFetching: true,
//   };
// }
// default:
//   return state;
//   }
