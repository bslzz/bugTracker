export default (state, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return {
        ...state,
        LoggedIn: true,
        token: action.payload.token,
        type: action.payload.type,
        username: action.payload.username,
        user_id: action.payload.user_id,
      };
    case 'ERROR':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
