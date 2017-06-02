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
  /**
  * @return {todo_items} ToDoリストを配列で返す。
  */
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
