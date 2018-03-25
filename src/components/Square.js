import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Piece = styled.div`
  font-family: Chess;
  width: 12.5%;
  float: left;
  margin: 0;
  p {
    font-size: 60px;
    padding: 0;
    margin: 0 0 0 0;
  }
`;

class Square extends Component {
  state = {
    piece: `*`,
  };

  componentWillMount = () => {
    this.getPiece();
  };

  getBB = piece => {
    switch (piece) {
      case 'r':
        this.setState({ piece: 'T' });
        break;
      case 'n':
        this.setState({ piece: 'J' });
        break;
      case 'b':
        this.setState({ piece: 'N' });
        break;
      case 'q':
        this.setState({ piece: 'W' });
        break;
      case 'k':
        this.setState({ piece: 'L' });
        break;
      case 'p':
        this.setState({ piece: 'O' });
        break;
      default:
        break;
    }
  };
  getBW = piece => {
    switch (piece) {
      case 'r':
        this.setState({ piece: 'R' });
        break;
      case 'n':
        this.setState({ piece: 'H' });
        break;
      case 'b':
        this.setState({ piece: 'B' });
        break;
      case 'q':
        this.setState({ piece: 'Q' });
        break;
      case 'k':
        this.setState({ piece: 'K' });
        break;
      case 'p':
        this.setState({ piece: 'P' });
        break;
      default:
        break;
    }
  };

  getWB = piece => {
    switch (piece) {
      case 'r':
        this.setState({ piece: 't' });
        break;
      case 'n':
        this.setState({ piece: 'j' });
        break;
      case 'b':
        this.setState({ piece: 'n' });
        break;
      case 'q':
        this.setState({ piece: 'w' });
        break;
      case 'k':
        this.setState({ piece: 'l' });
        break;
      case 'p':
        this.setState({ piece: 'o' });
        break;
      default:
        break;
    }
  };
  getWW = piece => {
    switch (piece) {
      case 'r':
        this.setState({ piece: 'r' });
        break;
      case 'n':
        this.setState({ piece: 'h' });
        break;
      case 'b':
        this.setState({ piece: 'b' });
        break;
      case 'q':
        this.setState({ piece: 'q' });
        break;
      case 'k':
        this.setState({ piece: 'k' });
        break;
      case 'p':
        this.setState({ piece: 'p' });
        break;
      default:
        break;
    }
  };

  getPiece = () => {
    const { color, piece } = this.props;
    if (piece) {
      if (color === 'dark') {
        if (piece.color === 'b') {
          this.getBB(piece.type);
        } else {
          this.getBW(piece.type);
        }
      } else {
        if (piece.color === 'b') {
          this.getWB(piece.type);
        } else {
          this.getWW(piece.type);
        }
      }
    } else {
      if (color === 'dark') {
        this.setState({ piece: '+' });
      } else {
        this.setState({ piece: '*' });
      }
    }
  };

  render() {
    return (
      <Piece>
        <p> {this.state.piece} </p>
      </Piece>
    );
  }
}

Square.propTypes = {
  color: PropTypes.string.isRequired,
  piece: PropTypes.object,
};

export default Square;
