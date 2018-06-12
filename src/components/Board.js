import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Square from "./Square";

const Div = styled.div`
  width: 100%;
  height: 500px;
  margin: 0 auto;
`;

class Board extends Component {
  state = {
    item: null,
    moves: []
  };
  handleClickPiece = item => {
    const { chess } = this.props;
    const moves = chess.moves({ square: item });
    this.setState({ moves, item });
  };
  render() {
    const { chess, chess: { SQUARES } } = this.props;
    return (
      <Div>
        {SQUARES.map(item => {
          const color = chess.square_color(item);
          const piece = chess.get(item);
          return (
            <Square
              select={item === this.state.item}
              moves={this.state.moves}
              key={item}
              item={item}
              color={color}
              piece={piece}
              handleClickPiece={this.handleClickPiece}
            />
          );
        })}
      </Div>
    );
  }
}

Board.propTypes = {
  chess: PropTypes.object.isRequired
};

export default Board;
