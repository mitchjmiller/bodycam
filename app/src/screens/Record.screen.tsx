import { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import AppLoading from 'expo-app-loading';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useIsFocused } from '@react-navigation/native';
import Styles from '../styles/Styles';

export default function RecordScreen() {
  const [hasPermissions, setHasPermissions] = useState(false);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [recording, setRecording] = useState(false);
  const focused = useIsFocused();

  const getCameraPermissions = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    return status;
  };

  const getMicrophonePermissions = async () => {
    const { status } = await Camera.requestMicrophonePermissionsAsync();
    return status;
  };

  const toggleCamera = () => {
    const newType = type === Camera.Constants.Type.back
      ? Camera.Constants.Type.front
      : Camera.Constants.Type.back;
    setType(newType);
  };

  useEffect(() => {
    (async () => {
      console.log('Requesting camera and microphone permissions...');
      const cameraStatus = await getCameraPermissions();
      const micStatus = await getMicrophonePermissions();

      console.log(`Camera ${cameraStatus}, Microphone ${micStatus}`);
      setHasPermissions(cameraStatus === 'granted' && micStatus === 'granted');
    })();
  }, []);

  if (hasPermissions === false) {
    return <AppLoading />;
  }

  return (
    <View style={Styles.flexOne}>
      {focused && <Camera style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>

          <TouchableOpacity style={styles.recordButton} onPress={() => setRecording(!recording)} >
            <MaterialCommunityIcons name={recording ? 'checkbox-blank-circle-outline' : 'checkbox-blank-circle'} color="#CD0000" size={52} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.flipButton} onPress={toggleCamera} >
            <MaterialCommunityIcons name={type === Camera.Constants.Type.back ? 'camera-rear-variant' : 'camera-front-variant'} color="white" size={32} />
          </TouchableOpacity>

        </View>
      </Camera>}
    </View>
  );
}

const styles = StyleSheet.create({
  camera: {
    ...Styles.flexOne
  },
  buttonContainer: {
    ...Styles.flexOne,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 32
  },
  flipButton:{
    flex: 0.1,
    position: 'absolute',
    right: 0,
    bottom: 0
  },
  recordButton: {
    flex: 0.16,
    alignSelf: 'flex-end'
  }
});
