import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import { Navigation } from './Navigation';
import { setRoot } from './../../actions/navigation';

class TabBar extends Component {
  static navigationOptions = {
    header: null,
  }

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
  nav: state.tabBar,
});

const mapDispatchToProps = dispatch => {
  return {
    reset: () => dispatch(setRoot('Start')),
  };
}

export default connect(mapStateToProps)(TabBar);
