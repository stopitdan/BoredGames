import React, { Component } from 'react';
import GameList from './GameListPage/GameList';
import Header from './GameListPage/Header';


export default class AppGameList extends Component {
  render() {
    return (
      <div>
        <Header />
        <GameList />
      </div>
    );
  }
}
