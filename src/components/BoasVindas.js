import React, {Component} from 'react';
import{Actions} from 'react-native-router-flux';

import {
    View,
    Text,
    Button,
    Image
} from 'react-native';

class boasVindas extends Component {
    render() {
        return (
            <Image style={{flex: 1, width: null, height: null}} source={require('../imgs/bg.png')}>
                <View style={{flex: 1, padding: 15}}>
                    <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontSize: 20, color: '#fff'}}>Seja bem vindo</Text>
                        <Image
                            source={require('../imgs/logo.png')}
                        />
                    </View>
                    <View style={{flex: 1}}>
                        <Button
                            title='Fazer login'
                            onPress={() => Actions.formLogin()}
                        />
                    </View>
                </View>
            </Image>
        );
    }
}

export default boasVindas;
