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

export default class ProjectLanding extends Component {

    constructor(props) {
        super(props);
                
        this.state = {
          loaded: true
        };
    }
    
    render() {
      const { navigate } = this.props.navigation;
      return (
        <View style={styles.container}>
          <Header text="Project - {{}}" loaded={this.state.loaded} />
          <View style={styles.body}>
          
            <Button
              text="Add Time ?"
              onpress={() => navigate('LogTime')}
              button_styles={styles.primary_button}
              button_text_styles={styles.primary_button_text} />
          
            <Button
              text="View/Edit Time?"
              onpress={() => navigate('ViewTime')}
              button_styles={styles.primary_button}
              button_text_styles={styles.primary_button_text} />
            
            <Button
              text="Return.."
              onpress={()=> { navigate.goBack() }}
              button_styles={styles.transparent_button}
              button_text_styles={styles.transparent_button_text} />
                            
          </View>            
        </View>
      );
    }
}

AppRegistry.registerComponent('projects', () => projects);