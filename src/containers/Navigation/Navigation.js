import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { Redirect, Route, Switch, withRouter } from 'react-router-native';

// Routes
import Main from './../Main/Main';
import Start from './../Start/Start';
import State from './../State/State';

import colors from './../../utils/colors';

import AnimatedRoute from './../../AnimatedRoute/AnimatedRoute';

class Navigation extends Component {
  render() {
    const { name, party } = this.props;

    return (
      <View style={styles.container}>
          <Switch>
            <ProtectedRoute partisan={party && name} exact path={'/'} component={Main} />
            <ProtectedRoute partisan={party && name} path={'/state/:id'} component={State} />
            <Route exact path={'/start'} component={Start} />
          </Switch>
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
    backgroundColor: colors.background,
  },
});

const mapStateToProps = state => {
  return {
    name: state.player.name,
    party: state.player.party,
  };
};

export default withRouter(connect(mapStateToProps)(Navigation));
