import {ADD_PLACE, DELETE_PLACE} from './../actions/actionTypes';

const initialState = {
  places: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key: Math.random(),
          name: action.placeName,
          image: {uri: "https://s14677.pcdn.co/wp-content/uploads/2012/10/832.jpg"}
        })
      };
    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter((place) => {
          return place.key !== action.placeKey;
        })
      };
    default:
      return state;
  }
};

export default reducer;