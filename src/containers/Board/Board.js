import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import withReducer from '../../utils/withReducer';
import withSaga from '../../utils/withSaga';
import Board from './../../components/Board';
import makeSelectBoard from './selectors';
import reducer from './reducer';
import saga from './saga';
import { startGameRequest } from './actions';

class App extends Component {
  handleStart = () => {
    this.props.startGameReq();
  };

  render() {
    const { board: { chess } } = this.props;
    return (
      <div className="App">
        <button onClick={this.handleStart}>Start</button>
        <br />
        <button onClick={this.handleCvsC}>Computer vs Computer</button>

        <br />
        {chess ? <Board chess={chess} /> : null}
      </div>
    );
  }
}

App.defaultProps = {
  board: {
    loading: true,
    chess: null,
    error: false,
  },
};

App.propTypes = {
  board: PropTypes.object,
  startGameReq: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  board: makeSelectBoard(),
});

const withConnect = connect(mapStateToProps, {
  startGameReq: startGameRequest,
});

export default compose(
  withConnect,
  withSaga({ key: 'board', saga }),
  withReducer({ key: 'board', reducer }),
)(App);
