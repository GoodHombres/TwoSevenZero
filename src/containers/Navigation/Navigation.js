import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

// Routes
import Main from './../Main/Main';
import Start from './../Start/Start';
import State from './../State/State';

import colors from './../../utils/colors';

export const Navigation = StackNavigator({
  Main: { screen: Main },
  Start: {
    screen: Start,
    navigationOptions: () => ({
      headerMode: 'none',
      mode: 'modal',
    }),
  },
  State: { screen: State },
});

const NavigationState = ({ dispatch, nav }) => (
  <Navigation navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(NavigationState);
