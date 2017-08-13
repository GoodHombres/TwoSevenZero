import React, { PureComponent } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from './../../utils/colors';
import { Link } from 'react-router-native';

class StateList extends PureComponent {
  render() {
    const { id, title } = this.props;

    return (
      <Link to={`/state/${id}`} style={styles.container} component={TouchableOpacity}>
        <View>
          <Text style={styles.text}>{title}</Text>
        </View>
      </Link>
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
