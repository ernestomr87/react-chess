import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Piece = styled.div`
  width: 60px;
  height: 60px;
  float: left;
  margin: 0;
  p {
    font-family: Chess;
    font-size: 60px;
    padding: 0;
    margin: 0 0 0 0;
  }
  ${props => (props.piece ? `cursor: pointer` : null)};
  ${props =>
    props.select
      ? `-webkit-filter: opacity(30%); /* Safari */
  filter: opacity(30%);`
      : null};
`;

class Square extends Component {
  getBB = piece => {
    switch (piece) {
      case "r":
        return "T";
      case "n":
        return "J";
      case "b":
        return "N";
      case "q":
        return "W";
      case "k":
        return "L";
      case "p":
        return "O";
      default:
        return;
    }
  };
  getBW = piece => {
    switch (piece) {
      case "r":
        return "R";
      case "n":
        return "H";
      case "b":
        return "B";
      case "q":
        return "Q";
      case "k":
        return "K";
      case "p":
        return "P";
      default:
        return;
    }
  };

  getWB = piece => {
    switch (piece) {
      case "r":
        return "t";
      case "n":
        return "j";
      case "b":
        return "n";
      case "q":
        return "q";
      case "k":
        return "l";
      case "p":
        return "o";
      default:
        return;
    }
  };
  getWW = piece => {
    switch (piece) {
      case "r":
        return "r";
      case "n":
        return "h";
      case "b":
        return "b";
      case "q":
        return "q";
      case "k":
        return "k";
      case "p":
        return "p";
      default:
        return;
    }
  };

  getPiece = () => {
    const { color, piece } = this.props;
    if (piece) {
      if (color === "dark") {
        if (piece.color === "b") {
          return this.getBB(piece.type);
        } else {
          return this.getBW(piece.type);
        }
      } else {
        if (piece.color === "b") {
          return this.getWB(piece.type);
        } else {
          return this.getWW(piece.type);
        }
      }
    } else {
      if (color === "dark") {
        return "+";
      } else {
        return "*";
      }
    }
  };
  handleClick = () => {
    const { item, handleClickPiece } = this.props;
    handleClickPiece(item);
  };
  isAMove = () => {
    const { item, moves } = this.props;
    const res = moves.filter(elem => elem === item);
    if (res.length) {
      return true;
    }
    return false;
  };

  render() {
    const { piece, select } = this.props;
    return (
      <Piece select={select} piece={piece} onClick={this.handleClick}>
        <p> {this.getPiece()} </p>
        {this.isAMove() ? <span>*</span> : null}
      </Piece>
    );
  }
}

Square.propTypes = {
  color: PropTypes.string.isRequired,
  piece: PropTypes.object,
  moves: PropTypes.any,
  item: PropTypes.string,
  select: PropTypes.bool,
  handleClickPiece: PropTypes.func
};

export default Square;
