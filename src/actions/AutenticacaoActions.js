import firebase from 'firebase';
import {Actions} from 'react-native-router-flux'

export const modificaEmail = (texto) => {
    return {
        type: 'modifica_email',
        payload: texto
    };
};

export const modificaSenha = (texto) => {
    return {
        type: 'modifica_senha',
        payload: texto
    };
};

export const modificaNome = (texto) => {
    return {
        type: 'modifica_nome',
        payload: texto
    };
};

export const cadastrarUsuario = ({nome, email, senha}) => {
    return dispatch => {
        firebase.auth().createUserWithEmailAndPassword(email, senha)
            .then(user => cadastrarUsuarioSucesso(dispatch))
            .catch(erro => cadastrarUsuarioErro(erro, dispatch));
    };
};

const cadastrarUsuarioSucesso = (dispatch) => {
    dispatch({type: 'cadastro_usuario_success'});
    Actions.boasVindas();
};

const cadastrarUsuarioErro = (erro, dispatch) => {
    dispatch({type: 'cadastro_usuario_erro', payload: erro.message});
};


