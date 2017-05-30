#React Navigationサンプル
例）  
![GIF](https://reactnavigation.org/assets/iphone-stack.gif "サンプル")  
*App.js*  
```javascript
  import {  
    StackNavigator,  
  } from 'react-navigation';  
  //今回はStackNavigatorを使うと思う。たぶん
  const BasicApp = StackNavigator({
    //Viewコンポートの登録
    Main: {screen: MainScreen},
    // navigateName : {screen: Viewコンポート}
    Profile: {screen: ProfileScreen},  
  });  
```
*MainScreen.js*  
```javascript
  class MainScreen extends React.Component {  
    //ヘッダー部分を定義する。細かい部分はソースで説明
    static navigationOptions = {  
      title: 'Welcome',  
    };  
    render() {  
      //navigate時に設定した小道具はこのあたりから取得できる。
      const { navigate } = this.props.navigation;  
      return (  
        <Button  
          title="Go to Jane's profile"  
          onPress={() =>  
            //Profileと定義したnavigateNameに遷移する。
            navigate('Profile', { name: 'Jane' })  
            // { name: 'Jane'}はProfileスクリーンにname小道具を渡す。
          }  
        />  
      );  
    }  
  }  
```
*ProfileScreen.js*  
```javascript
  class ProfileScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({  
      //ここからname小道具を取得できる。
      title: navigation.state.params.name,  
    });  
    render() {
      //navigate小道具を取得したい場合は以下のように参照する。
      const { goBack } = this.props.navigation;  
      return (  
        <Button  
          title="Go back"
          //画面配列の扱いは他にも色々あるよ。
          //ちなみにヘッダー左のbackArrowなどはデファルトで設定されてるよ。
          onPress={() => goBack()}  
        />  
      );  
    }  
  }  
```
だいたいこんな感じで組む。

[HatenaでのApp.js](https://github.com/KokiKono/HatenaSample/blob/turorial/App/app.js)

[HatenaでのToDoList.js](https://github.com/KokiKono/HatenaSample/blob/turorial/App/Views/ToDoList.js)

[HatenaでのToDoInput.js](https://github.com/KokiKono/HatenaSample/blob/turorial/App/Views/ToDoInput.js)
