// CSS
import './App.css';

// Modules
import React from 'react';
import { Button, Drawer } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Menu } from '@material-ui/icons';

// Components
import Home from './components/home/Home';
import Project from './components/projects/Project';
import Video from './components/videos/Video';

function App() {

  return (
    <Router>
      <MenuDrawer></MenuDrawer>
      <div>
        <Switch>
          <Route path="/projects">
            <Project />
          </Route>
          <Route path="/videos">
            <Video />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      <footer className="Footer">
        <p>&#169; Andrew Cleary 2021. All Rights Reserved</p>
      </footer>
    </Router>
  );
}

export default App;

function MenuDrawer() {
  const [state, setState] = React.useState({
    top: false
  });

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, ['top']: open });
  };

  const list = () => (
    <div
      class="menu"
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Link to="/">
        <Button>Home</Button>
      </Link>
      <Link to="/projects">
        <Button>Projects</Button>
      </Link>
      <Link to="/videos">
        <Button>Videos</Button>
      </Link>
    </div>
  );

  return (
    <div>
      <div class="menu-bar">
        <Button onClick={toggleDrawer(true)}><Menu/></Button>
      </div>
      <Drawer anchor={'top'} open={state['top']} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </div>
  );
}

