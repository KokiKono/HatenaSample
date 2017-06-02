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
/**
* @extends {React.Component}
*/
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
