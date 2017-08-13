import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { withRouter } from 'react-router-native';
import { connect } from 'react-redux';
import colors from './../../utils/colors';

class TabBar extends Component {
  tabIcons = [];
  tabTitle = [
    'Home',
    'Me',
  ];

  componentDidMount() {
    // this._listener = this.props.scrollValue.addEventListener(this.setAnimationValue);
  }

  setAnimationValue({value}) {
    this.tabIcons.forEach((icon, index) => {
      const progress = Math.min(1, Math.abs(value - index));
      icon.setNativeProps({
        style: { color: this.iconColor(progress) },
      });
    });
  }

  iconColor(progress) {
    // betweed x and 204
    const red = 59 + (204 - 59) * progress;
    const green = 89 + (204 - 89) * progress;
    const blue = 152 + (204 - 152) * progress;

    return `rgb(${red}, ${green}, ${blue})`;
  }

  render() {
    const { activeTab, goToPage, party, style, tabs } = this.props;

    return (
      <View style={[styles.bar, style]}>
        {
          tabs.map((tab, index) => {
            console.log(tab);
            return (
              <TouchableOpacity key={tab} style={styles.tab} onPress={() => goToPage(index)}>
                <Icon
                  name={tab}
                  size={28}
                  color={(activeTab === index) ? colors[party] : colors.gray}
                  ref={(icon) => { this.tabIcons[index] = icon; }}
                />
                <Text
                  style={[styles.title, { color: (activeTab === index) ? colors[party] : colors.gray }]}>
                  {this.tabTitle[index]}
                </Text>
              </TouchableOpacity>
            );
          })
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    paddingBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 12,
  },
  bar: {
    height: 50,
    flexDirection: 'row',
    paddingTop: 5,
    backgroundColor: colors.light,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
});

const mapStateToProps = state => {
  return {
    party: state.player.party,
  };
};

export default withRouter(connect(mapStateToProps)(TabBar));
