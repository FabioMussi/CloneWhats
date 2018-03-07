import {Platform} from 'react-native';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore, compose} from 'redux';
import React, {Component} from 'react';
import Routes from './Routes';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import devTools from 'remote-redux-devtools';

class App extends Component {

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyCYjUc-T0HgAhp7Fj3fm1Tun-aRW2DT2VU",
            authDomain: "whatsapp-clone-f13dd.firebaseapp.com",
            databaseURL: "https://whatsapp-clone-f13dd.firebaseio.com",
            projectId: "whatsapp-clone-f13dd",
            storageBucket: "whatsapp-clone-f13dd.appspot.com",
            messagingSenderId: "473623928431"
        });
    }

    render() {

        // const composeEnhancers = composeWithDevTools({realtime: true, port: 8181});

        const enhancer = compose(
            applyMiddleware(ReduxThunk),
            devTools({
                name: Platform.OS,
                hostname: '192.168.0.100',
                port: 8000
            })
        );

        return (
            <Provider store={createStore(reducers, {}, enhancer)}>
                <Routes/>
            </Provider>
        );
    }
}

export default App;
