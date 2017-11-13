import firebase from '../config/firebase';
import Header from '../components/header';
import styles from '../theme/theme.js';
import post from './post';
import Dimensions from 'Dimensions';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image
} from 'react-native';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      food: []
    }
  }

  componentDidMount(){
    this.getFood()
  }

  getFood() {
    firebase.database().ref('food').once('value', (snap) => {
      var items = [];
      snap.forEach((child) => {
        var item = child.val();
        items.push(item);  
      });
      items = items.reverse();
      this.setState({ food: items });
    });
  }

  left(){
    this.props.navigator.push({ component: post });
  }

  render() {
    return (
      <View style={styles.container} >
        <Header title="Food Hunt" left={this.left.bind(this)} leftText={'Post +'}/>
        <ScrollView>
          {Object.keys(this.state.food).map((key) => {
            return (
              <View >
                <Image source={{uri: this.state.food[key].image}}  style={{ width: deviceWidth, height: (deviceWidth*.5)}}/>
                <Text style={styles.text}>{this.state.food[key].place}</Text>
              </View>
            )
          })}
        </ScrollView>
      </View>
    );
  }
}

export default Home;