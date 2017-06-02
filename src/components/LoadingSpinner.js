'use strict';
import React, { Component } from 'react';
import {
  View,
  ActivityIndicator
} from 'react-native';

export default class LoadingSpinner extends Component {
  render() {
    const { display } = this.props;

    const loader = (
      <View style={ styles.spinnerContainer }>
        <ActivityIndicator style={ styles.spinner } size="large" color="rgb(89, 143, 219)"/>
      </View>
    );

    return display ? ( loader ) : null;
  }
}

const styles = {
  spinnerContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'column'
  },
  spinner: {
    flex: 1
  }
};
