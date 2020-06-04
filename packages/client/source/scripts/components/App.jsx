import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';
import Reality from './Reality';
import Contact from './Contact';
import SignUp from './SignUp';
import Login from './Login';
import Resume from './Resume';
// import Navigation from './Navigation'
import NotFound from './NotFound';
import PropTypes from 'prop-types';

import '../../styles/scss/main.scss';

const App = () => {
    return (
        <Router>
            <main>
                <Switch>
                    <Route exact path={'/'} component={Home} />
                    <Route path={'/reality'} component={Reality} />
                    <Route path={'/contact'} component={Contact} />
                    <Route path={'/signup'} component={SignUp} />
                    <Route path={'/login'} component={Login} />
                    <Route path={'/resume'} component={Resume} />
                    <Route component={NotFound} />
                </Switch>
            </main>
        </Router>
    );
};

App.propTypes = {
    children: PropTypes.object,
};

export default App;
