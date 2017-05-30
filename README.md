# HatenaSample チュートリアル編  
## *React Navigation* とは  
 [React Navigation]:https://reactnavigation.org/ "React Navigation"  
 世界中の天才たちが開発してきたReact,React Nativeの両方で動作するナビゲーター  
最近、React Native 0.44からFaceBookも推奨してきたホットなライブラリ。  
React Nativeでは主に画面遷移のコントロールとヘッダー部分をサポートする。  
例）  
![GIF](https://reactnavigation.org/assets/iphone-stack.gif "サンプル")
*App.js*  
```javascript
  import {  
    StackNavigator,  
  } from 'react-navigation';  

  const BasicApp = StackNavigator({  
    Main: {screen: MainScreen},  
    Profile: {screen: ProfileScreen},  
  });  
```
*MainScreen.js*  
```javascript
  class MainScreen extends React.Component {  
    static navigationOptions = {  
      title: 'Welcome',  
    };  
    render() {  
      const { navigate } = this.props.navigation;  
      return (  
        <Button  
          title="Go to Jane's profile"  
          onPress={() =>  
            navigate('Profile', { name: 'Jane' })  
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
      title: navigation.state.params.name,  
    });  
    render() {  
      const { goBack } = this.props.navigation;  
      return (  
        <Button  
          title="Go back"  
          onPress={() => goBack()}  
        />  
      );  
    }  
  }  
```
