'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  TextInput,
  View
} from 'react-native';

import Button from '../components/button';
import Header from '../components/header';
import Firebase, { auth } from 'firebase';
import styles from '../styles/common-styles.js';

export default class signup extends Component {

  constructor(props){
    super(props);
      
    this.state = {
      loaded: true,
      email: 'richardhill@hotmail.com',
      password: 'indurain'
    };
  }
  
  static navigationOptions = {
    title: "Sign Up",
  };
  
  signup(){

    this.setState({
      loaded: false
    });

    auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then(function(success) {
    
      alert('Your account was created!');
    
    }).catch(function(error) {

      if(error){
        switch(error.code){

          case "auth/email-already-in-use":
            alert("The new user account cannot be created because the email is already in use.");
          break;

          case "auth/invalid-email":
            alert("The specified email is not a valid email.");
          break;

          default:
            alert("Error creating user:");
        }
      }   
    });

      this.setState({
        email: '',
        password: '',
        loaded: true
      });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        
        <View style={styles.body}>
          <TextInput
            style={{height: 40,borderWidth: 1, margin: 10, paddingLeft: 5}}
            autoCapitalize = 'none'
            onChangeText={(text) => this.setState({email: text})}
            value={this.state.email}
            placeholder={"Email"}
          />
          
          <TextInput
            style={{height: 40,borderWidth: 1, margin: 10, paddingLeft: 5}}
            autoCapitalize = 'none'
            onChangeText={(text) => this.setState({password: text})}
            value={this.state.password}
            placeholder={"Password"}
            secureTextEntry={true}
          />  

          <Text>No account?</Text>
          <Button
            text="Register"
            onpress={this.signup.bind(this)}
            button_styles={styles.primary_button}
            button_text_styles={styles.primary_button_text} />

          <Button
            text="Got an Account?"
            onpress={() => navigate('Login')}
            button_styles={styles.transparent_button}
            button_text_styles={styles.transparent_button_text} />
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('signup', () => signup);

// <TextInput
//   style={styles.textinput}
//   onChangeText={(text) => this.setState({email: text})}
//   value={this.state.email}
//   placeholder={"Email Address"}
// />
// <TextInput
//   style={styles.textinput}
//   onChangeText={(text) => this.setState({password: text})}
//   value={this.state.password}
//   secureTextEntry={true}
//   placeholder={"Password"}
// />
