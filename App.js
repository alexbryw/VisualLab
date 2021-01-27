import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
// import { StyleSheet, View, Text, Button } from 'react-native';
import ContentScreen from './screens/ContentScreen';
import LoginScreen from './screens/LoginScreen'
import ContentOverviewScreen from './screens/ContentOverviewScreen';
import SineScreen from './screens/SineScreen';
// import NewScreen from './screens/NewScreen';

const Stack = createStackNavigator()

function App() {
  console.log("App running.")
  return (
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Welcome"
          screenOptions={{headerTransparent: true}}
        >
          <Stack.Screen name="Content" component={ContentScreen} />
          <Stack.Screen name="Overview" component={ContentOverviewScreen} />
          <Stack.Screen name="Welcome" component={LoginScreen} />
          <Stack.Screen name="Sine" component={SineScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });
