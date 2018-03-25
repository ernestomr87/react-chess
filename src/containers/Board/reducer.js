import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { startGameRequest, startGameResponse } from './actions';

const loading = handleActions(
  {
    [startGameRequest]() {
      return true;
    },

    [startGameResponse]() {
      return false;
    },
  },
  true,
);

const chess = handleActions(
  {
    [startGameRequest]() {
      return null;
    },
    [startGameResponse](state, action) {
      return action.error ? state : action.payload;
    },
  },
  null,
);

const error = handleActions(
  {
    [startGameRequest]() {
      return false;
    },
    [startGameResponse](state, action) {
      return action.error ? action.payload : false;
    },
  },
  false,
);

export default combineReducers({
  loading,
  chess,
  error,
});
