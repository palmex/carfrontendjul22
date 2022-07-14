import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';


export default class Cars extends React.Component {

    constructor(props){
        super(props); 
        this.state = {
            stateBool: true,
            make: 'Jeep', 
            model: 'Compass', 
            year: '2019',
            odometer: '56043',
            headerColor: this.props.newProp
        }
    }


    createNewCar = () => {
        console.log("car description on submit", this.state.make, this.state.model, this.state.year, this.state.odometer)
    }


    render(){

        return(
            <View style={styles.container}>
                <Text style={{color: this.state.headerColor}}> New Car Submission Component</Text>
                <Text>Make </Text>
                <TextInput
                style={styles.textinput}
                defaultValue={this.state.make}
                onChangeText={(e) => this.setState({make: e})}
                ></TextInput>


                <Text>Model </Text>
                <TextInput style={styles.textinput}
                defaultValue={this.state.model}
                onChangeText={(e) => this.setState({model: e})}
                ></TextInput>


                <Text>Year </Text>
                <TextInput style={styles.textinput}
                defaultValue={this.state.year}
                onChangeText={(e) => this.setState({year: e})}
                ></TextInput>


                <Text>Odometer </Text>
                <TextInput style={styles.textinput}
                defaultValue={this.state.odometer}
                onChangeText={(e) => this.setState({odometer: e})}
                ></TextInput>


                <Button onPress={this.createNewCar} title="Create"/>
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