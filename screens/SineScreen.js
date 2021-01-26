import React, { useState } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import { Canvas } from 'react-three-fiber';
import Plane from '../components/Plane'
// import Box from '../components/Box'
import UnitCircle from '../components/UnitCircle';
import { challengeLvl1 } from '../challengeData/challengeData'

const SineScreen = () => {
  const [rotate, setRotation] = useState(0);

  const moveRotor = (moveDeg) => {
    setRotation(
      rotate + THREE.MathUtils.degToRad(moveDeg)
    )
  }

  const checkAnswer = () => {
    console.log("Checking answer ", THREE.MathUtils.radToDeg(rotate).toFixed(3))
    console.log(parseInt(THREE.MathUtils.radToDeg(rotate)))
    console.log(challengeLvl1[0].answer)
    // console.log(challengeLvl1)
    if(parseInt(THREE.MathUtils.radToDeg(rotate).toFixed(0)) === challengeLvl1[0].answer) {
      console.log("Correct! You Win!")
    } else {
      console.log("Wrong! You Loose!")
    }
  }

  return (
    <View style={styles.container}>
      <Canvas /*camera={{ position: [2, 2, 2] }}*/>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {/* <fog attach="fog" args={["#041830", 5, 10]} /> */}
        <gridHelper position={[0,-1.4,0]}/>
        {/* <Plane /> */}
        {/* <Box position={[-1.2, 0, 0]} />
        <Box position={[boxPosition, 0, 0]} /> */}
        <UnitCircle rotate={rotate} />
      </Canvas>
      <View style={styles.controllerContainer}>
        <View style={styles.buttonHolder}>
          <Button title="Up" onPress={() => moveRotor(5)} />
          <Text>{parseInt(THREE.MathUtils.radToDeg(rotate).toFixed(0))}°</Text>
          <Button title="Down" onPress={() => moveRotor(-5)} />
          <Button title="Enter" onPress={() => checkAnswer()}/>
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

export default SineScreen
