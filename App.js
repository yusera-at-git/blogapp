import React,{useContext} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import IndexScreen from './src/screen/IndexScreen';
import ShowScreen from './src/screen/ShowScreen';
import EditScreen from './src/screen/EditScreen';
import CreateScreen from './src/screen/CreateScreen';
import { Provider as BlogProvider } from './src/context/BlogContext';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Context as BlogContext } from './src/context/BlogContext';
import { Entypo } from '@expo/vector-icons';

import { navigationRef } from './src/components/RootNavigation';
import * as RootNavigation from './src/components/RootNavigation'
const Stack =createStackNavigator();
 function App() {
const {state, addBlogpost, deleteBlogpost} =useContext(BlogContext);
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName='Index'>
        <Stack.Screen 
        name='Index' 
        component={IndexScreen}
        options={{
          title:'Index Screen',
          headerRight:()=>(
            <TouchableOpacity onPress={()=>RootNavigation.navigate('Create')}>
             <Ionicons name="add-circle-outline" size={24} color="black" />
            </TouchableOpacity>
          )
        }}/>
        <Stack.Screen 
          name='Show' 
          component={ShowScreen} 
          options={({navigation, route})=>({title:'Show Screen',
        headerRight:()=>(
          <TouchableOpacity onPress={()=>navigation.navigate('Edit', {id:route.params})}>
              <Entypo name="edit" size={24} color="black" />
          </TouchableOpacity>)
          })}
        />
        <Stack.Screen 
          name='Edit' 
          component={EditScreen} 
          options={{title:'Edit Screen'}}
        />
        <Stack.Screen 
          name='Create' 
          component={CreateScreen} 
          options={{title:'Create Screen'}}
        />
      </Stack.Navigator>
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

// const App= createAppContainer(navigator);
export default () => {
  return(
  <BlogProvider>
    <App />
  </BlogProvider>
  )
}