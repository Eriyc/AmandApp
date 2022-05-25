import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {FoodNavigator} from './sections/food-navigatior';
import {WorkoutNavigator} from './sections/workout-navigator';
import {Settings as SettingsScreen} from 'screens';
import {NavigationProp} from '@react-navigation/native';
import {Pressable, useTheme, Settings} from 'ui';
import {Image} from 'react-native';
import {Home} from 'screens/home';

export type SectionStackParamList = {
  Workout: undefined;
  Home: undefined;
  Food: undefined;
  Settings: undefined;
};
export type SectionStackNavigation = NavigationProp<SectionStackParamList>;

const Stack = createStackNavigator<SectionStackParamList>();

export const SectionNavigator = () => {
  const theme = useTheme();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={({navigation}) => ({
          title: 'Din överblick',
          headerTintColor: theme.colors.black,
          headerLeft: () => (
            <Image
              source={require('../../assets/logo.png')}
              style={{
                height: 42,
                width: 42,
                borderRadius: 9999,
                marginLeft: theme.spacing.s,
              }}
            />
          ),
          headerRight: props => (
            <Pressable
              marginRight="m"
              onPress={() => navigation.navigate('Settings')}>
              <Settings color={props.tintColor} />
            </Pressable>
          ),
        })}
      />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen
        name="Food"
        component={FoodNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Workout"
        options={{headerShown: false}}
        component={WorkoutNavigator}
      />
    </Stack.Navigator>
  );
};
