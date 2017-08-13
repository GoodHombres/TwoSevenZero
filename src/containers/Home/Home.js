import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { Link, withRouter } from 'react-router-native';
import { setName } from './../../actions/player';
import history from 'history';
import StateList from './../../components/StateList/StateList';

import colors from './../../utils/colors';
import stateList from './../../fixtures/main.json';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  _renderStates({item}) {
    return (
      <StateList
        item={item}
        id={item.key}
        title={item.name}
      />
    );
  }

  render() {
    const { name, party } = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          data={stateList.states}
          keyExtractor={item => item.id}
          renderItem={this._renderStates.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  item: {
    color: colors.foreground,
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