import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { withRouter } from 'react-router-native';
import { setName, setParty } from './../../actions/player';

// Local components
import ButtonLink from './../../components/ButtonLink/ButtonLink';

import css from './styles';

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

const styles = StyleSheet.create(css);

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
