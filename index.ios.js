import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
var Login = require('./Login');

//export default class GitHubBrowser extends Component {
var GitHubBrowser = React.createClass({
    // constructor(props){
    //     super(props);
    //     this.state={
    //         isLoggedIn: false
    //     }
    // }
  render() {
    if (this.state.isLoggedIn){
      return(
          <View>
            <Text>
              Logged in!
            </Text>
          </View>

      )
    }
    else{
        return (
            // <View>
            <Login onLogin={this.onLogin}/>
        );
    }

  },
    onLogin(){
      console.log('successfully logged in, can show different view')
        this.setState({isLoggedIn: true});
    },
     getInitialState(){
       return{
         isLoggedIn: false
       };
     }
});

AppRegistry.registerComponent('GitHubBrowser', () => GitHubBrowser);
