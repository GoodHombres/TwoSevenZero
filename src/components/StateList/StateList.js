import React, { PureComponent } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from './../../utils/colors';

class StateList extends PureComponent {
  _onPress() {
    const { id, onPressState } = this.props;

    // Call parent function and send in state id
    onPressState(id);
  }

  render() {
    const { id, title } = this.props;

    return (
      <TouchableOpacity style={styles.container} onPress={this._onPress.bind(this)}>
        <View>
          <Text style={styles.text}>{title}</Text>
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
  text: {
    // textAlign: 'center',
    color: colors.foreground,
  },
});

export default StateList;
