import React, { PureComponent } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from './../../utils/colors';

class TriviaLevelCard extends PureComponent {
  _onPress() {
    const { item, onPressCard } = this.props;

    // Call parent function and send in item
    onPressCard(item);
  }

  getCardColor() {
    const { item, party } = this.props;

    if (item.completed) {
      if (item.won) {
        return { color: colors[party] };
      } else if (party === 'republican') {
        return { color: colors.democratic };
      } else {
        return { color: colors.republican };
      }
    } else {
      return { color: colors.background };
    }
  }

  render() {
    const { item, party } = this.props;

    return (
      <TouchableOpacity
        style={[styles.container, { flexBasis: `${100 / item.size}%` },(item.completed)
          ? { backgroundColor: colors.lightgray } : { backgroundColor: colors[party] }
        ]}
        onPress={this._onPress.bind(this)}>
        <View>
          <Text
            style={[styles.title, this.getCardColor() ]}>{item.points}</Text>
          <Text style={[styles.description, item.completed && { color: colors.gray }]}>Points</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    justifyContent: 'center',
    alignItems: 'center',
    flexBasis: '100%',
    padding: 16,
    marginBottom: 10,
  },
  title: {
    color: colors.background,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
  description: {
    color: colors.lightgray,
    textAlign: 'center',
    fontSize: 14,
  },
});

export default TriviaLevelCard;
