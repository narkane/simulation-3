const initialState = {
  username: "",
  password: "",
  img: ""
};

// const UPDATE_PATHNAME = "UPDATE_PATHNAME";
const UPDATE_USERNAME = "UPDATE_USERNAME";
const UPDATE_PASSWORD = "UPDATE_PASSWORD";
const UPDATE_IMG = "UPDATE_IMG";

function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_IMG:
      return Object.assign({}, state, { img: action.payload });

    case UPDATE_USERNAME:
      return Object.assign({}, state, { username: action.payload });

    case UPDATE_PASSWORD:
      return Object.assign({}, state, { password: action.payload });

    default:
      return state;
  }
}

// export function updatePathname(pl) {
//   return {
//     type: UPDATE_PATHNAME,
//     payload: pl
//   };
// }
export function updateUsername(pl) {
  return {
    type: UPDATE_USERNAME,
    payload: pl
  };
}
export function updatePassword(pl) {
  return {
    type: UPDATE_PASSWORD,
    payload: pl
  };
}
export function updateImage(pl) {
  return {
    type: UPDATE_IMG,
    payload: pl
  };
}

export default reducer;
