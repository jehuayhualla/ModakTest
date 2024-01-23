import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {EventDetailScreen, EventsScreen, HomeScreen} from '../screens';
import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';
import {createStyleSheet, useStyles} from 'react-native-unistyles';
import {EventResponse} from '@app/libs/types';
import FavoriteEventsScreen from '@app/screens/FavoriteEventsScreen';

const Stack = createStackNavigator<RootStackParamList>();

export type RootNavProps = StackNavigationProp<RootStackParamList>;

export type RootStackParamList = {
  Home: undefined;
  Events: undefined;
  EventDetails: {
    event: EventResponse;
  };
  FavoriteEvents: undefined;
};

function StackNavigator() {
  const {styles} = useStyles(stylesheet);
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen
        options={{
          headerStyle: styles.headerStyle,
          headerTintColor: '#fff',
        }}
        name="Events"
        component={EventsScreen}
      />
      <Stack.Screen
        options={{
          headerStyle: styles.headerStyle,
          headerTintColor: '#fff',
        }}
        name="EventDetails"
        component={EventDetailScreen}
      />
      <Stack.Screen
        options={{
          headerStyle: styles.headerStyle,
          headerTintColor: '#fff',
        }}
        name="FavoriteEvents"
        component={FavoriteEventsScreen}
      />
    </Stack.Navigator>
  );
}
const stylesheet = createStyleSheet(theme => ({
  headerStyle: {
    backgroundColor: theme.colors.backgroundColor,
    borderBottomColor: theme.colors.backgroundColor,
    shadowColor: theme.colors.backgroundColor,
  },
}));

export default function RootNav() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
