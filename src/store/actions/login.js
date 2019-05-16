export const loginRequest = username => ({
  type: 'LOGIN_REQUEST',
  payload: { username },
});

export const loginSucess = username => ({
  type: 'LOGIN_SUCESS',
  payload: { username },
});

export const loginFailure = () => ({
  type: 'LOGIN_FAILURE',
});
