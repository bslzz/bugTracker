export default (state, action) => {
  switch (action.type) {
    case 'REGISTER':
      return {
        ...state,
        username: action.payload.username,
        admin_id: action.payload.admin_id,
      };
    case 'REGISTER_CLIENT':
      return {
        ...state,
        username: action.payload.username,
        client_id: action.payload.client_id,
      };
    case 'LOG_IN':
      return {
        ...state,
        LoggedIn: true,
        token: action.payload.token,
        type: action.payload.type,
        username: action.payload.username,
        user_id: action.payload.user_id,
      };
    case 'LOG_OUT':
      return {
        ...state,
        LoggedIn: false,
        token: '',
        type: '',
        username: '',
        user_id: '',
      };
    case 'BUGS':
      return {
        ...state,
        Bugs: action.payload,
      };
    case 'ADD_BUG':
      return {
        ...state,
        Bugs: [...state.Bugs, action.payload],
      };
    case 'DELETE_BUG':
      return {
        ...state,
        Bugs: state.Bugs.filter((Bug) => Bug.bug_id !== action.payload),
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
