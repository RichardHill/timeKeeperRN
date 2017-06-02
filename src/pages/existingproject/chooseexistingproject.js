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

export default class ChooseExistingProject extends Component {

  constructor(props){
    super(props);
      
    this.state = {
      loaded: false,
    }
  }

  componentWillMount(){
    //Here we should preload a list of projects that the current user is regsitered with
      //Get the current users uid.
      var userID = Firebase.auth().currentUser.uid;

      //Get a list of projects back from firebase.
      var listOfProjects = Firebase.database().ref('projects');

      var aProject = listOfProjects.orderByChild('projectOwner').equalTo(userID);

      aProject.once('value').then((snapshot) => {

          console.log(snapshot.val());

      });

  }

  render(){

    return (
      <View style={styles.container}>
        <Header text="Choose project..." loaded={this.state.loaded} />  
        <View style={styles.body}>
        {
          this.state.user_email &&
            <View style={styles.body}>
              <View style={page_styles.email_container}>
                <Text style={page_styles.email_text}>Please select the project you want to record time for...</Text>
                <ListView
                  dataSource = { this.state.dataSource }
                  renderRow = { (rowData) => <Text> { rowData} </Text> } />
              </View>
              <Button
                  text="Ok"
                  button_styles={styles.primary_button}
                  button_text_styles={styles.primary_button_text} />
            </View>
        }
        </View>
      </View>
    );
  }  
}  

AppRegistry.registerComponent('ChooseExistingProject', () => ChooseExistingProject);

const page_styles = StyleSheet.create({
  email_container: {
    padding: 20
  },
  email_text: {
    fontSize: 18
  }
  
});
