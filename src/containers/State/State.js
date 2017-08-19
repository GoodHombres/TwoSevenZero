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
        id={item.item.key}
        key={item.item.key}
        title={`Percentage Awarded: ${item.item.points}%`}
        onPressState={this._onPressItem.bind(this)}
      />
    );
  }

  renderTriviaState(state) {
    const stateId = state.id;

    return (
      <View style={styles.container}>
      <FlatList
        data={states[stateId]}
        renderItem={this._renderItems.bind(this)}
      />
    </View>
    );
  }

  renderState(state) {
    // Render depending on type
    switch(state.type) {
      // In case of trivia
      case 'trivia':
      default:
        return this.renderTriviaState(state);
    }
  }

  render() {
    const { states } = this.props;
    const stateObject = states[this.props.navigation.state.params.id];

    return this.renderState(stateObject);
  }
}

const styles = StyleSheet.create({
  container: {
  },
});

const mapStateToProps = state => {
  return {
    name: state.candidate.name,
    states: state.election,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    goBack: () => dispatch(pop()),
    goTo: (page) => dispatch(push(page)),
  };
};

export default connect(mapStateToProps)(State);
