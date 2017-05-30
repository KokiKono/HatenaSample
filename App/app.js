'use strict';
import {AppRegistry} from 'react-native';
import {StackNavigator} from 'react-navigation';
import ToDoList from './Views/ToDoList';
import ToDoInput from './Views/ToDoInput';

const App = StackNavigator({
  Home:{screen:ToDoList},
  Input:{screen:ToDoInput}
});

AppRegistry.registerComponent('Hatena',()=>App);
