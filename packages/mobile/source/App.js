/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NativeModules} from 'react-native';

import Home from './Home';

console.log(NativeModules);

const App: () => React$Node = () => {
    return (
        <>
            <Home />
        </>
    );
};

export default App;
