export const InitialState = {
  urlVideo: "",
  contactReason: "",
  hash: "",
};

export const AppReducer = (state, action) => {
  switch (action.type) {
    case "change_video":
      return { ...state, urlVideo: action.value };
    case "change_contact":
      return { ...state, contactReason: action.value };
    case "scroll_into_view":
      return { ...state, hash: action.value };
    default:
      return state;
  }
};
