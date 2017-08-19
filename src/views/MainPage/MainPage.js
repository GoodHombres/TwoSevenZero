import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import { Navigation } from './Navigation';

import colors from './../../utils/colors';

class MainPage extends Component {
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
  nav: state.mainNav,
});

export default connect(mapStateToProps)(MainPage);
