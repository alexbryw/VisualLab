import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import React from 'react';
// import { StyleSheet, View, Text, Button } from 'react-native';
import ContentScreen from './screens/ContentScreen';
import LoginScreen from './screens/LoginScreen'
import OverviewScreen from './screens/OverviewScreen';
import SineScreen from './screens/SineScreen';
import WaveScreen from './screens/WaveScreen';
// import NewScreen from './screens/NewScreen';

const Stack = createStackNavigator()

function App() {
  console.log("App running.")
  return (
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Welcome"
          screenOptions={
            {headerTransparent: true}
          }
        >
          <Stack.Screen name="Content" component={ContentScreen} />
          <Stack.Screen
            name="Overview"
            component={OverviewScreen}
            options={{headerShown: false}
          }/>
          <Stack.Screen
            name="Welcome"
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Sine"
            component={SineScreen}
            options={{headerTitle: ""}}
          />
          <Stack.Screen name="Wave" component={WaveScreen} options={{headerTitleStyle:{color: '#00C4EE'}}}/>

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
