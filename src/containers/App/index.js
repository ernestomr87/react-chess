import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Layout } from 'antd';
import { Switch, Route, Redirect } from 'react-router-dom';

import Board from '../Board';
const { Content } = Layout;

class App extends Component {
  render() {
    return (
      <Layout style={{ height: '100vh' }}>
        <Helmet titleTemplate="%s | Fetch-Api-News" />
        <Content>
          <Switch>
            <Route exact path="/board" component={Board} />
            <Route exact path="/" render={() => <Redirect to="/board" />} />
          </Switch>
        </Content>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  route: state.route,
});

const WrappedApp = connect(mapStateToProps, {})(App);

export default WrappedApp;
