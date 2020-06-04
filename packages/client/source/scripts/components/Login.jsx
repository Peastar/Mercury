import React from 'react';
import {withRouter} from 'react-router-dom';

const Login = () => {
    return (
        <>
            <h1>Login</h1>
            <form>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input type="submit" value="Login" />
            </form>
        </>
    );
};

export default withRouter(Login);
