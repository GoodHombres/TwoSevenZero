import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Alert, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

// Components
import StateList from './../../components/StateList/StateList';

// Actions
import { push } from './../../actions/mainNavigation';

// Utils
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
        goTo('TriviaState', { title: state.name, stateId: state.key });
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
    const { name, party, electoralVotes, electoralMap, rivalElectoralVotes } = this.props;

    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={[styles.header, { backgroundColor: colors[party] }]}>
            <View style={styles.headerBar}>
              <Text style={styles.scoreText}>You: {electoralVotes} / 270</Text>
              <Text style={styles.scoreText}>Rival: {rivalElectoralVotes} / 270</Text>
            </View>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>270</Text>
            </View>
          </View>
          <FlatList
            data={electoralMap.states}
            renderItem={this._renderStates.bind(this)}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },
  header: {
    height: 300,
    width: '100%',
    padding: 20,
    // justifyContent: 'center',
  },
  headerBar: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scoreText: {
    color: colors.background,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.background,
  },
  item: {
    color: colors.foreground,
  },
});

const mapStateToProps = state => {
  return {
    name: state.candidate.name,
    electoralMap: state.election,
    party: state.candidate.party,
    electoralVotes: state.candidate.electoralVotes,
    rivalElectoralVotes: state.candidate.opponentElectoralVotes,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    goTo: (page, params = {}) => dispatch(push(page, params)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
