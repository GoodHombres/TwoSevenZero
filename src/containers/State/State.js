import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Link, withRouter } from 'react-router-native';
import { connect } from 'react-redux';
import { pop, push } from './../../actions/navigation';

import stateList from './../../fixtures/main.json';

class State extends Component {
  static navigationOptions = ({navigation}) => ({
    title: stateList.states[navigation.state.params.id].name,
  });

  render() {
    return (
      <View style={styles.container}>
        <Text>state</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});

const mapStateToProps = state => {
  return {
    name: state.player.name,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    goBack: () => dispatch(pop()),
    goTo: (page) => dispatch(push(page)),
  };
};

export default connect(mapStateToProps)(State);
