import { useState, useEffect } from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity
} from 'react-native';
import { Camera } from 'expo-camera';

export default function RecordScreen() {
  const [hasPermissions, setHasPermissions] = useState(false);
  const [type, setType] = useState(Camera.Constants.Type.back);

  const getCameraPermissions = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    return status;
  };

  const getMicrophonePermissions = async () => {
    const { status } = await Camera.requestMicrophonePermissionsAsync();
    return status;
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
    return <Text>Permissions for camera and microphone are required to record</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type}>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            <Text style={styles.text}> Flip </Text>
          </TouchableOpacity>
        </View>

      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    alignSelf: 'flex-end',
    flex: 0.1
  },
  buttonContainer: {
    backgroundColor: 'transparent',
    flex: 1,
    flexDirection: 'row',
    margin: 20
  },
  camera: {
    flex: 1
  },
  container: {
    flex: 1
  },
  text: {
    color: '#ffffff',
    fontSize: 18
  }
});
