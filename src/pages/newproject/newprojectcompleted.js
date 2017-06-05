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
import Firebase from 'firebase';

export default class NewProjectCompleted extends Component {

  constructor(props){
    super(props);
      
    this.state = {
      loaded: false,
      projectName: props.navigation.state.params.projectName,  
      projectDescription: props.navigation.state.params.projectDescription,
      projectMembers : props.navigation.state.params.projectUsers,  
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
  
  createProject() {
    
        //Store user email.
        var user = Firebase.auth().currentUser;

        //TEMP FIX - add in the currnet user as a member on the project.
        this.state.projectMembers = [user.uid];

        // A post entry.
        var projectData = {
            name: this.state.projectName,
            description: this.state.projectDescription,
            users: this.state.projectMembers,
            projectOwner: user.uid,
            projectTasks: null,
        };
        
        // Get a key for a new Project.
        var newProjectKey = Firebase.database().ref().child('projects').push().key;
        
        //Add it into firebase!
        Firebase.database().ref('projects/' + newProjectKey).update(projectData);
        
  }

  render(){
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Header text="Congratulations!!" loaded={this.state.loaded} />  
        <View style={styles.body}>
        {
            <View style={styles.body}>
              <View style={page_styles.email_container}>
              </View>
              <Text style={page_styles.email_text}>Your project is ready to run! Go add some work and report on it!</Text>
              <Button
                  text="Ok"
                  onpress={() => this.createProject()}
                  button_styles={styles.primary_button}
                  button_text_styles={styles.primary_button_text} />
            </View>
        }
        </View>
      </View>
    );
  }  
}  

AppRegistry.registerComponent('NewProjectCompleted', () => NewProjectCompleted);

const page_styles = StyleSheet.create({
  email_container: {
    padding: 20
  },
  email_text: {
    fontSize: 18
  }
  
});
