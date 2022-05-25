import * as React from 'react';
import {FoodHome} from 'screens/food';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

export const FoodNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={FoodHome} />
    </Stack.Navigator>
  );
};
