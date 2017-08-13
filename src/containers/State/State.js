import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Link, withRouter } from 'react-router-native';
import { connect } from 'react-redux';

class State extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>state</Text>
        <Link to={'/'}>
          <Text>Back</Text>
        </Link>
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

export default withRouter(connect(mapStateToProps)(State));
