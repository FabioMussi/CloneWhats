import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import FormCadastro from './components/FormCadastro';
import FormLogin from './components/FormLogin';
import BoasVindas from './components/BoasVindas';

export default () => (
    <Router>
        <Scene key="root">
            <Scene key="formLogin" component={FormLogin} title="Login" />
            <Scene key="formCadastro" component={FormCadastro} title="Cadastro" />
            <Scene key="boasVindas" component={BoasVindas} title="Boas Vindo" />
        </Scene>
    </Router>
);
