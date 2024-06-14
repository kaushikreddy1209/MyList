import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider as PaperProvider, DefaultTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ListScreen from './components/ListScreen';
import AddItems from './components/AddItems';
import {ItemProvider} from './context/ItemContext';
import EditItems from './components/EditItems';

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
};

const App = () => {
  return (
    <ItemProvider>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {backgroundColor: theme.colors.primary},
              headerTintColor: '#fff',
            }}>
            <Stack.Screen
              name="List"
              component={ListScreen}
              options={{title: 'My List'}}
            />
            <Stack.Screen
              name="AddItem"
              component={AddItems}
              options={{title: 'Add Item'}}
            />
            <Stack.Screen
              name="EditItem"
              component={EditItems}
              options={{title: 'Edit Item'}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </ItemProvider>
  );
};

export default App;
