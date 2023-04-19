import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingScreen from './src/features/onboarding/onboardScreen';
import DashboardScreen from './src/features/dashboard/dashboardScreen';
import React from 'react';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
const AppStack = createStackNavigator();

export default function App() {
  const [firstLaunch, setFirstLaunch] = useState<boolean | undefined>();
  useEffect(() => {
    async function setData() {
      const appData = await AsyncStorage.getItem("appLaunched");
      if (appData == null) {
        setFirstLaunch(true);
        AsyncStorage.setItem("appLaunched", "false");
      } else {
        setFirstLaunch(false);
      }
    }
    setData();
  }, []);
  return (
    // firstLaunch != null && (
    //   <NavigationContainer>
    //     <AppStack.Navigator screenOptions={{headerShown: false}}>
    //       {firstLaunch && (
    //         <AppStack.Screen
    //           options={{ headerShown: false }}
    //           name="Onboarding"
    //           component={OnboardingScreen}
    //         />
    //       )}
    //       <AppStack.Screen options={{ headerShown: false }} name="Dashboard" component={DashboardScreen} />
    //     </AppStack.Navigator>
    //   </NavigationContainer>
    // )
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{headerShown: false}}>
        <AppStack.Screen name="Onboarding" component={OnboardingScreen} />
        <AppStack.Screen name="Dashboard" component={DashboardScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
