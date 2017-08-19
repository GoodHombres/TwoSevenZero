import React, { PureComponent } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from './../../utils/colors';

class StateList extends PureComponent {
  _onPress() {
    const { item, onPressState } = this.props;

    // Call parent function and send in state
    onPressState(item);
  }

  render() {
    const { id, item } = this.props;

    return (
      <TouchableOpacity style={styles.container} onPress={this._onPress.bind(this)}>
        <View style={styles.label}>
          <Text style={styles.text}>{item.name}</Text>
          <Text style={styles.description}>Score: {item.playerScore}%</Text>
          <Text style={styles.description}>Electoral Votes: {item.electoralVotes}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightgray,
  },
  label: {},
  description: {
    color: colors.gray,
    fontSize: 14,
  },
  text: {
    color: colors.foreground,
  },
});

export default StateList;
