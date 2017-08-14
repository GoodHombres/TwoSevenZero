import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Button,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { setName, setParty } from './../../actions/player';
import { setRoot } from './../../actions/navigation';

// Local components
import ButtonLink from './../../components/ButtonLink/ButtonLink';

import css from './styles';

class Start extends Component {
  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);

    this.beginGame = this.beginGame.bind(this);
  }

  beginGame() {
    const { startGame } = this.props;

    startGame();
  }

  render() {
    const { name, party, chooseParty, enterName, startGame } = this.props;

    return (
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          {/* Title */}
          <View style={[styles.header, (party) && styles[party]]}>
            <Text style={styles.title}>270</Text>
            <Text style={styles.subtitle}>Race to the White House</Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.instructions}>Enter your candidate name:</Text>
            {/* Name Input */}
            <View style={styles.inputContainer}>
              <TextInput
                value={name}
                style={styles.input}
                placeholder={'Name'}
                onChangeText={(text) => enterName(text)}
              />
            </View>
            <Text style={styles.instructions}>Choose a party:</Text>
            <View style={styles.partyContainer}>
              {/* Democrat */}
              <TouchableOpacity
                style={[styles.democratContainer, (party === 'democratic') && styles.democratContainerFill]}
                onPress={() => chooseParty('democratic')}
              >
                <Text style={[styles.party, (party !== 'democratic') && styles.partyDemocrat]}>Democrat</Text>
              </TouchableOpacity>
              {/* Republican */}
              <TouchableOpacity
                style={[styles.republicanContainer, (party === 'republican') && styles.republicanContainerFill]}
                onPress={() => chooseParty('republican')}
                >
                <Text style={[styles.party, (party !== 'republican') && styles.partyRepublican]}>Republican</Text>
              </TouchableOpacity>
            </View>
            {/* Submit */}
            <ButtonLink disabled={(!name || !party)} onPressButton={this.beginGame}>
              Begin Campaign
            </ButtonLink>
          </View>
        </View>
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create(css);

const mapStateToProps = state => {
  return {
    name: state.player.name,
    party: state.player.party,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    startGame: () => {
      dispatch(setRoot('Main'));
    },
    enterName: name => {
      dispatch(setName(name));
    },
    chooseParty: party => {
      dispatch(setParty(party));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Start);
