import React ,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TabBarIOS,

} from 'react-native';

let styles = StyleSheet.create({
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
});

class AppContainer extends Component{

    constructor(props){
        super(props);
        this.state={
            selectedTab: 'feed',
        }
    }

    render(){
        return(
            <View>
                <Text>
                    Login
                </Text>
            </View>
            // <TabBarIOS style={styles.container}>
            //     <TabBarIOS.Item title="feed" selected={this.state.selectedTab == 'feed'}>
            //
            //     </TabBarIOS.Item>
            // </TabBarIOS>

        )
    }
}


module.exports = AppContainer;