import React, { useState } from 'react';
import { StyleSheet, View, Button, Text, Modal, TouchableHighlight } from 'react-native';
import { Canvas } from 'react-three-fiber';
// import Plane from '../components/Plane'
import UnitCircle from '../components/UnitCircle';
import { challengeLvl1 } from '../challengeData/challengeData'
import { Feather, FontAwesome } from '@expo/vector-icons'; 

const SineScreen = () => {
  const [rotate, setRotate] = useState(0);
  const [modalVisible, setModalVisible] = useState(true);
  const [wins, setWins] = useState(0)
  const [currentQuestionPos, setCurrentQuestionPos] = useState(0)
  const [questionVisible, setQuestionVisible] = useState(false)
  const [gameWon, setGameWon] = useState(false);
  const [showDegNr, setShowDegNr] = useState(true)
  const [showStart, setShowStart] = useState(false)

  const moveRotor = (moveDeg) => {
    setRotate(
      rotate + THREE.MathUtils.degToRad(moveDeg)
    )
  }

  const checkAnswer = () => {
    if(parseInt(THREE.MathUtils.radToDeg(rotate).toFixed(0)) === challengeLvl1[currentQuestionPos].answer) {
      // console.log("Correct! You Win!")
      setWins(wins + 1)
      nextQuestion()
    } else {
      // console.log("Wrong! You Loose!")
      nextQuestion()
    }
  }

  const nextQuestion = () => {
    if(currentQuestionPos + 1 < challengeLvl1.length) {
      setCurrentQuestionPos(currentQuestionPos + 1)
    } else {
      setQuestionVisible(false)
      setGameWon(true)
      setShowDegNr(true)
      console.log("Game Over, score ", wins)
    }
  }

  const startChallenge = () => {
    setShowStart(false)
    setQuestionVisible(true)
    setCurrentQuestionPos(0)
    setWins(0)
    setGameWon(false)
    setShowDegNr(false)
    setRotate(0)
  }

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          // Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Change angle with the buttons below to the side.</Text>
            <Text style={styles.modalText}>When you found the correct angle press the ENTER button.</Text>

            <TouchableHighlight
              style={styles.button}
              onPress={() => {
                setModalVisible(!modalVisible);
                setShowStart(true)
                // startChallenge()
              }}
            >
              <Text style={styles.modalButtonText}>Got it!</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
      <Canvas /*camera={{ position: [2, 2, 2] }}*/>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {/* <fog attach="fog" args={["#041830", 5, 10]} /> */}
        <gridHelper position={[0,-1.4,0]}/>
        {/* <Plane /> */}
        {/* <Box position={[-1.2, 0, 0]} />
        <Box position={[boxPosition, 0, 0]} /> */}
        <UnitCircle rotate={rotate} showDegNr={showDegNr} idleAnimation={showStart || gameWon}/>
      </Canvas>
      {showStart &&
        <View style={styles.showStart}>
          <TouchableHighlight
            style={styles.button}
            onPress={() => startChallenge()}>
            <Text style={styles.showStartButtonText}>START</Text>
          </TouchableHighlight>
        </View>
      }
      {questionVisible &&
        <View style={styles.questionHolder}>
          {/* <Text>{wins}</Text> */}
          <View style={styles.pointStarHolder}>
            {Array.from(Array(wins)).map((el, i) =>
                <FontAwesome key={i} name="star" size={24} color="black" />
            )}
          </View>
          <Text style={styles.questionText}>
            {(currentQuestionPos + 1).toString() + ": " + challengeLvl1[currentQuestionPos].question}
          </Text>
        </View>
      }
      {gameWon &&
        <View style={styles.gameWon}>
          <View style={styles.pointStarHolder}>
            {Array.from(Array(wins)).map((el, i) =>
                <FontAwesome key={i} name="star" size={24} color="black" />
            )}
          </View>
          <Text style={styles.questionText}>
            {wins + " points."}
          </Text>
          <TouchableHighlight
            style={styles.button}
            onPress={() => {
              setGameWon(false)
              setShowStart(true)
            }}>
            <Text style={styles.modalButtonText}>OK</Text>
          </TouchableHighlight>
        </View>
      }
      <View style={styles.controllerContainer}>
        <View style={styles.buttonHolder}>
          <TouchableHighlight onPress={() => moveRotor(5)}>
            <Feather name="rotate-ccw" size={42} color="black" />
          </TouchableHighlight>
          {/* <Button title="Up" onPress={() => moveRotor(5)} /> */}
          {/* <Text>{parseInt(THREE.MathUtils.radToDeg(rotate).toFixed(0))}°</Text> */}
          {/* <Button title="Down" onPress={() => moveRotor(-5)} /> */}
          <Button disabled={showStart || gameWon || currentQuestionPos === 0 && rotate == 0} title="Enter" onPress={() => checkAnswer()}/>
          <TouchableHighlight onPress={() => moveRotor(-5)}>
            <Feather name="rotate-cw" size={42} color="black" />
          </TouchableHighlight>
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
    bottom: 38,
    paddingHorizontal: 32,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: '#00C4EE',
  },
  questionHolder: {
    position: "absolute",
    marginTop: 72,
    // top: 0,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    
  },
  questionText: {
    backgroundColor: '#f8f8f8',
    // backgroundColor: "white",
    fontSize: 18,
    padding: 8,
    color: '#00C4EE',
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  showStart: {
    position: "absolute",
    marginTop: 112,
    // top: 0,
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  showStartButton: {
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 20
  },
  showStartButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  gameWon: {
    position: "absolute",
    marginTop: 42,
    // top: 0,
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonHolder: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 22,
    marginBottom: 64,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  modalButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    padding: 2,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 18,
    letterSpacing: 1.1,
  },
  pointStarHolder: {
    flexDirection: 'row',
  },
});

export default SineScreen
