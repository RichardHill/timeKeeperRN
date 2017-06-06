'use strict';
import React, { Component } from 'react';

import {
    AppRegistry,
    AsyncStorage,
    Text,
    TextInput,
    View
} from 'react-native';

import Button from '../components/button';
import Header from '../components/header';
import NewProject from './newproject/projectname';
import ExistingProject from './existingproject/chooseexistingproject';
import Firebase, { auth } from 'firebase';

import styles from '../styles/common-styles.js';

export default class Projects extends Component {

    constructor(props) {
        super(props);
                
        this.state = {
          loaded: true
        };
    }
    
    static navigationOptions = {
      title: "Projects",
    };


    render() {
      const { navigate } = this.props.navigation;
      return (
        <View style={styles.container}>
  
          <View style={styles.body}>
          
            <Button
              text="New Project ?"
              onpress={() => navigate('ProjectName')}
              button_styles={styles.primary_button}
              button_text_styles={styles.primary_button_text} />
          
            <Button
              text="Existing Project"
              onpress={() => navigate('ChooseExistingProject')}
              button_styles={styles.primary_button}
              button_text_styles={styles.primary_button_text} />
                            
          </View>            
        </View>
      );
    }
}

AppRegistry.registerComponent('projects', () => projects);
