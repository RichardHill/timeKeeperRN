'use strict';
import React, {
  StyleSheet
} from 'react-native';

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  datePickerBody: {
    flex: 0,
    width: 100,
    height: 40,
    backgroundColor: '#F5FCFF',
  },
  textinput: {
    height: 40,
    borderColor: 'red',
    borderWidth: 1
  },
  transparent_button: {
    marginTop: 10,
    padding: 15
  },
  transparent_button_text: {
    color: '#0485A9',
    fontSize: 16
  },
  buttonsContainer: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingBottom: 5,
  },
  primary_button: {
    justifyContent: 'center',
    alignItems: 'center',
    height:70,
    marginRight:5,
    marginLeft:5,
    marginTop:10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom:10,
    backgroundColor:'#68a0cf',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  primary_button_text: {
    color: '#FFF',
    fontSize: 18
  },
  image: {
    width: 100,
    height: 100
  },
  listview_rowitem: {
    backgroundColor: 'lightblue',
    height: 40,
    margin: 5,
    padding: 5,
  },
});
