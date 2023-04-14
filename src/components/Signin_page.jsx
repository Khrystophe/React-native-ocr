import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Dimensions} from 'react-native';
import {useNavigate} from 'react-router-dom';

const SigninPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/MyHomePage');
  };

  const handleForgotPassword = () => {
    // navigation.navigate('PasswordRecoveryPage');
  };

  // const handleTouchId = () => {
  //   authenticate().then(isAuthenticated => {
  //     if (isAuthenticated) {
  //       navigation.replace('MyHomePage');
  //     }
  //   });
  // };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/ark+net.png')} />
      <TextInput
        style={styles.input}
        placeholder="Adresse e-mail"
        placeholderTextColor="#1775A3"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        placeholderTextColor="#1775A3"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Se connecter</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotPassword}>Mot de passe oublié ?</Text>
      </TouchableOpacity>
      <View style={styles.touchIdContainer}>
        <Text style={styles.touchIdText}>Se connecter avec TouchID</Text>
        <TouchableOpacity style={styles.touchIdButton}>
          <Image
            style={styles.touchIdIcon}
            source={require('../../assets/baseline_fingerprint_white_24dp.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const MyColors = {
  primaryColor: '#1775A3',
  secondaryColor: '#7c8798',
  secondaryColorWithOpacity: '#7c879882',
};

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    maxWidth: screenWidth * 0.7,
    maxHeight: screenWidth * 0.7,
  },
  input: {
    width: screenWidth * 0.7,
    height: 50,
    backgroundColor: MyColors.secondaryColorWithOpacity,
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
    color: 'black',
    marginBottom: 30,
    borderColor: MyColors.primaryColor,
    borderWidth: 1,
  },
  button: {
    width: screenWidth * 0.5,
    height: 50,
    backgroundColor: MyColors.primaryColor,
    borderRadius: 5,
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  forgotPassword: {
    color: MyColors.primaryColor,
    textDecorationLine: 'none',
    marginBottom: 25,
  },
  touchIdContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  touchIdText: {
    color: MyColors.primaryColor,
    marginBottom: 10,
  },
  touchIdButton: {
    borderRadius: 12,
    padding: 0,
    margin: 0,
    minWidth: 0,
  },
  touchIdIcon: {
    backgroundColor: MyColors.primaryColor,
    borderRadius: 12,
  },
});

export default SigninPage;
