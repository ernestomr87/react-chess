import { createAction } from 'redux-actions';
import { START_GAME_REQUEST, START_GAME_RESPONSE } from './constants';

export const startGameRequest = createAction(START_GAME_REQUEST);
export const startGameResponse = createAction(START_GAME_RESPONSE);
