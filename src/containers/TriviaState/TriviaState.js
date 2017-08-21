import React, { Component } from 'react';
import { ActivityIndicator, Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import TriviaLevelCard from './../../components/TriviaLevelCard/TriviaLevelCard';
import Scoreboard from './../../components/Scoreboard/Scoreboard';
import { pop, push } from './../../actions/mainNavigation';
import colors from './../../utils/colors';

class TriviaState extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title,
  });

  constructor(props) {
    super(props);

    // Hold current U.S. State in our state
    this.state = {
      state: null,
    };
  }

  componentDidMount() {
    const { navigation, states } = this.props;
    const { stateId } = navigation.state.params;

    // Get the current U.S. state by its key
    const state = states.states.filter((s) => s.key === stateId)[0];

    // Set U.S. state
    this.setState({state});
  }

  componentDidUpdate() {
    const { state } = this.state;
    const { states } = this.props;

    // Get the new state
    const newState = states.states.filter((s) => s.key === state.key)[0];

    // If new U.S. state is different from old U.S. state
    if (newState !== state) {
      // Update U.S. state
      this.setState({ state: newState });
    }
  }

  _onPressItem(item) {
    const { goTo } = this.props;
    const { state } =this.state;

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
      // Not complete, go to trivia level
      goTo('TriviaLevel', { districtId: item.key, stateId: state.key });
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
    const { state } = this.state;

    // If state load page otherwise load spinner
    return (state) ? (
      <View style={styles.container}>
        <Scoreboard
          party={party}
          state={state}
        />
        <View style={styles.districtContainer}>
        { state.level.districts.map(district => this._renderItems(district)) }
        </View>
      </View>
    ) : (<ActivityIndicator />);
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
