import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
var Login = require('./Login');
var AuthService = require('./AuthService');

//export default class GitHubBrowser extends Component {
var GitHubBrowser = React.createClass({

    componentDidMount() {
        AuthService.getAuthInfo((err, authInfo) =>{
            this.setState({
                checkingAuth: false,
                isLoggedIn: authInfo != null
            })
        });
    },

  render() {
    if (this.state.isLoggedIn){
      return(
          <View style={styles.container}>
            <Text style={styles.welcome}>
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
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('GitHubBrowser', () => GitHubBrowser);
