import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Alert, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { push } from './../../actions/mainNavigation';
import StateList from './../../components/StateList/StateList';
import colors from './../../utils/colors';

class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: '270',
  });

  constructor(props) {
    super(props);
  }

  onStatePress(state) {
    const { goTo } = this.props;
    switch (state.level.type) {
      case 'trivia':
        goTo('TriviaState', { state });
        break;
      default:
          Alert.alert('Unknown level type.');
        break;
    }
  }

  _renderStates({item}) {
    return (
      <StateList
        item={item}
        onPressState={this.onStatePress.bind(this)}
      />
    );
  }

  render() {
    const { name, party, electoralMap } = this.props;
    console.log(electoralMap);
    return (
      <View style={styles.container}>
        <FlatList
          data={electoralMap.states}
          renderItem={this._renderStates.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },
  item: {
    color: colors.foreground,
  },
});

const mapStateToProps = state => {
  return {
    name: state.candidate.name,
    party: state.candidate.party,
    electoralMap: state.election,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    goTo: (page, params = {}) => dispatch(push(page, params)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
