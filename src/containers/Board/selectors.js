import { createSelector } from 'reselect';

const selectBoardDomain = () => state => state.board;

const makeSelectBoard = () =>
  createSelector(selectBoardDomain(), substate => {
    if (!substate) return undefined;
    return substate;
  });

export default selectBoardDomain;
export { makeSelectBoard };
