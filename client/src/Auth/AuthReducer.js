const AdminAuthReducer = (action, state) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        parent: null,
        isFetching: true,
        error: false,
      };
    case "LOGIN_SUCCESS":
      return {
        parent: action.payload,
        isFetching: false,
        error: false,
      };
    case "LOGIN_FAILURE":
      return {
        parent: null,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default AdminAuthReducer;
