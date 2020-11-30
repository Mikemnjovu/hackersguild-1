import React, {
  useContext,
} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import '../styles/global-styles.css';
import NavBar from '../components/nav_bar/nav-bar';
import Footer from '../components/footer/footer';
import FooterMobile from '../components/footer/footer -mobile';
import LandingPage from './landing/landing-page';
import HackerthonsPage from './learn_more/hackerthons';
import BootcampsPage from './learn_more/bootcamps';
import SchoolClubsPage from './learn_more/school-clubs';
import { NavContext } from '../utils/state/nav-state';
function App() {
  const [
    navShowState,
    setNavShowState,
  ] = useContext(NavContext);
  setNavShowState(true);
  return (
    <>
      <div className='App'>
        <Router>
          <NavBar />
          <Switch>
            <Route
              exact
              path='/'
              component={LandingPage}
            />
            <Route
              path='/learn_more/hackerthons'
              component={
                HackerthonsPage
              }
            />
            <Route
              path='/learn_more/bootcamp'
              component={BootcampsPage}
            />
            <Route
              path='/learn_more/school_clubs'
              component={
                SchoolClubsPage
              }
            />
          </Switch>
        </Router>
        <FooterMobile />
        <Footer />
      </div>
    </>
  );
}

export default App;
