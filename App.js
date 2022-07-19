import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Cars from './components/Cars';

export default function App() {




  return (
    <View style={styles.container}>
      <Text style={textStyle.container}>Hello Class of Stellantis-OU Module 5!</Text>
      
     <Cars newProp={'#967334'}></Cars>
    
     
      
      <StatusBar style="auto" />
    </View>
  );
}

// #967334 OU Color
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const textStyle = StyleSheet.create({
  container: {
    // backgroundColor: '#fff',
    color: '#967334',
    fontSize: '24px'
  },
});