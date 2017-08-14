import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import colors from './../../utils/colors';

class Loading extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>270</Text>
          <Text style={styles.subtitle}>Race to the White House</Text>
        </View>
        <View style={styles.content}>
          <ActivityIndicator color={colors.foreground} />
          <Text style={styles.loading}>Loading</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.background,
  },
  header: {
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.purple,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    maxWidth: 500,
    margin: 'auto',
    marginTop: 50,
    padding: 10,
    width: '90%',
    justifyContent: 'center',
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: colors.background,
  },
  subtitle: {
    color: colors.lightgray,
    marginTop: 20,
    fontSize: 24,
  },
  loading: {
    paddingLeft: 10,
    fontSize: 24,
    textAlign: 'center',
    color: colors.foreground,
  },
});

export default Loading;
