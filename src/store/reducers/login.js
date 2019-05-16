const INITTIAL_STATE = {
  username: null,
  loading: false,
  error: false,
};

export default function login(state = INITTIAL_STATE, action) {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return { ...state, loading: true };
    case 'LOGIN_SUCESS':
      return {
        ...state,
        username: action.payload.username,
        error: false,
        loading: false,
      };
    case 'LOGIN_FAILURE':
      return { ...state, error: true, loading: false };
    default:
      return state;
  }
}
