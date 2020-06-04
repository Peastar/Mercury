import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {withRouter} from 'react-router-dom';
//import fetch from 'cross-fetch'
//import * as actions from '../constants/action_types'

const SignUp = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const handleChange = (setter) => (e) => {
        setter(e.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        setLoading(true);

        console.log(email);

        const inputData = {
            query: `mutation {
                        createUser(userInput: {
                            email: "${email}"
                            password: "${password}"
                            confirm: "${confirm}"
                        }) {
                            _id
                            token
                            email
                        }
                    }`,
        };

        console.log(inputData);

        const requestOptions = {
            mode: 'cors',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inputData),
        };

        console.log(requestOptions);

        /*fetch('http://localhost:3000/graphql', requestOptions)
            .then(res => {
                console.log(res);
                if (res.status >= 400) {
                    throw new Error('Bad response from server');
                }
                return res.json();
            })
            .then(user => {
                console.log(user);
            })
            .catch(err => {
                console.error(err);
            });*/

        // try {
        //
        //
        //     const data = await fetch('http://localhost:3000/graphql', requestBody);
        //
        //     console.log(data);
        //
        //     if (data.errors) {
        //         setError(data.errors[0].message);
        //         setLoading(false);
        //     } else {
        //         setError(null);
        //         setLoading(false);
        //         const { _id, token } = await data.data.createUser;
        //
        //         dispatch({
        //             type: actions.SET_AUTH_USER,
        //             authUser: {
        //                 _id,
        //                 email
        //             }
        //         });
        //         localStorage.setItem('token', token);
        //         //props.history.push('/');
        //     }
        // }
        // catch (e) {
        //     setError(e);
        //     setLoading(false);
        // }
    };

    return (
        <div>
            <h1>Sign up</h1>
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
                    value={password}
                    onChange={handleChange(setPassword)}
                />
                <input
                    type="password"
                    placeholder="Confirm password"
                    value={confirm}
                    onChange={handleChange(setConfirm)}
                />
                <div>
                    <span>{error || ''}</span>
                </div>
                <input
                    type="submit"
                    value={loading ? 'Verifying...' : 'Register'}
                />
            </form>
        </div>
    );
};

export default withRouter(SignUp);
