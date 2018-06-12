import { createAction } from 'redux-actions';
import {
  START_GAME_REQUEST,
  START_GAME_RESPONSE,
  START_GAME_CPU_VS_CPU_REQUEST,
  START_GAME_CPU_VS_CPU_RESPONSE,
  START_GAME_PLAYER_VS_CPU_REQUEST,
  START_GAME_PLAYER_VS_CPU_RESPONSE,
} from './constants';

export const startGameRequest = createAction(START_GAME_REQUEST);
export const startGameResponse = createAction(START_GAME_RESPONSE);

export const startGameCpuVSCpuRequest = createAction(
  START_GAME_CPU_VS_CPU_REQUEST,
);
export const startGameCpuVSCpuResponse = createAction(
  START_GAME_CPU_VS_CPU_RESPONSE,
);

export const startGamePlayerVSCpuRequest = createAction(
  START_GAME_PLAYER_VS_CPU_REQUEST,
);
export const startGamePlayerVSCpuResponse = createAction(
  START_GAME_PLAYER_VS_CPU_RESPONSE,
);
