import React, { Component } from 'react';
import { Animated, StyleSheet, View } from 'react-native';

class AnimatedRoute extends Component {
  state = {
    previousChildren: null,
  }

  componentWillReceiveProps(nextProps) {
    const navigatingToParent = nextProps.atParent && !this.props.atParent;
    const animationEnded = this.props.animating && !nextProps.animating;

    if (navigatingToParent) {
      this.setState({
        previousChildren: this.props.children,
      });
    } else if (animationEnded) {
      this.setState({
        previousChildren: null,
      });
    }
  }

  render() {
    const { anim, children } = this.props;
    const { previousChildren } = this.state;

    return (
      <Animated.View style={styles.transition}>
        { previousChildren || children }
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  transition: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: anim.interpolate({
      inputRange: [0, 1],
      outputRange: [20, 0],
    }),
    opacity: anim.interpolate({
      inputRange: [0, 0.75],
      outputRange: [0, 1],
    }),
  },
});
