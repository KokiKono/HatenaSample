import React from 'react';
import {
  TouchableOpacity
} from 'react-native';
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Text
} from 'native-base';
import * as ToDoAction from '../Actions/ToDoAction';


export default class ToDoInput extends React.Component{
  static navigationOptions=({navigation})=>{
    return{
      title:'HatenaSample',
      headerRight:(
        <TouchableOpacity
          onPress={()=>{
            ToDoAction.createToDo(navigation.state.params.todo);
          }}>
          <Text style={{color:'#007AFF',marginRight:10}}>Save</Text>
        </TouchableOpacity>
      )
    }
  }

  render(){
    const {navigation} = this.props;
    const { state, setParams } = navigation;
    return(
      <Container>
        <Content>
          <Form>
            <Item>
              <Input placeholder='ToDo名'
                onChangeText={(text)=>{setParams({todo:text})}}/>
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}
