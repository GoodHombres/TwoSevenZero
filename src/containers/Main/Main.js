import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { setName } from './../../actions/player';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import Home from './../Home/Home';
import Player from './../Player/Player';
import TabBar from './../TabBar/TabBar';

class Main extends Component {
  static navigationOptions = {
    header: null
  }

  render() {
    const { name, party } = this.props;
    return (
      <ScrollableTabView
        tabBarPosition={'bottom'}
        renderTabBar={() => <TabBar />}
      >
        <Home tabLabel={'ios-compass'} />
        <Player tabLabel={'ios-person'} />
      </ScrollableTabView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f3f6fa',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  text: {
    textAlign: 'center',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 4,
  },
});

const mapStateToProps = state => {
  return {
    name: state.player.name,
    party: state.player.party,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    changePlayerName: name => {
      dispatch(setName(name));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);