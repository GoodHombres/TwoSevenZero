import React, { Component } from 'react';
import { ActivityIndicator, Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';

// Components
import TriviaLevelCard from './../../components/TriviaLevelCard/TriviaLevelCard';
import Scoreboard from './../../components/Scoreboard/Scoreboard';

// Actions
import { pop, push } from './../../actions/navigation';
import { removeTrivia } from './../../actions/trivia';
import {
  resetMap,
  winDistrict,
  increaseScore,
  completeDistrict,
  increaseOpponentScore,
} from './../../actions/electoral-map';
import {
  increaseElectoralVotes,
  increaseOpponentElectoralVotes,
} from './../../actions/candidate';

// Utility
import colors from './../../utils/colors';
import getRandomArrayIndex from './../../utils/getRandomArrayIndex';
import shuffle from './../../utils/shuffle';

// Styles
import { css } from './styles';

class TriviaLevel extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'District Trivia',
  });

  constructor(props) {
    super(props);

    this.state = {
      state: null,
      trivia: null,
      district: null,
      responses: null,
    };

    this.getRandomTrivia = this.getRandomTrivia.bind(this);
  }

  componentDidMount() {
    const { states, navigation, removeTrivia } = this.props;
    const { stateId, districtId } = navigation.state.params;

    // Get the state from props using navigation param
    const state = states.states.filter((s) => s.key === stateId)[0];

    // Get the district from the state using navigation param
    const district = state.level.districts.filter((d) => d.key === districtId)[0];

    // Get random trivia based on district difficulty
    const trivia = this.getRandomTrivia(district.difficulty);

    // Shuffle the responses
    const responses = shuffle(trivia.responses);

    // Remove trivia from our list, so we don't use it again
    removeTrivia(district.difficulty, trivia.id);

    // Set trivia
    this.setState({
      state,
      trivia,
      district,
      responses,
    });
  }

  componentDidUpdate() {
    const { states } = this.props;
    const { state, district } = this.state;

    // Get state from new props
    const newState = states.states.filter((s) => s.key === state.key)[0];

    // Get district from new props
    const newDistrict = newState.level.districts.filter((d) => d.key === district.key)[0];

    // If district is updated
    if (newDistrict !== district) {
      // Update district
      this.setState({ district: newDistrict });
    }
  }

  getRandomTrivia(difficulty) {
    const { triviaList } = this.props;

    // Get random index
    const index = getRandomArrayIndex(triviaList[difficulty].length);

    // Return trivia we are going to use
    return triviaList[difficulty][index];
  }

  onPressResponse(response) {
    const { state, district } = this.state;
    const {
      winState,
      loseState,
      winDistrict,
      increaseScore,
      completeDistrict,
      increaseOpponentScore, } = this.props;

    // If response if correct
    if (response.correct) {
      // Set U.S. state as won
      winDistrict(state.key, district.key);
      // Increase player score by district points
      increaseScore(state.key, district.points);

      // If current player score plus points > 50, then player wins state electoral votes
      ((state.playerScore + district.points) > 50) && winState(state.electoralVotes);
    } else {
      // Otherwise increase opponent score by district points
      increaseOpponentScore(state.key, district.points);

      // If opponent score surpasses 50 then they win the state's electoral votes
      ((state.opponentScore + district.points) > 50) && loseState(state.electoralVotes);
    }

    // Mark district as completed
    completeDistrict(state.key, district.key);
  }

  renderResponse(response, index) {
    const { party, navigation } = this.props;
    const { district } = this.state;

    return (
      <TouchableOpacity
        key={index}
        disabled={district.completed}
        onPress={() => { this.onPressResponse(response) }}
        style={[styles.choice, { backgroundColor: (district.completed) ? colors.light :  colors[party] }]}
      >
        <Text
          style={[
            styles.choiceText,
            (district.completed) ? { color: (response.correct) ? colors.green : colors.red }: {}
          ]}
        >
          { response.text }
        </Text>
      </TouchableOpacity>
    );
  }

  render() {
    const { trivia, responses } = this.state;

    // If trivia has been retrieved render page otherwise show loading
    return (trivia) ? (
      <View style={styles.container}>
        <ScrollView>
        <View style={styles.triviaContainer}>
          {/* Promp */}
          <ScrollView style={styles.promptContainer}>
            {/* Category */}
            <Text style={styles.category}>{trivia.category}</Text>
            {/* Question */}
            <Text style={styles.question}>{trivia.question}</Text>
          </ScrollView>
          {/* Choices */}
          <View style={styles.choicesContainer}>
            { responses.map((response, index) => this.renderResponse(response, index)) }
          </View>
        </View>
        </ScrollView>
      </View>
    ) : (<ActivityIndicator color={colors.foreground} />);
  }
}

const styles = StyleSheet.create(css);

const mapStateToProps = state => {
  return {
    triviaList: state.trivia,
    party: state.candidate.party,
    name: state.candidate.name,
    states: state.election,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increaseOpponentScore: (stateId, districtId, points) => dispatch(increaseOpponentScore(stateId, districtId, points)),
    increaseScore: (stateId, districtId, points) => dispatch(increaseScore(stateId, districtId, points)),
    completeDistrict: (stateId, districtId) => dispatch(completeDistrict(stateId, districtId)),
    winDistrict: (stateId, districtId) => dispatch(winDistrict(stateId, districtId)),
    removeTrivia: (difficulty, id) => dispatch(removeTrivia(difficulty, id)),
    loseState: (votes) => dispatch(increaseOpponentElectoralVotes(votes)),
    winState: (votes) => dispatch(increaseElectoralVotes(votes)),
    goBack: () => dispatch(pop()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TriviaLevel);
