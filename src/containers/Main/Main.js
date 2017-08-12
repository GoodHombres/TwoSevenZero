import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text } from 'react-native';
import { Redirect, Route, withRouter } from 'react-router-native';

import Home from './../Home/Home';
import Start from './../Start/Start';

class Main extends Component {
  render() {
    const { name, party } = this.props;

    return (
      <View style={styles.container}>
        <ProtectedRoute partisan={party && name} exact path={'/'} component={Home} />
        <Route path={'/start'} component={Start} />
      </View>
    );
  }
}

const ProtectedRoute = ({ component: Component, partisan, ...rest }) => (
  <Route {...rest} render={ props => (
    partisan ? (
      <Component />
    ) : (
      <Redirect to={{
        pathname: '/start',
        state: { from: props.location },
      }} />
    )
  )} />
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const mapStateToProps = state => {
  return {
    name: state.player.name,
    party: state.player.party,
  };
};

export default withRouter(connect(mapStateToProps)(Main));
