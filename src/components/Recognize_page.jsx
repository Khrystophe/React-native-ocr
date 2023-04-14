import React, {useState, useEffect} from 'react';
import {
  Dimensions,
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import TextRecognition from 'react-native-text-recognition';
import ImageCropPicker from 'react-native-image-crop-picker';
import {useNavigate} from 'react-router-dom';

const {width, height} = Dimensions.get('window');

const RecognizePage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/MyHomePage');
  };

  const [image, setImage] = useState(null);
  const [text, setText] = useState('');

  const selectImage = async () => {
    try {
      const result = await ImageCropPicker.openPicker({
        mediaType: 'photo',
        includeBase64: false,
        compressImageQuality: 0.5,
      });
      const croppedImage = await ImageCropPicker.openCropper({
        path: result.path,
        width: 200,
        height: 200,
      });
      setImage(croppedImage);
    } catch (error) {
      console.log(error);
    }
  };

  const takePicture = async () => {
    try {
      const result = await ImageCropPicker.openCamera({
        mediaType: 'photo',
        includeBase64: false,
        compressImageQuality: 0.5,
      });
      const croppedImage = await ImageCropPicker.openCropper({
        path: result.path,
        width: width * 1,
        height: height * 0.3,
      });
      setImage(croppedImage);
    } catch (error) {
      console.log(error);
    }
  };

  const recognizeText = async () => {
    if (image) {
      const result = await TextRecognition.recognize(image.path);
      setText(result);
    }
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
        {image ? (
          <View style={styles.imageContainer}>
            <Image source={{uri: image.path}} style={styles.image} />
          </View>
        ) : (
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require('../../assets/welcome.jpg')}
            />
          </View>
        )}
        {!image ? (
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.scanButton} onPress={takePicture}>
              <Text style={styles.buttonText}>Prendre une photo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.viewButton} onPress={selectImage}>
              <Text style={styles.buttonText}>Importer une image</Text>
            </TouchableOpacity>
            <View style={styles.logoutContainer}>
              <TouchableOpacity
                style={styles.logoutButton}
                onPress={handleGoHome}>
                <Text style={styles.buttonText}>Retour à l'accueil</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View style={styles.buttonsContainerRecognize}>
            {!text ? (
              <TouchableOpacity
                style={styles.scanButton}
                onPress={recognizeText}>
                <Text style={styles.buttonText}>Reconnaitre</Text>
              </TouchableOpacity>
            ) : (
              <Text style={styles.recognizedText}>{text}</Text>
            )}
            <TouchableOpacity
              style={styles.logoutButton}
              onPress={() => {
                setImage(null);
                setText('');
              }}>
              <View>
                <Text style={styles.buttonText}>Retour</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

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
  buttonsContainerRecognize: {
    flex: 7,
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
    marginTop: height * 0.03,
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
  recognizedText: {
    color: MyColors.primaryColor,
  },
});

export default RecognizePage;
