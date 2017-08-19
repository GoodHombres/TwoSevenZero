import React, { Component } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import TriviaLevelCard from './../../components/TriviaLevelCard/TriviaLevelCard';
import Scoreboard from './../../components/Scoreboard/Scoreboard';
import { pop, push } from './../../actions/mainNavigation';
import colors from './../../utils/colors';

class TriviaState extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.state.name,
  });

  _onPressItem(item) {
    const { goTo, navigation } = this.props;
    const { state } = navigation.state.params;

    if (item.completed) {
      let message = '';

      if (item.won) {
        message = `This district has finished counting votes. Your poll numbers increased by ${item.points}%!`
      } else {
        message = `This district has finished counting votes. Unfortunetly, your opponent's poll numbers increased by ${item.points}%.`
      }

      // Show alert
      Alert.alert('District completed', message);
    } else {
      console.log('GOTO LEVEL');
      // Not complete, go to trivia level
      goTo('TriviaLevel', { district: item, state: state });
    }
  }

  _renderItems(item) {
    const { party } = this.props;

    return (
      <TriviaLevelCard
        item={item}
        party={party}
        key={item.key}
        onPressCard={this._onPressItem.bind(this)}
      />
    );
  }

  render() {
    const { states, party, navigation } = this.props;
    const { districts } = navigation.state.params.state.level;

    return (
      <View style={styles.container}>
        <Scoreboard
          party={party}
          state={navigation.state.params.state}
        />
        <View style={styles.districtContainer}>
        { districts.map(district => this._renderItems(district)) }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },
  districtContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
});

const mapStateToProps = state => {
  return {
    party: state.candidate.party,
    name: state.candidate.name,
    states: state.election,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    goBack: () => dispatch(pop()),
    goTo: (page, params = {}) => dispatch(push(page, params)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TriviaState);
