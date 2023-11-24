import { StatusBar } from 'expo-status-bar';
import { Component } from 'react'; 
import { Actions } from 'react-native-router-flux';
import { validationEmail,validationPassword,validationEmpty } from './Validation';
import { StyleSheet, View, Text, Button, TextInput, Alert, Image} from 'react-native';

export default class LoginView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      textEmail: '',
      textPassword: '',
    }
  }

  onChangeEmail = (email) => {
    this.setState({textEmail: email})
    const emailValid = validationEmail(email)

    if(!emailValid)
      return 'Correro electronico no valido'
  }

  onChangePassword = (password) => {
    this.setState({textPassword: password})
    const passwordValid = validationPassword(password)

    if(!passwordValid)
      return 'La contraseña incorrecta. Asegurese de que contenga almenos 8 caracteres conformados por mayúsculas, mínusculas y un caracter especial'
  }
  
  textEmpty = (email,password) => {
    return validationEmpty(email)||validationEmpty(password)
  }

  showAlert () {
    const mesageEmail = this.onChangeEmail(this.state.textEmail)
    const messagePassword = this.onChangePassword(this.state.textPassword)
    if(mesageEmail||messagePassword)
      Alert.alert('Información invalida',mesageEmail||messagePassword);
    else
      Actions.home()
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.img}
          source={require('../assets/descarga.jpg')} 
        />
        
        <Text style={styles.text}>Email: </Text>
        <TextInput 
          style={styles.input}
          onChangeText={(text)=> this.onChangeEmail(text)}
          value = {this.state.textEmail}
        />

        <Text style={styles.text}>Password: </Text>
        <TextInput 
          style={styles.input}
          autoCapitalize='none'
          secureTextEntry={true}
          onChangeText={(text)=> this.onChangePassword(text)}
          value = {this.state.textPassword}
        />

        <Button 
          onPress={this.showAlert.bind(this)}
          title="Login"
          color= "#FEBC5D"
          disabled={this.textEmpty(this.state.textEmail,this.state.textPassword)}
          accessibilityLabel="Learn more about this button"
        />

        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  img:{
    width: 350,
    height: 350,
    marginBottom: 25,
  },

  text:{
    width: 280,
    textAlign: 'left',
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000000',
  },

  input: { 
    height: 40,
    width: 300,
    margin: 12,
    paddingLeft:12,
    backgroundColor: '#F0EFED',
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.5,
    elevation: 5,
  },
});