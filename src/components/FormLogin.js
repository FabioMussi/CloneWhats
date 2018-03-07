import React from 'react';
import {Button, Image, StyleSheet, Text, TextInput, TouchableHighlight, View} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import {modificaEmail, modificaSenha} from "../actions/AutenticacaoActions";
import imgBackground from '../imgs/bg.png';

const formLogin = (props) => {
    console.log(props);
    return (
        <Image style={styles.imgBackground} source={imgBackground}>
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>WhatsApp Clone</Text>
                </View>
                <View style={styles.fieldsContainer}>
                    <TextInput value={props.email} onChangeText={(texto) => props.modificaEmail(texto)} style={styles.txtInput}
                               placeholder='E-mail' placeholderTextColor='#fff'/>
                    <TextInput secureTextEntry onChangeText={texto => props.modificaSenha(texto)}
                               style={styles.txtInput} placeholder='Senha' placeholderTextColor='#fff'/>
                    <TouchableHighlight onPress={Actions.formCadastro}>
                        <Text style={styles.txtCadastrar}>Ainda nao tem cadastro? Cadastre-se</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.buttonContainer}>
                    <Button title='Acessar' color='#115E54' onPress={() => false}/>
                </View>
            </View>
        </Image>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    titleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 25,
        color: '#fff'
    },
    fieldsContainer: {
        flex: 2
    },
    txtInput: {
        fontSize: 20,
        height: 45
    },
    txtCadastrar: {
        fontSize: 20,
        color: '#fff'
    },
    buttonContainer: {
        flex: 2
    },
    imgBackground: {
        flex: 1,
        width: null,
        height: null
    }
});

const mapStateToProps = state => {
    return ({
        email: state.auth.email,
        senha: state.auth.senha
    });
};


export default connect(mapStateToProps, {modificaEmail, modificaSenha})(formLogin);
