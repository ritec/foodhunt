import styles from "../theme/theme.js";

import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";

class Header extends Component {
  render() {
    return (
      <View>
        <View style={styles.header}>
          <TouchableOpacity onPress={this.props.left} style={styles.left}>
            <Text style={styles.text}>{this.props.leftText}</Text>
          </TouchableOpacity>
          <Text style={styles.text}>{this.props.title}</Text>
          <TouchableOpacity style={styles.right}>
            <Text style={styles.text} />
          </TouchableOpacity>
        </View>
        <View style={styles.line} />
      </View>
    );
  }
}

module.exports = Header;
