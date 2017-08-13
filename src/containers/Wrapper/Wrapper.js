import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { Redirect, Route, withRouter } from 'react-router-native';

// Routes
import Main from './../Main/Main';
import Start from './../Start/Start';

import colors from './../../utils/colors';

class Wrapper extends Component {
  render() {
    const { name, party } = this.props;

    return (
      <View style={styles.container}>
        <ProtectedRoute partisan={party && name} exact path={'/'} component={Main} />
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
    backgroundColor: colors.background,
  },
});

const mapStateToProps = state => {
  return {
    name: state.player.name,
    party: state.player.party,
  };
};

export default withRouter(connect(mapStateToProps)(Wrapper));
