import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default props => (
  <View style={{ flex: 1, padding: 10}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{ fontSize: 25}}>Whatsrogpe</Text>
      </View>
      <View style={{flex: 2}}>
          <TextInput style={{ fontSize: 20, height: 45 }} placeholder="E-mail" />
          <TextInput style={{ fontSize: 20, height: 45 }} placeholder="Senha" />
         <Text style={{ fontSize: 20 }}>Ainda não tem cadastro? Cadastre-se!</Text>
      </View>
       <View style={{flex: 2}}> 
          <Button title="Acessar" onPress={ () => false } />
      </View>
  </View>
);