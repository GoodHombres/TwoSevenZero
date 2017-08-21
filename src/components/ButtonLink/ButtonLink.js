import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import colors from './../../utils/colors';

class ButtonLink extends Component {
  _onPress() {
    const { disabled, onPressButton } = this.props;

    !disabled && onPressButton();
  }

  render() {
    const { children, disabled, to } = this.props;

    const link = disabled ? (
      <View style={[styles.link, styles.disabled]}>
        <Text style={[styles.text, styles.disabledText]}>
          { children }
        </Text>
      </View>
    ) : (
      <TouchableOpacity style={styles.link} onPress={this._onPress.bind(this)}>
        <Text style={styles.text}>
          { children }
        </Text>
      </TouchableOpacity>
    );

    return link;
  }
}

const styles = StyleSheet.create({
  disabled: {
    backgroundColor: colors.gray,
  },
  disabledText: {
    color: colors.lightgray,
  },
  link: {
    padding: 10,
    width: '100%',
    marginTop: 20,
    backgroundColor: colors.foreground,
  },
  text: {
    fontSize: 24,
    color: colors.background,
    textAlign: 'center',
  },
});

export default ButtonLink;
