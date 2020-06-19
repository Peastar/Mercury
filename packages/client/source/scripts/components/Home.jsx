import React from 'react';
import {withRouter} from 'react-router-dom';

import style from '../../styles/scss/main.scss';

const Home = () => {
    return <div className={style['full-image']} />;
};

export default withRouter(Home);
