import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';

import StateList from './../../components/StateList/StateList';

import { pop, push } from './../../actions/navigation';
import states from './../../fixtures/states.json';
import stateList from './../../fixtures/main.json';

class State extends Component {
  static navigationOptions = ({navigation}) => ({
    title: stateList.states[navigation.state.params.id].name,
  });

  _onPressItem(id) {
    console.log(`Pressed item ${id}!`)
  }

  _renderItems(item) {
    return (
      <StateList
        item={item}
        id={item.item.id}
        title={`Percentage Awarded: ${item.item.points}%`}
        onPressState={this._onPressItem.bind(this)}
      />
    );
  }

  render() {
    const state = stateList.states[this.props.navigation.state.params.id].id;

    return (
      <View style={styles.container}>
        <FlatList
          data={states[state]}
          keyExtractor={item => item.id}
          renderItem={this._renderItems.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
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
