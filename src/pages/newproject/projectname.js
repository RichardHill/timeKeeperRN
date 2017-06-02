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

import Button from '../../components/button';
import Header from '../../components/header';
import styles from '../../styles/common-styles.js';
import Firebase, { auth } from 'firebase';

export default class ProjectAddUsers extends Component {

  constructor(props){
    super(props);
          
    this.state = {
      loaded: false,
      projectName: '',
    }
  }

  componentWillMount(){
    //Here we should preload a list of users for the user to select from.
    //User auth to get the list of users we have in the system.
  }
  
  componentDidMount() {
    //Here we know that the component is ready to rock!
    this.state.loaded = true;
  }

  render(){
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Header text="Give your project a name..." loaded={this.state.loaded} />  
        <View style={styles.body}>
        {
            <View style={styles.body}>
              <View style={page_styles.email_container}>
              </View>
              <Text style={page_styles.email_text}>Please enter a name for your project!</Text>
              <TextInput 
                placeholder={"Project Name..."}
                style={{height: 40,borderWidth: 1, margin: 10, paddingLeft: 5}}
                autoCapitalize = 'none'
                onChangeText={(text) => this.setState({projectName: text})}
                value={this.state.projectName}>
              </TextInput>
              <Button
                  text="Next"
                  onpress={() => navigate('WhatIsProjectFor',this.state)}
                  button_styles={styles.primary_button}
                  button_text_styles={styles.primary_button_text} />
            </View>
        }
        </View>
      </View>
    );
  }  
}  

AppRegistry.registerComponent('ProjectAddUsers', () => ProjectAddUsers);

const page_styles = StyleSheet.create({
  email_container: {
    padding: 20
  },
  email_text: {
    fontSize: 18
  }
  
});
