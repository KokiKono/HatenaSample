import dispatcher from '../Dispatcher/dispatcher';

export function createToDo(item){
  dispatcher.dispatch({type:'CREATE_TODO',item});
}
