import { Container, Row, Col } from 'react-bootstrap';

import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import About from './components/About/About';
import Education from './components/Education/Education';
import Footer from './components/Footer/Footer';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';

function App() {
  return (
    <Container className="container">
      <Row>  
        <Col xs={12} sm={12} md={4} lg={3}>
          <Profile />
        </Col>
        <Col xs>
          <Router>
            <Header />
            <div className="main_content container_shadow">
              <Switch>
                <Route path="/education">
                  <Education />
                </Route>
                <Route path="/">
                  <About />
                </Route>
              </Switch>
            </div>
          </Router>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
