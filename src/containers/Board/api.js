import axios from 'axios';

export function game(fen, move) {
  return axios.get(
    `https://api.underwaterchess.com/game?fen=${fen}&move=${move}`,
  );
}
