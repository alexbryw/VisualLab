import React, { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { Canvas } from 'react-three-fiber';
import Plane from '../components/Plane'
import Box from '../components/Box'
// import Rect from '../components/Rect';

const ContentScreen = () => {
  const [boxPosition, setBoxPosition] = useState(1.2);

  return (
    <View style={styles.container}>
      <Canvas camera={{ position: [2, 2, 2] }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <fog attach="fog" args={["#041830", 5, 10]} />
        <gridHelper />
        <Plane />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[boxPosition, 0, 0]} />
        {/* <Rect /> */}
      </Canvas>
      <View style={styles.controllerContainer}>
        <View style={styles.buttonHolder}>
          <Button title="Up" onPress={() => setBoxPosition(boxPosition + 0.1)} />
          <Button title="Down" onPress={() => setBoxPosition(boxPosition - 0.1)} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  controllerContainer: {
    flex: 1,
    position: "absolute",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%",
    // height: "100%",
    // backgroundColor: "green",
    bottom: 0
  },
  buttonHolder: {
    flexDirection: "row"
  }
});

export default ContentScreen
