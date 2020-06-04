import React from 'react';
import {withRouter} from 'react-router-dom';

import scss from '../../styles/scss/main.scss';

const Home = () => {
    return <div className={scss['full-image']} />;
};

export default withRouter(Home);
