import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import { Navigation } from './Navigation';

class AppNavigation extends Component {
  render() {
    const { dispatch, nav } = this.props;

    return (
      <Navigation
        navigation={
          addNavigationHelpers({
            dispatch,
            state: nav,
          })
        }
      />
    );
  }
}


const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppNavigation);
