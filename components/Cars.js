import React from "react";
import { StyleSheet, Text, View, Button } from 'react-native';


export default class Cars extends React.Component {

    constructor(){
        super(); 
        this.state = {stateBool: true}
        this.state = {stateText: "ON"}
    }



    firstFunction = () => {
        this.setState({stateBool:!this.state.stateBool})
        if (this.state.stateBool){
            this.setState({stateText: "ON"}) 
        } else {
            this.setState({stateText: "OFF"})
        }
    }


    render(){
        return(
            <View style={styles.container}>
                <Button onPress={this.firstFunction} title="Button"/>
                <Text>{this.state.stateText}</Text>
                {/* <StatusBar style="auto" /> */}
            </View>

        )
    }
}; 

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });