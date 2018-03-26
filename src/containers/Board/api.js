import axios from 'axios';

export function game(fen, move) {
  return axios.get(
    `http://api.underwaterchess.com/game?fen=${fen}&move=${move}`,
  );
}
