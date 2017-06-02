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

export default class WhatIsProjectFor extends Component {

  constructor(props){
    super(props);
      
    this.state = {
      loaded: false,
      projectName : props.navigation.state.params.projectName,  
      projectDescription: ''
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
        <Header text="Let us know what your project is about..." loaded={this.state.loaded} />  
        <View style={styles.body}>
        {
            <View style={styles.body}>
              <View style={page_styles.email_container}>
              </View>
              <Text style={page_styles.email_text}>Please describe your project.</Text>
              <TextInput 
                placeholder={"Project Description..."}
                style={{height: 40,borderWidth: 1, margin: 10, paddingLeft: 5}}
                autoCapitalize = 'none'
                onChangeText={(text) => this.setState({projectDescription: text})}
                value={this.state.projectDescription}>
              </TextInput>
              <Button
                  text="Next"
                  onpress={() => navigate('ProjectAddUsers',this.state)}
                  button_styles={styles.primary_button}
                  button_text_styles={styles.primary_button_text} />
            </View>
        }
        </View>
      </View>
    );
  }  
}  

AppRegistry.registerComponent('WhatIsProjectFor', () => WhatIsProjectFor);

const page_styles = StyleSheet.create({
  email_container: {
    padding: 20
  },
  email_text: {
    fontSize: 18
  }
  
});
