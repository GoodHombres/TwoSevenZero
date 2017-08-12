import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, TouchableOpacity, StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';
import { Link, Redirect, withRouter } from 'react-router-native';
import { setName, setParty } from './../../actions/player';
import { history } from 'history';

import ButtonLink from './../../components/ButtonLink/ButtonLink';

class Start extends Component {
  render() {
    const { name, party, chooseParty, enterName } = this.props;

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
                style={[styles.democratContainer, (party === 'democrat') && styles.democratContainerFill]}
                onPress={() => chooseParty('democrat')}
              >
                <Text style={[styles.party, (party !== 'democrat') && styles.partyDemocrat]}>Democrat</Text>
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
            <ButtonLink to={'/'} disabled={(!name || !party)}>
              Begin Campaign
            </ButtonLink>
          </View>
        </View>
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#b062ea',
    width: '100%',
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    color: '#e4e4e4',
    marginTop: 20,
    fontSize: 24,
  },
  content: {
    alignItems: 'center',
    maxWidth: 500,
    width: '90%',
    margin: 'auto',
  },
  instructions: {
    textAlign: 'left',
    fontSize: 18,
    width: '100%',
    marginTop: 40,
  },
  inputContainer: {
    marginTop: 20,
    width: '100%',
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
  partyContainer: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  democratContainer: {
    borderColor: '#5480f1',
    borderWidth: 2,
    flex: 1,
  },
  republicanContainer: {
    borderColor: '#e74c3c',
    borderWidth: 2,
    flex: 1,
  },
  democratContainerFill: {
    backgroundColor: '#5480f1',
  },
  republicanContainerFill: {
    backgroundColor: '#e74c3c',
  },
  party: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
    padding: 10,
  },
  democrat: {
    backgroundColor: '#5480f1',
  },
  republican: {
    backgroundColor: '#e74c3c',
  },
  partyDemocrat: { color: '#5480f1' },
  partyRepublican: { color: '#e74c3c' },
});

const mapStateToProps = state => {
  return {
    name: state.player.name,
    party: state.player.party,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    enterName: name => {
      dispatch(setName(name));
    },
    chooseParty: party => {
      dispatch(setParty(party));
    },
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Start));
