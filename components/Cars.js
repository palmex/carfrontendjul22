import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';


export default class Cars extends React.Component {

    
    async componentDidMount() {
        console.log('component did mount');
        const response =  await fetchCars();
        // cars = JSON.parse(response[0].toString())
        console.log('response', response)
        // console.log('cars',cars)
        this.setState({ data: response })
        // this.setState({ car_id: response[0].car_id })
        // this.setState({ make: response[0].make })
        // this.setState({ model: response[0].model })
        // this.setState({ year: response[0].year })
        console.log(this.state.data)
      }
    
    constructor(props){
        super(props); 
        this.state = {
            stateBool: true,
            data: [],
            make: 'Jeep', 
            model: 'Compass', 
            year: '2019',
            odometer: '56043',
            headerColor: '#4bbb4b'
        }

    
    }


    createNewCar = () => {
        
        console.log("car description on submit", this.state.make, this.state.model, this.state.year, this.state.odometer)
        createCar(this.state.make, this.state.model, this.state.year, this.state.odometer);
        this.forceUpdate()
    }

    fetchAllCars = () =>{
        this.forceUpdate()
    }
    
    async forceUpdate(){
        console.log("update complete")
        const response =  await fetchCars();
        this.setState({ data: response })
      }

    render(){
         
        return(
            <View style={styles.container}>
                <Text style={{color: this.props.newProp}}> New Car Submission Component</Text>
                
                {(this.state.data.map((car) =>
                 <Text key={car.car_id}>{car.make} {car.model} -  {car.year} with {car.odometer} miles on it. CarId({car.car_id})
                   </Text> 
                ))}
                
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


                <Button onPress={this.createNewCaqr} title="Create"/>

                <Button onPress={this.fetchAllCars} title="All Cars"/>
                {/* <Text >{this.state.make}</Text>
                <Text >{this.state.model}</Text>
                <Text >{this.state.year}</Text>
                <Text >{this.state.odometer}</Text> */}
                
            </View>

        )
    }
}; 


async function fetchCars(){
    return fetch('http://localhost:3000/' + 'cars/all', {
        
        
        withCredentials: true,
        // mode: 'no-cors',
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin":"*",
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Origin': 'http://localhost:3000/*',
            'Accept': "application/json",
            'admin':'true',
        }
    } ).then(response => {
        if (response.ok){
            const cars = response.json()
            console.log(cars)
            return cars; 
        }
        else {
            var error = new Error('Error ' + response.status + ':' + response.statusText)
            error.response = response
            return error;
        }
    }, 
    error => {
        var errmess = new Error(error.message); 
        throw errmess; 
    })
}

async function createCar(make1, model1, year1, odometer1) {

    let reqBody = {
        "make": make1,
        "model": model1,
        "year": year1,
        "odometer": odometer1
    }

    console.log(JSON.stringify(reqBody));

    return fetch('http://localhost:3000/' + 'cars/new', {
        method: 'POST',
        body: JSON.stringify(reqBody),
        withCredentials: true,
        // mode: 'no-cors',
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin":"*",
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Origin': 'http://localhost:3000/*',
            'Accept': "application/json",
        }
    } ).then(response => {
        if (response.ok){
            const newCar = response.json()
            console.log(newCar)
            return newCar; 
        }
        else {
            var error = new Error('Error ' + response.status + ':' + response.statusText)
            error.response = response
            return error;
        }
    }, 
    error => {
        var errmess = new Error(error.message); 
        throw errmess; 
    })
}

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