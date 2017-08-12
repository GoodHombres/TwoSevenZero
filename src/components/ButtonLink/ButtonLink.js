import React, { Component } from 'react';
import { Link } from 'react-router-native';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

class ButtonLink extends Component {
  render() {
    const { children, disabled, to } = this.props;

    const link = disabled ? (
      <View style={[styles.link, styles.disabled]}>
        <Text style={[styles.text, styles.disabledText]}>
          { children }
        </Text>
      </View>
    ) : (
      <Link to={to} style={styles.link} component={TouchableOpacity}>
        <Text style={styles.text}>
          { children }
        </Text>
      </Link>
    );

    return link;
  }
}

const styles = StyleSheet.create({
  disabled: {
    backgroundColor: '#666',
  },
  disabledText: {
    color: '#e4e4e4',
  },
  link: {
    padding: 10,
    width: '100%',
    marginTop: 20,
    backgroundColor: '#000',
  },
  text: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
  },
});

export default ButtonLink;
