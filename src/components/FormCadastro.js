import React, {Component} from 'react';
import {
    Button,
    Image,
    StyleSheet,
    TextInput,
    View,
    Text
} from 'react-native';
import {connect} from 'react-redux';
import {
    modificaEmail,
    modificaNome,
    modificaSenha,
    cadastrarUsuario
} from "../actions/AutenticacaoActions";
import imgBackground from '../imgs/bg.png';

class formCadastro extends Component {

    _cadastrarUsuario() {
        const {nome, email, senha} = this.props;
        this.props.cadastrarUsuario({nome, email, senha});
    }

    render() {
        return (
            <Image style={styles.imgBackground} source={imgBackground}>
                <View style={styles.container}>
                    <View style={styles.fieldsContainers}>
                        <TextInput value={this.props.nome} onChangeText={texto => this.props.modificaNome(texto)}
                                   style={styles.txtInput}
                                   placeholder="Nome" placeholderTextColor='#fff'/>
                        <TextInput value={this.props.email} onChangeText={texto => this.props.modificaEmail(texto)}
                                   style={styles.txtInput}
                                   placeholder="E-mail" placeholderTextColor='#fff'/>
                        <TextInput secureTextEntry value={this.props.senha}
                                   onChangeText={texto => this.props.modificaSenha(texto)}
                                   style={styles.txtInput}
                                   placeholder="Senha" placeholderTextColor='#fff'/>
                        <Text style={styles.errorCadastro}>{this.props.erroCadastro}</Text>
                    </View>

                    <View style={styles.buttonContainer}>
                        <Button title="Cadastrar" color="#115E54" onPress={() => this._cadastrarUsuario()}/>
                    </View>
                </View>
            </Image>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    fieldsContainers: {
        flex: 4,
        justifyContent: 'center'
    },
    buttonContainer: {
        flex: 1
    },
    txtInput: {
        fontSize: 20,
        height: 45
    },
    imgBackground: {
        flex: 1,
        width: null,
        height: null
    },
    errorCadastro: {
        color: 'red',
        fontSize: 18
    }
});

const mapsStateToProps = state => ({
    email: state.auth.email,
    nome: state.auth.nome,
    senha: state.auth.senha,
    erroCadastro: state.auth.erroCadastro
});

export default connect(mapsStateToProps, {
    modificaEmail,
    modificaSenha,
    modificaNome,
    cadastrarUsuario
})(formCadastro);
