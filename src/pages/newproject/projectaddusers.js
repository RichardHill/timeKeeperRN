'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
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
      projectName : props.navigation.state.params.projectName,  
      projectDescription: props.navigation.state.params.projectDescription,  
      usersInProject: [],
    }
  }

  componentWillMount(){
    //Here we should preload a list of users for the user to select from.
    //User auth to get the list of users we have in the system.
  }

  render(){
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Header text="Add Users..." loaded={this.state.loaded} />  
        <View style={styles.body}>
        {
            <View style={styles.body}>
              <View style={page_styles.email_container}>
                <Text style={page_styles.email_text}>This is where we will add users - a simple list box with email addresses</Text>
              </View>
              <Button
                  text="Next"
                  onpress={() => navigate('NewProjectCompleted',this.state)}
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
