'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  AsyncStorage,
  ListView,
  TouchableHighlight,
} from 'react-native';

import Button from '../../components/button';
import Header from '../../components/header';
import styles from '../../styles/common-styles.js';
import Firebase, { auth } from 'firebase';

export default class ChooseExistingProject extends Component {

  constructor(props){
    super(props);
    
    var listSourceDS = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2 });
      
    this.state = {
      loaded: false,
      dataSource: listSourceDS,
      projectID: null,
      projectName : null,
    }
  }

  componentWillMount(){
    
    var that = this;
    
    //Get the lists of projects that this user is involved in.
    var theUserId = Firebase.auth().currentUser.uid;
    
    //Just get all the projects that this user has created for now.
    //Go through the list of projects and filter on projectOwner
    var listOfProjects = Firebase.database().ref('projects').orderByChild("projectOwner")
    .startAt(theUserId)
    .endAt(theUserId)
    .once('value').then(function(snapshot) { 
    
      var listData = that.generateRows(snapshot);
      
      that.setState({dataSource : that.state.dataSource.cloneWithRows(listData)});
    
    });

  }
  
  generateRows(snapshot) {
  
    var listViewData = [];
    
    let index = 0;
    snapshot.forEach((aProject) => {
      
      var projectValues = aProject.val();
      listViewData.push({ name: projectValues.name, description: projectValues.description, index: index, id: aProject.key });
      index ++;
      
    });
    
    return listViewData;    
  }
  
  _onProjectPressButton(rowData) {
    //Now store the project uiID and navigate to the list of tasks for the project.

    this.state.projectID = rowData.id;
    this.state.name = rowData.name;

    this.setState({projectID: rowData.id});
    this.setState({projectName: rowData.name});

    this.props.navigation.navigate('ProjectLanding',this.state);
  }

  render(){

    return (
      <View style={styles.container}>
        <Header text="Choose project..." loaded={this.state.loaded} />  
        <View style={styles.body}>
        {
            <View style={styles.body}>
              <View>
                <Text style={page_styles.email_text}>Please select the project you want to record time for...</Text>
                <ListView style={{borderWidth: 1}}
                     dataSource={this.state.dataSource}
                     renderRow={(rowData) => 
                       <TouchableHighlight onPress={()=>this._onProjectPressButton(rowData)}>
                       <Text style={styles.listview_rowitem}>{`${rowData.name} - ${rowData.description}`}</Text>
                       </TouchableHighlight>  }
                   />
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
