import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Square from "./Square";

const Div = styled.div`
  width: 500px;
  height: 500px;
`;

class Board extends Component {
  render() {
    const { chess, chess: { SQUARES } } = this.props;
    return (
      <Div>
        {SQUARES.map(item => {
          return (
            <Square
              key={item}
              color={chess.square_color(item)}
              piece={chess.get(item)}
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
