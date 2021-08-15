import { Container, Grid } from "@material-ui/core";

import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import About from './components/About/About';
import Education from './components/Education/Education';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';

function App() {
  return (
    <Container>
      <Grid container>
        <Grid items xs={12} sm={12} md={4} lg={3}>
          <Profile />
        </Grid>
        <Grid items xs style={{ backgroundColor: 'yellow' }}>
          <Header />
          <Router>
            <Switch>
              <Route path="/education">
                <Education />
              </Route>
              <Route path="/">
                <About />
              </Route>
            </Switch>
          </Router>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
