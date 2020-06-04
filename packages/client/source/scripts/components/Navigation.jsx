import React from 'react';
import {Link} from 'react-router-dom';

import style from '../../styles/postcss/main.pcss';
import scss from '../../styles/scss/main.scss';

const Navigation = () => {
    return (
        <nav>
            <div className={style['left-nav']}>
                <ul>
                    <li>
                        <Link to={'/'}>
                            <div className={scss['home-link']}>Home</div>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/reality'}>
                            <div className={scss['global-link']}>Reality</div>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/contact'}>
                            <div className={scss['global-link']}>Contact</div>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={style['right-nav']}>
                <Link to={'/signup'}>SignUp</Link>
                <Link to={'/login'}>Login</Link>
            </div>
        </nav>
    );
};

export default Navigation;
