import { createStore } from 'redux';

// Reducer
const INITTIAL_STATE = ['Fazer café', 'Estudar React Native', 'Entender Redux'];

function reducer(state = INITTIAL_STATE, action) {
  if (action.type === 'ADD_TODO') {
    return [...state, action.text];
  }

  return state;
}

const store = createStore(reducer);

export default store;
