import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Square from './Square';

const Div = styled.div`
  width: 100%;
  height: 500px;
  margin: 0 auto;
`;

class Board extends Component {
  render() {
    const { chess, chess: { SQUARES } } = this.props;
    console.log(chess.ascii());
    return (
      <Div>
        {SQUARES.map(item => {
          const color = chess.square_color(item);
          const piece = chess.get(item);
          return <Square key={item} color={color} piece={piece} />;
        })}
      </Div>
    );
  }
}

Board.propTypes = {
  chess: PropTypes.object.isRequired,
};

export default Board;
