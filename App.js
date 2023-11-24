import React, {Component} from 'react';
import LoginView from './src/LoginView';
import HomeView from './src/HomeView'; 
import ArtistDetailView from './src/ArtistDetailView';
import {Actions, Scene, Router} from 'react-native-router-flux';

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="login" component={LoginView} hideNavBar/>
    <Scene key='home' component={HomeView} back/>
    <Scene key='artistDetail' component={ArtistDetailView} back/>
  </Scene>
)

export default class App extends Component {true
  render() {
    return <Router scenes={scenes}/>
  }
}
