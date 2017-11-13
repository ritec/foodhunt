import firebase from '../config/firebase';
import styles from '../theme/theme.js';

import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

class Home extends Component {
  render() {
    return (
      <View style={styles.container} >
        <Text>Home</Text>
      </View>
    );
  }
}

export default Home;