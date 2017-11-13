import styles from '../theme/theme.js';

import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

class Header extends Component {
  render() {
    return (
      <View>
        <View style={styles.header}>
          <Text>{this.props.title}</Text>
        </View>
        <View style={styles.line} />
      </View>
    );
  }
}

module.exports = Header;