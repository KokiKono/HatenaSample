# Eventsとは  
Eventsに関してはReact NavigationやFluxよりは簡単です。
![Imge2](https://facebook.github.io/flux/img/flux-simple-f8-diagram-with-client-action-1300w.png "ユーザーアクション")
要は、Flux-Storeが変更された時にFlux-Viewsにイベントを送るライブラリです。

## Hatenaでのサンプル:ToDoStore
```javascript
import {EventEmitter} from 'events';
import dispatcher from '../Dispatcher/dispatcher';

class ToDoStore extends EventEmitter{
  constructor(){
    super();
    this.todos=[];
  }
  handelActions(action){
    switch (action.type) {
      case 'CREATE_TODO':
        this.createToDo(action.item);
        break;
      default:
        break;
    }
  }
  getAll(){
    return this.todos;
  }
  createToDo(item){
    // let todo={
    //   id:item.id,
    //   name:item.name
    // };
    this.todos.push(item);
    this.emit('createToDo');
  }
}

const todoStore = new ToDoStore;
dispatcher.register(todoStore.handelActions.bind(todoStore));
export default todoStore;
```

## Hatenaでのサンプル:ToDoList
```javascript
import React from 'react';
import {
  TouchableOpacity
} from 'react-native';
import {
  Contaier,
  Content,
  List,
  ListItem,
  Text
} from 'native-base';
import Icon from 'react-native-vector-icons/Octicons';
import {NavigationActions} from 'react-navigation';
import ToDoStore from '../Stores/ToDoStore';

export default class ListView extends React.Component{
  static navigationOptions=({navigation})=>{
    const {navigate}=navigation;
    return{
      title:'HatenaSample',
      headerRight:(
        <TouchableOpacity
          onPress={()=>{
            navigate('Input');
          }}>
          <Icon name='plus' style={{fontSize:25,color:'#007AFF',marginRight:10}}/>
        </TouchableOpacity>
      )
    }
  }
  constructor(props){
    super(props);
    this.state={
      todos:ToDoStore.getAll()
    };
  }
  componentWillMount(){
    ToDoStore.on('createToDo',()=>{
      this.setState({todos:ToDoStore.getAll()});
    });
  }
  render(){
    return(
      <List
        dataArray={this.state.todos}
        renderRow={this.renderRow.bind(this)}>
      </List>
    );
  }
  renderRow(item){
    return(
      <ListItem>
        <Text>{item}</Text>
      </ListItem>
    );
  }
}
```
