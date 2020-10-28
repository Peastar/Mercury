import React from 'react';
import {
    // useHistory,
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import history from 'history/browser';
import Home from './Home';
import Reality from './Reality';
import Contact from './Contact';
import SignUp from './SignUp';
import Login from './Login';
import Resume from './Resume';
// import Navigation from './Navigation';
import NotFound from './NotFound';
import {AddEmployee} from './AddEmployee';
import {EditEmployee} from './EditEmployee';
import {EmployeeList} from './EmployeeList';
import {GlobalProvider} from '../context/globalstate';

import '../../styles/scss/main.scss';

const App = () => {
    // let history = useHistory();
    let location = history.location;
    console.log(location);
    // let unlisten = history.listen(({location, action}) => {
    //     console.log(action, location.pathname, location.state);
    // });
    // unlisten();
    return (
        <Router>
            {/*<header>*/}
            {/*    <Navigation />*/}
            {/*</header>*/}
            <main>
                <GlobalProvider>
                    <Switch>
                        <Route exact path={'/'} component={Home} />
                        <Route path={'/reality'} component={Reality} />
                        <Route path={'/contact'} component={Contact} />
                        <Route path={'/signup'} component={SignUp} />
                        <Route path={'/login'} component={Login} />
                        <Route path={'/resume'} component={Resume} />
                        <Route path="/add" component={AddEmployee} />
                        <Route path="/edit/:id" component={EditEmployee} />
                        <Route path="/list" component={EmployeeList} />
                        <Route component={NotFound} />
                    </Switch>
                </GlobalProvider>
            </main>
        </Router>
    );
};

App.propTypes = {
    children: PropTypes.object,
};

export default App;
