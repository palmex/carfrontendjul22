import React from "react";
import { StyleSheet, Text, View, Button } from 'react-native';


export default class Cars extends React.Component {




    firstFunction = () => {

    }


    render(){
        return(
            <View style={styles.container}>
                <Button onPress = {this.firstFunction} title="Button"/>
                {/* <Text >{this.state.sampleText}</Text> */}
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