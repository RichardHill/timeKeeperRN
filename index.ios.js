/**
 * timeKeeper React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Signup from './src/pages/signup';
import Login from  './src/pages/login';
import Projects from './src/pages/projects';
import ProjectName from './src/pages/newproject/projectname';
import WhatIsProjectFor from './src/pages/newproject/whatisprojectfor';
import ProjectAddUsers from  './src/pages/newproject/projectaddusers';
import NewProjectCompleted from './src/pages/newproject/newprojectcompleted';
import ChooseExistingProject from './src/pages/existingproject/chooseexistingproject';
import ProjectLanding from './src/pages/projectlanding';
import LogTime from './src/pages/logtime';
import ViewTime from './src/pages/viewtime';
import Button from './src/components/button';
import commonstyles from './src/styles/common-styles.js';
import Header from './src/components/header';
import Firebase from 'firebase';

class timeKeeper extends Component {

    constructor(props) {
      super(props);
      
      const firebaseConfig = {
        apiKey: "AIzaSyCcKGHc2riqP5S7jarLPQ4gaDkyD_49YsE",
        authDomain: "timekeeper-d6272.firebaseapp.com",
        databaseURL: "https://timekeeper-d6272.firebaseio.com",
        storageBucket: "timekeeper-d6272.appspot.com",
        messagingSenderId: "251914286448",  
      };
      
      console.log('Initialising Firebase...');
      
      this.fbApp = Firebase.initializeApp(firebaseConfig);
      
      this.state = {
        component: null,
        loaded: false
      };
    }
    

  static navigationOptions = {
    title: "Welcome",
  };
  
  render() {
    const { navigate } = this.props.navigation;
          return (
            <View> 
              <View style={commonstyles.buttonsContainer}>
              <Text 
                text="timeKeeper" 
                loaded={this.state.loaded} 
              /> 
                <Button
                   onpress={() => navigate('Login')}
                   text="Login..."
                   button_styles={commonstyles.primary_button}
                   button_text_styles={commonstyles.primary_button_text}
                   />
                <Button
                   onpress={() => navigate('Signup')}
                   text="Signup..."
                   button_styles={commonstyles.primary_button}
                   button_text_styles={commonstyles.primary_button_text}
                   />
               </View>
            </View>
          );
        
      }
    }
    
const timeKeeperApp = StackNavigator({
  Welcome: {screen: timeKeeper },
  Signup: { screen: Signup },
  Login: { screen: Login },
  Projects: {screen: Projects },
  ProjectName: {screen: ProjectName },
  ChooseExistingProject: {screen: ChooseExistingProject },
  WhatIsProjectFor: {screen: WhatIsProjectFor},
  ProjectAddUsers: {screen: ProjectAddUsers},
  NewProjectCompleted: {screen: NewProjectCompleted},
  ViewTime: {screen: ViewTime},
  LogTime: {screen: LogTime},
  ProjectLanding: {screen: ProjectLanding},
});

AppRegistry.registerComponent('timeKeeper', () => timeKeeperApp);





// 'use strict';
// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   Text,
//   View,
//   Navigator,
//   AsyncStorage
// } from 'react-native';
// 
// import Signup from './src/pages/signup';
// import Account from './src/pages/account';
// 
// import Header from './src/components/header';
// 
// import Firebase from 'firebase';
// 
// // const firebaseConfig = {
// //   apiKey: "AIzaSyCcKGHc2riqP5S7jarLPQ4gaDkyD_49YsE",
// //   authDomain: "timekeeper-d6272.firebaseapp.com",
// //   databaseURL: "https://timekeeper-d6272.firebaseio.com",
// //   storageBucket: "timekeeper-d6272.appspot.com",
// //   messagingSenderId: "251914286448",  
// // };
// 
// //const fbApp = Firebase.initializeApp(firebaseConfig);
// 
// import styles from './src/styles/common-styles.js';
// 
// class firebaseAuth extends Component {    
// 
//   constructor(props){
//     super(props);
//     
//     const firebaseConfig = {
//       apiKey: "AIzaSyCcKGHc2riqP5S7jarLPQ4gaDkyD_49YsE",
//       authDomain: "timekeeper-d6272.firebaseapp.com",
//       databaseURL: "https://timekeeper-d6272.firebaseio.com",
//       storageBucket: "timekeeper-d6272.appspot.com",
//       messagingSenderId: "251914286448",  
//     };
//     
//     console.log('Initialising Firebase...');
//     
//     this.fbApp = Firebase.initializeApp(firebaseConfig);
//     
//     this.state = {
//       component: null,
//       loaded: false
//     };
//   }
//   
//   getRef() {
//     return fbApp;
//   }
// 
//   componentWillMount(){
//     
//     let SignUpComponent = {component: Signup, firebase: this.fbApp};
//     this.setState(SignUpComponent);
//     
//     // AsyncStorage.removeItem('user_data');
//     // 
//     // AsyncStorage.getItem('user_data').then((user_data_json) => {
//     //   
//     //   let user_data = JSON.parse(user_data_json);
//     //   let SignUpComponent = {component: Signup, firebase: this.fbApp};
//     //   let AccountComponent = {component: Account, firebase: this.fbApp};
//     //   if(user_data != null){
//     //     this.fbApp().authWithCustomToken(user_data.token, (error, authData) => {
//     //       if(error){
//     //         this.setState(SignUpComponent);
//     //       }else{
//     //         this.setState(AccountComponent);
//     //       }
//     //     });
//     //   }else{
//     //     this.setState(SignUpComponent);
//     //   }
//     // });
//   }
// 
//   render(){
// 
//     if(this.state.component){
//       return (
//         <Navigator
//           initialRoute={{component: this.state.component, fbDB : this.state.firebase}}
//           configureScene={() => {
//             return Navigator.SceneConfigs.FloatFromRight;
//           }}
//           renderScene={(route, navigator) => {
//             if(route.component){
//               return React.createElement(route.component, { navigator, fbDB : route.fbDB });
//             }
//           }}
//         />
//       );
//     }else{
//       return (
//         <View style={styles.container}>
//           <Header text="React Native Firebase Auth" loaded={this.state.loaded} />  
//           <View style={styles.body}></View>
//         </View>
//       );
//     }
//   }
// }
// 
// AppRegistry.registerComponent('timeKeeper', () => firebaseAuth);
