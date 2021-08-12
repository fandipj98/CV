import { Container, Grid } from "@material-ui/core";

import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import About from "./pages/About/About";
import Education from "./pages/Education/Education";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';

function App() {
  return (
    <Container>
      <Grid container>
        <Grid items xs={12} sm={12} md={4} lg={3} style={{ backgroundColor: 'yellow' }}>
          <Profile />
        </Grid>
        <Grid items xs>
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
