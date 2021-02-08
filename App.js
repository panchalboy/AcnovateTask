import React from 'react'
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer, StackActions} from 'react-navigation'
import ImageScreen from './Compotant/ImageScreen'





const NavStack = createStackNavigator(
  {
    // eslint-disable-next-line no-trailing-spaces

    ImageScreen: {screen: ImageScreen},
    
   
  },
 
  
  {
    
    initialRouteName: 'ImageScreen',
    headerMode: 'none',
    defaultNavigationOptions: ({navigation}) => ({
      animationEnabled: false,
    })

     
  },
 
 
);
 


const Apps = createAppContainer(NavStack)

export default class App extends React.Component {

 
  render () {
    
    return (
      
      
      <Apps />
      
   

    )
     
  }
  
}


