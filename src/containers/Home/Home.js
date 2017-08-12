import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Link, withRouter } from 'react-router-native';
import { setName } from './../../actions/player';

class Home extends Component {
  render() {
    const { name, party } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Home Page</Text>
        <Text style={styles.text}>My Name is: { name }</Text>
        <Text style={styles.text}>I belong to the { party } party!</Text>
        <Link to={'/start'}>
          <Text>Restart</Text>
        </Link>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f3f6fa',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  text: {
    textAlign: 'center',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 4,
  },
});

const mapStateToProps = state => {
  return {
    name: state.player.name,
    party: state.player.party,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    changePlayerName: name => {
      dispatch(setName(name));
    },
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));