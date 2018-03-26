import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Row, Col, Button, Card, Table, Icon, Tag, message } from 'antd';
import { createStructuredSelector } from 'reselect';
import withReducer from '../../utils/withReducer';
import withSaga from '../../utils/withSaga';
import Board from './../../components/Board';
import makeSelectBoard from './selectors';
import reducer from './reducer';
import saga from './saga';
import { startGameRequest, startGameCpuVSCpuRequest } from './actions';

const CardWrapper = styled(Card)`
  .ant-card-body {
    padding: 0px;
  }
`;
const TableWrapper = styled(Table)`
  .ant-table-small
    > .ant-table-content
    > .ant-table-body
    > table
    > .ant-table-tbody
    > tr
    > td{
      padding: 6px 8px;
    }
    
  }
`;

class App extends Component {
  componentDidMount = () => {
    this.handleStart();
  };
  componentWillReceiveProps = nextProps => {
    if (
      !nextProps.board.loading &&
      nextProps.board.chess &&
      nextProps.board.mode === 'CpuVsCpu'
    ) {
      if (!nextProps.board.error) {
        if (!nextProps.board.chess.game_over()) {
          this.props.startGameCpuVSCpuReq({ chess: this.props.board.chess });
        } else {
          message.info('Game Over!!!');
        }
      } else {
        message.error('Request Timeout!!!');
      }
    }
  };

  handleStart = () => {
    this.props.startGameReq();
  };

  startGameCpuVSCpu = () => {
    const { board: { chess }, startGameCpuVSCpuReq } = this.props;
    startGameCpuVSCpuReq({ chess: chess });
  };

  render() {
    const { board: { chess, mode, loading } } = this.props;

    let count = 0;
    let white = [];
    let black = [];
    let data = [];
    const columns = [
      {
        title: '#',
        dataIndex: 'move',
        key: 'move',
      },
      {
        title: 'White',
        dataIndex: 'w',
        key: 'white',
      },
      {
        title: 'Black',
        dataIndex: 'b',
        key: 'black',
      },
    ];
    if (chess && chess.history().length) {
      const history = chess.history();
      while (count <= history.length) {
        if (count % 2 === 0) {
          white.push(history[count]);
        } else {
          black.push(history[count]);
        }
        count++;
      }
      for (let i = 0; i < white.length; i++) {
        data.push({ move: i + 1, w: white[i], b: black[i] || '' });
      }
    }
    const pagination = { pageSize: 15 };

    return (
      <div className="gutter-example">
        <Row type="flex" justify="center">
          <Col xs={24} md={10}>
            {chess ? (
              <Card className="card-chess" style={{ width: 530 }}>
                <Button
                  disabled={mode === 'CpuVsCpu'}
                  type="primary"
                  onClick={this.startGameCpuVSCpu}
                >
                  Computer vs Computer
                </Button>
                {chess.turn() === 'b' ? (
                  <Tag className="chess-right" color="#595959">
                    Black Turn &nbsp;
                    {loading ? (
                      <Icon style={{ fontSize: 12 }} type="loading" />
                    ) : null}
                  </Tag>
                ) : (
                  <Tag className="chess-right" color="blue">
                    White Turn &nbsp;
                    {loading ? (
                      <Icon style={{ fontSize: 12 }} type="loading" />
                    ) : null}
                  </Tag>
                )}

                <Board chess={chess} />
              </Card>
            ) : null}
          </Col>
          <Col xs={24} md={10}>
            <Row>
              <Col xs={12}>
                <CardWrapper>
                  <TableWrapper
                    size="small"
                    bordered={false}
                    columns={columns}
                    dataSource={data}
                    pagination={pagination}
                  />
                </CardWrapper>
              </Col>
            </Row>
          </Col>
        </Row>
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
  startGameCpuVSCpuReq: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  board: makeSelectBoard(),
});

const withConnect = connect(mapStateToProps, {
  startGameReq: startGameRequest,
  startGameCpuVSCpuReq: startGameCpuVSCpuRequest,
});

export default compose(
  withConnect,
  withSaga({ key: 'board', saga }),
  withReducer({ key: 'board', reducer }),
)(App);
