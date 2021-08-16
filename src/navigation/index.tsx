import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';

import LoadingScreen from '../containers/LoadingScreen';
import NewsScreen from '../containers/NewsScreen';

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
export type RootStackParamList = {
  Loading: undefined;
  NewsScreen: undefined;
};
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Loading" component={LoadingScreen} />
      <Stack.Screen name="NewsScreen" component={NewsScreen} />
    </Stack.Navigator>
  );
}
