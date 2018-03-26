import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import {
  startGameRequest,
  startGameResponse,
  startGameCpuVSCpuRequest,
  startGameCpuVSCpuResponse,
} from './actions';

const mode = handleActions(
  {
    [startGameRequest]() {
      return null;
    },
    [startGameCpuVSCpuRequest]() {
      return 'CpuVsCpu';
    },

    [startGameResponse]() {
      return null;
    },
    [startGameCpuVSCpuResponse]() {
      return 'CpuVsCpu';
    },
  },
  null,
);
const loading = handleActions(
  {
    [startGameRequest]() {
      return true;
    },
    [startGameCpuVSCpuRequest]() {
      return true;
    },

    [startGameResponse]() {
      return false;
    },
    [startGameCpuVSCpuResponse]() {
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
    [startGameCpuVSCpuRequest](state) {
      return state;
    },
    [startGameResponse](state, action) {
      return action.error ? state : action.payload;
    },
    [startGameCpuVSCpuResponse](state, action) {
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
    [startGameCpuVSCpuRequest]() {
      return false;
    },
    [startGameResponse](state, action) {
      return action.error ? action.payload : false;
    },
    [startGameCpuVSCpuResponse](state, action) {
      return action.error ? action.payload : false;
    },
  },
  false,
);

export default combineReducers({
  loading,
  chess,
  error,
  mode,
});
