import React, { Component } from 'react';
import { ActivityIndicator, Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import TriviaLevelCard from './../../components/TriviaLevelCard/TriviaLevelCard';
import Scoreboard from './../../components/Scoreboard/Scoreboard';
import { pop, push } from './../../actions/navigation';
import { removeTrivia } from './../../actions/trivia';
import colors from './../../utils/colors';
import getRandomArrayIndex from './../../utils/getRandomArrayIndex';
import shuffle from './../../utils/shuffle';

class TriviaLevel extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'District Trivia',
  });

  constructor(props) {
    super(props);

    this.state = {
      locked: false,
      trivia: null,
      responses: [],
    };

    this.getRandomTrivia = this.getRandomTrivia.bind(this);
  }

  componentDidMount() {
    const { navigation, removeTrivia } = this.props;
    const { district } = navigation.state.params;
    const trivia = this.getRandomTrivia(district.difficulty);

    removeTrivia(district.difficulty, trivia.id);

    // Set trivia
    this.setState({ trivia, responses: shuffle(trivia.responses) });
  }

  getRandomTrivia(difficulty) {
    const { triviaList } = this.props;

    // Get random index
    const index = getRandomArrayIndex(triviaList[difficulty].length);

    // Return trivia we are going to use
    return triviaList[difficulty][index];
  }

  onPressResponse(response) {
    console.log(`Response is correct? ${response.correct}`);

    // If response is correct
    // Otherwise
    this.setState({
      locked: true,
    });
  }

  renderResponse(response, index) {
    const { party } = this.props;
    const { locked } = this.state;

    return (
      <TouchableOpacity
        disabled={locked}
        style={[styles.choice, { backgroundColor: (locked) ? colors.light :  colors[party] }]}
        key={index}
        onPress={() => { this.onPressResponse(response) }}
      >
        <Text style={[styles.choiceText, (locked) ? { color: (response.correct) ? colors.green : colors.red }: {} ]}>{ response.text }</Text>
      </TouchableOpacity>
    );
  }

  render() {
    const { trivia, responses } = this.state;

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  triviaContainer: {
    alignSelf: 'center',
    width: '90%',
    maxWidth: 500,
  },
  promptContainer: {
    padding: 20,
    marginTop: 20,
    borderRadius: 4,
    maxHeight: 250,
    backgroundColor: colors.light,
  },
  category: {
    fontSize: 14,
    color: colors.gray,
    textAlign: 'center',
  },
  question: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
  },
  choicesContainer: {
    marginTop: 60,
  },
  choice: {
    padding: 20,
    borderRadius: 4,
    marginBottom: 20,
    backgroundColor: colors.light,
  },
  choiceText: {
    fontSize: 18,
    textAlign: 'center',
    color: colors.background,
  },
});

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
    removeTrivia: (difficulty, id) => dispatch(removeTrivia(difficulty, id)),
    goBack: () => dispatch(pop()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TriviaLevel);
