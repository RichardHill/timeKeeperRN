'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  AsyncStorage
} from 'react-native';

import Button from '../components/button';
import Header from '../components/header';
import Firebase, { auth } from 'firebase';
import Signup from './signup';

import styles from '../styles/common-styles.js';

export default class login extends Component {

  constructor(props){
    super(props);
  
    this.state = {
      email: 'richardhill@hotmail.com',
      password: 'indurain',
      loaded: false
    }
  }

  static navigationOptions = {
    title: "Login",
  };

  render(){
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        
        <View style={{flex: 2,
            flexDirection: 'column',
            justifyContent: 'center'}}>
            
            <Text style={{textAlign: 'center',fontSize:15, paddingBottom: 20}} >Please login...</Text>  
                   
            <TextInput
              style={{height: 45,borderWidth: 1, borderRadius:5, margin: 10, paddingLeft: 5}}
              autoCapitalize = 'none'
              onChangeText={(text) => this.setState({email: text})}
              value={this.state.email}
              placeholder={"Email"}
            />
            
            <TextInput
              style={{height: 40,borderWidth: 1,borderRadius:5, margin: 10, paddingLeft: 5}}
              autoCapitalize = 'none'
              secureTextEntry={true}
              onChangeText={(text) => this.setState({password: text})}
              value={this.state.password}
              placeholder={"Password"}
            /> 
            
          </View> 
             
          <View style={styles.buttonsContainer}>
          
          <Button
            text="New here?"
            onpress={() => navigate('Signup')}
            button_styles={styles.transparent_button}
            button_text_styles={styles.transparent_button_text} />
            
            <Button
              text="Login"
              onpress={this.login.bind(this)}
              button_styles={styles.primary_button}
              button_text_styles={styles.primary_button_text} />
          
          </View>
      </View>
    );
  }

  login(){
        
    var that = this;
    
    () => setState({ loaded: false });

    console.log("Username and password are -:" + this.state.email + ' ' + this.state.password);

    auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(function(user){
    
    console.log("User " + user.email + " logged in");
    
    () => setState({ loaded: true });
  
    AsyncStorage.setItem('user_data', JSON.stringify(user));
      that.props.navigation.navigate('Projects');
     }).catch(function(error) {
      if(error){
        alert('Login Failed. Please try again' + error);
      } 
    });
  }
}

AppRegistry.registerComponent('login', () => login);
