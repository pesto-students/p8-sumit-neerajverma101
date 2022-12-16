// import logo from './logo.svg';
// import './App.css';
import React from 'react'
import CurrentSong from './components/currentsong';
import PlayerFooter from './components/playerfooter';
import PlayList from './components/playlist';
import SideBarMenu from './components/sidebar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
      </header>
      <main>
        <article className='main-content display-flex'>
          <SideBarMenu></SideBarMenu>
          <article className='song-playlist'>
        <CurrentSong></CurrentSong>
        <PlayList></PlayList>
        </article>
        </article>
        <PlayerFooter></PlayerFooter>
      </main>
    </div>
  );
}

export default App;
