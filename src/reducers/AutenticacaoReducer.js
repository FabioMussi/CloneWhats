const INITIAL_STATE = {
    nome: '',
    email: '',
    senha: '',
    erroCadastro: ''
};

export default (state = INITIAL_STATE, action) => {
    console.log(state, action);
    switch (action.type) {
        case 'modifica_email':
            return {...state, email: action.payload};
        case 'modifica_senha':
            return {...state, senha: action.payload};
        case 'modifica_nome':
            return {...state, nome: action.payload};
        case 'cadastro_usuario_erro':
            return {...state, erroCadastro: action.payload};
        case 'cadastro_usuario_success':
            return {...state, nome: '', senha: '', erroCadastro: ''};
    }
    return state;
}
