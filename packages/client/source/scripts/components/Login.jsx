import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import fetch from 'cross-fetch';
import * as actions from '../constants/action_types';

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const handleChange = (setter) => (e) => {
        setter(e.target.value);
    };

    const submit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const requestBody = {
                query: `
                    query {
                        login(email: "${email}", password: "${password}") {
                            _id
                            token
                            email
                        }
                    }
                `,
            };

            const {data} = await fetch('http://localhost/graphql', requestBody);

            if (data.errors) {
                setError(data.errors[0].message);
                setLoading(false);
            } else {
                setError(null);
                setLoading(false);
                const {_id, token} = await data.data.login;

                dispatch({
                    type: actions.SET_AUTH_USER,
                    authUser: {
                        _id,
                        email,
                    },
                });
                localStorage.setItem('token', token);
                props.history.push('/');
            }
        } catch (err) {
            setError(err);
            setLoading(false);
        }
    };
    return (
        <>
            <h1>Login</h1>
            <form onSubmit={submit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleChange(setEmail)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    onChange={handleChange(setPassword)}
                />
                <input type="submit" value="Login" />
            </form>
        </>
    );
};

export default withRouter(Login);
