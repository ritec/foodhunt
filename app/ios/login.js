import firebase from '../config/firebase';
import register from './register.js';
import home from './home.js';
import styles from '../theme/theme.js';

import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  AlertIOS,
  TouchableOpacity
} from 'react-native';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      email: '',
      password: '' 
    };
  }

  login(){
    var state = this;
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(function() {
      // Login successful.
      state.props.navigator.push({ component: home });
    }, function(error) {
      // An error happened.
      AlertIOS.alert(error.message)
    });
  }

  register(){
    this.props.navigator.push({ component: register });
  }

  render() {
    return (
      <View style={[styles.container, styles.center]} >
        <Text style={ styles.logo } >Login</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          onChangeText={(email) => this.setState({email: email})}
          value={this.state.email}/>
        <View style={styles.line} />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(password) => this.setState({password: password})}
          value={this.state.password}/>
        <View style={styles.line} />
        <TouchableOpacity style={styles.btn} onPress={this.login.bind(this)}>
          <Text style={ styles.text }>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.register.bind(this)}>
          <Text style={ styles.text }>Register</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Login;