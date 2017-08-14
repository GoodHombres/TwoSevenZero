import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import { Navigation } from './Navigation';

class ProfilePage extends Component {
  render() {
    const { dispatch, nav } = this.props;
    return(
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
  nav: state.profileNav,
});

export default connect(mapStateToProps)(ProfilePage);
