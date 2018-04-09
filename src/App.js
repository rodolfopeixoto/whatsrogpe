import React from 'react';
import { Navigation } from 'react-native-navigation';
import FormLogin from './components/FormLogin';
import FormCadastro from './components/FormCadastro';

export default () => {
    Navigation.registerComponent('FormLogin', () => FormLogin);
    Navigation.registerComponent('FormCadastro', () => FormCadastro);

    Navigation.startSingleScreenApp({
        screen: {
            screen: 'FormLogin',
            title: 'Login'
        }
    });
}