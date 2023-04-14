import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useNavigate} from 'react-router-dom';

const MyHomePage = () => {
  const navigate = useNavigate();

  const handleScan = () => {
    navigate('/RecognizePage');
  };

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <Image
          style={styles.imageApp}
          source={require('../../assets/arketeam.png')}
        />
        <Text style={styles.title}>NET'NDF</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../../assets/welcome.jpg')}
          />
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={handleScan} style={styles.scanButton}>
            <Text style={styles.buttonText}>Scanner un justificatif</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.viewButton}>
            <Text style={styles.buttonText}>Consulter mes justificatifs</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.logoutContainer}>
          <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
            <Text style={styles.logoutText}>Se déconnecter</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const {width, height} = Dimensions.get('window');

const MyColors = {
  primaryColor: '#1775A3',
  secondaryColor: '#7c8798',
  secondaryColorWithOpacity: 'rgba(137, 124, 135, 152)',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  appBar: {
    height: height * 0.07,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: MyColors.primaryColor,
    display: 'flex',
    flexDirection: 'row',
  },
  imageApp: {
    width: 70,
    height: 35,
    marginRight: 10,
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
  },
  content: {
    flex: 1,
  },
  imageContainer: {
    flex: 5,
  },
  image: {
    width: width * 1,
    height: height * 0.3,
    resizeMode: 'cover',
  },
  buttonsContainer: {
    flex: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanButton: {
    width: width * 0.7,
    height: height * 0.07,
    backgroundColor: MyColors.primaryColor,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: height * 0.09,
    marginTop: height * 0.09,
  },
  viewButton: {
    width: width * 0.7,
    height: height * 0.07,
    backgroundColor: MyColors.primaryColor,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: height * 0.03,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  logoutContainer: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutButton: {
    width: width * 0.55,
    height: height * 0.07,
    backgroundColor: MyColors.secondaryColor,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default MyHomePage;
