// Components
import React from 'react';
import ImageContainer from './ImageContainer';
import ScrollTop from "./ScrollTop";

// Images
import logo from './images/logo-white.png';
import wallpaper1 from './images/wallpapers/howl049.jpg';
import wallpaper2 from './images/wallpapers/louie-zong-cat-walking-bg.png';
import wallpaper3 from './images/wallpapers/louie-zong-fox.png';
import wallpaper4 from './images/wallpapers/mimi008.jpg';
import wallpaper5 from './images/wallpapers/mimi047.jpg';
import wallpaper6 from './images/wallpapers/Ring.jpg';
import wallpaper7 from './images/wallpapers/ponyo012.jpg';
import wallpaper8 from './images/wallpapers/Spiderverse.jpg';
import wallpaper9 from './images/wallpapers/chihiro007.jpg';

// Styles
import './App.css';
import './Images.css'

// Material Styles
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import './MaterialOverride.css'

const btnStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="https://danbullock.me" target="_blank" rel="noreferrer">
          <img src={logo} className="App-logo" alt="logo" />
        </a>
        <div className="App-header-title">
                <h1>WallpaperPix</h1>
                <a href="https://twitter.com/DanBullockCS" id="twitter-link" >@DanBullockCS</a>
        </div>
        <Button
          className={btnStyles().button}
          variant="contained"
          color="primary"
          startIcon={<Icon>home</Icon>}
          href="https://danbullock.me"
          target="_blank"
          rel="noreferrer"
          alt="Home"
          title="Home">
        </Button>
      </header>
      <p className="App-description">Simple blog site put together to share some wallpapers I find visually appealing</p>
      <div className="Image-grid">
        <ImageContainer imageUrl={wallpaper8} imageTitle={"Spiderverse Wallpaper"} originalImageLink={'https://www.pixel4k.com/spiderman-miles-lost-in-space-4k-79998.html'}></ImageContainer>
        <ImageContainer imageUrl={wallpaper6} imageTitle={"Ring Graphic Wallpaper"} originalImageLink={'https://www.reddit.com/r/wallpaper/comments/ekxvfq/ultraviolet_4k_wallpaper_3840_x_2160'}></ImageContainer>
        <ImageContainer imageUrl={wallpaper2} imageTitle={"Louie Zong Cat Walking"} originalImageLink={'https://www.louiezong.com/#/bgs/'}></ImageContainer>
        <ImageContainer imageUrl={wallpaper3} imageTitle={"Louie Zong Fox"} originalImageLink={'https://www.louiezong.com/#/bgs/'}></ImageContainer>
        <ImageContainer imageUrl={wallpaper4} imageTitle={"Whisper of the Heart Wallpaper 1"} originalImageLink={'https://www.ghibli.jp/works/mimi/#frame&gid=1&pid=8'}></ImageContainer>
        <ImageContainer imageUrl={wallpaper5} imageTitle={"Whisper of the Heart Wallpaper 2"} originalImageLink={'https://www.ghibli.jp/works/mimi/#frame&gid=1&pid=47'}></ImageContainer>
        <ImageContainer imageUrl={wallpaper1} imageTitle={"Howl's Moving Castle Wallpaper"} originalImageLink={'https://www.ghibli.jp/works/howl/#&gid=1&pid=49'}></ImageContainer>
        <ImageContainer imageUrl={wallpaper7} imageTitle={"Ponyo Wallpaper"} originalImageLink={'https://www.ghibli.jp/works/ponyo/#&gid=1&pid=12'}></ImageContainer>
        <ImageContainer imageUrl={wallpaper9} imageTitle={"Spirited Away Wallpaper"} originalImageLink={'https://www.ghibli.jp/works/chihiro/#&gid=1&pid=7'}></ImageContainer>
      </div>
      <ScrollTop />
    </div>
      
  );
}

export default App;
