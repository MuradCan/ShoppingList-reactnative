import React from 'react';
import Main from './components/Main';
import Note from './components/Note';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class App extends React.Component{

  
  render(){
    return(
      <Main style={styles.container} />  
    );
  }
}

const styles =StyleSheet.create({
  container:{
    backgroundColor:'#FFFFFF',
    flex:1,
  },
});