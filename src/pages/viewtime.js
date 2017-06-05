'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  TextInput,
  View,
  ListView
} from 'react-native';

import Button from '../components/button';
import Header from '../components/header';
import LogTime from './logtime';
import Firebase, { auth } from 'firebase';

import styles from '../styles/common-styles.js';

export default class ViewTime extends Component {

  constructor(props){
    super(props);
        
    this.state = {
      loaded: true,
      email: '',
      password: '',
      listViewSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2 }),
      dataSource: null
    };
  }
  
  componentWillMount() {
    
    //Go and get our data.
    const data = [];
    var that = this;

    //Get the current user Id.
    var theUserId = Firebase.auth().currentUser.uid;

    //Query the database for all tasks that this uses has logged.
    var listOfTasks = Firebase.database().ref('projects').orderByChild("projectOwner")
    .startAt(theUserId)
    .endAt(theUserId)
    .once('value').then(function(snapshot) { 
    
      var listData = that.generateRows(snapshot);
      
      that.setState({dataSource : that.state.dataSource.cloneWithRows(listData)});
    
    });

    // Firebase.ref('/employers/soverign/employees/' + 'helenhill').once('value').then(function(snapshot) {
            
    //   // Object.keys(listOfTimeEnteries).forEach(function(key) {
    //   //     data.push(listOfTimeEnteries[key]);          
    //   // });
  
    //   that.setState({dataSource : that.state.listViewSource.cloneWithRows(snapshot.val())});
    // });
    
}
  
  viewtime(){

      console.log('View Time....');
      
      this.setState({
        email: '',
        password: '',
        loaded: true
      });
    
  }
  
  render() {
    
    this.state.dataSource;
    
      if (this.state.dataSource === null) {
          return <Text>Loading ...</Text>;
      } else {
        return (<View style={styles.container}>
        <Header text="Time - Summary" loaded={this.state.loaded} />
        <View style={styles.body}>
        
        <ListView style={{borderWidth: 1}}
             dataSource={this.state.dataSource}
             renderRow={(rowData) => <Text style={styles.listview_rowitem}>{`${rowData.date} - ${rowData.task_description.substring(0,30)} - ${rowData.duration_hours}hrs:${rowData.duration_minutes}mins`}</Text>}
           />
            
        <Button
          text="Return.."
          onpress={this.gotoLanding.bind(this)}
          button_styles={styles.transparent_button}
          button_text_styles={styles.transparent_button_text} />
          
        </View>
      </View>
    );
  }
  }
}

AppRegistry.registerComponent('viewtime', () => viewtime);
