import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';


export default class Cars extends React.Component {

    constructor(){
        super(); 
        this.state = {
            stateBool: true,
            make: 'Jeep', 
            model: 'Compass', 
            year: '2019',
            odometer: '56043'
        
        
        }
       

        
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
                <Text>Make </Text>
                <TextInput style={styles.textinput}
                defaultValue={this.state.make}
                onChangeText={(e) => this.setState({make: e})}></TextInput>


                <Text>Model </Text>
                <TextInput style={styles.textinput}
                defaultValue={this.state.model}></TextInput>


                <Text>Year </Text>
                <TextInput style={styles.textinput}
                defaultValue={this.state.year}></TextInput>


                <Text>Odometer </Text>
                <TextInput style={styles.textinput}
                defaultValue={this.state.odometer}></TextInput>


                <Button onPress={this.firstFunction} title="Button"/>
                <Text >{this.state.make}</Text>
                <Text >{this.state.model}</Text>
                <Text >{this.state.year}</Text>
                <Text >{this.state.odometer}</Text>
                
            </View>

        )
    }
}; 

const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   backgroundColor: {this.state.bkgColor},
      alignItems: 'center',
      justifyContent: 'center',
    },
    textinput: {
        height: 26, 
        borderWidth: 0.5, 
        borderColor: '#222', 
        padding: 4, 
        marginBottom: '1rem'
    }
  });