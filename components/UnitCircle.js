import React, {useRef} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useFrame } from 'react-three-fiber'
import RobotoFont from '../fonts/Roboto_Medium_Regular.json'

const font = new THREE.FontLoader().parse(RobotoFont)

const textOptions = {
    font,
    size: 0.1,
    height: 0.02
  };

const UnitCircle= ({ rotate = 0 }) => {
    // const rotor = useRef()
    // const sineMeter = useRef()
    // const cosMeter = useRef()


    useFrame(() => {
        // // console.log(rotate)
        // if(rotor && rotor.current) {
        //     // rotor.current.rotation.z += 0.03
        //     rotor.current.rotation.z = rotate

        // }
        // sineMeter.current.scale.y = Math.sin(rotor.current.rotation.z)
        // sineMeter.current.position.y = Math.sin(rotor.current.rotation.z) / 2

        // cosMeter.current.scale.x = Math.cos(rotor.current.rotation.z)
        // cosMeter.current.position.x = Math.cos(rotor.current.rotation.z) / 2
        
    })

    return (
        <>
            /*center offset rotor. */
            <group /*ref={rotor}*/ rotation={[0,0,rotate]}>
                <mesh position={[0.5,0,0]} >
                    <boxBufferGeometry attach="geometry" args={[1,0.1,1]}/>
                    <meshStandardMaterial attach="material" color="orange"/>
                </mesh>
            </group>
            <mesh>
                <ringBufferGeometry attach="geometry" args={[1.1, 1.2, 32, 32]} />
                <meshStandardMaterial attach="material" color="orange"/>
            </mesh>

            /*Sine bar. */
            <mesh /*ref={sineMeter}*/ position={[1.4,(Math.sin(rotate) / 2),0]} scale={[1, Math.sin(rotate), 1]} >
                <boxBufferGeometry attach="geometry" args={[0.1,1,0.1]}/>
                <meshStandardMaterial attach="material" color="blue"/>
            </mesh>

            /*Cos bar. */
            <mesh /*ref={cosMeter}*/ position={[(Math.cos(rotate) / 2),-1.45,0]} scale={[Math.cos(rotate), 1, 1]} >
                <boxBufferGeometry attach="geometry" args={[1,0.1,0.1]}/>
                <meshStandardMaterial attach="material" color="red"/>
            </mesh>

            /*Sine  3D number. */
            <mesh position={[1.5,0.2,0]}>
            <textGeometry attach='geometry' args={[" sin \n" + Math.sin(rotate).toFixed(3), textOptions]} />
                <meshStandardMaterial attach='material' />
            </mesh>

            /*cos  3D number. */
            <mesh position={[0,-1.65,0]}>
                <textGeometry attach='geometry' args={["cos " + Math.cos(rotate).toFixed(3), textOptions]} />
                <meshStandardMaterial attach='material' />
            </mesh>

            /*Marker 0deg */
            <mesh position={[1.1,0,0]} >
                <boxBufferGeometry attach="geometry" args={[0.1,0.1,0.1]}/>
                <meshStandardMaterial attach="material" color="green"/>
            </mesh>

            /*Marker 0deg 3D number. */
            <mesh position={[1.22,0,0]}>
                <textGeometry attach='geometry' args={["0°", textOptions]} />
                <meshStandardMaterial attach='material' />
            </mesh>

            /*Marker 90deg */
            <mesh position={[0,1.1,0]} >
                <boxBufferGeometry attach="geometry" args={[0.1,0.1,0.1]}/>
                <meshStandardMaterial attach="material" color="green"/>
            </mesh>
            
            /*Marker 90deg 3D number. */
            <mesh position={[0,1.22,0]}>
                <textGeometry attach='geometry' args={["90°", textOptions]} />
                <meshStandardMaterial attach='material' />
            </mesh>

            /*Marker 180deg */
            <mesh position={[-1.1,0,0]} >
                <boxBufferGeometry attach="geometry" args={[0.1,0.1,0.1]}/>
                <meshStandardMaterial attach="material" color="green"/>
            </mesh>

            /*Marker 180deg 3D number. */
            <mesh position={[-1.5,0,0]}>
                <textGeometry attach='geometry' args={["180°", textOptions]} />
                <meshStandardMaterial attach='material' />
            </mesh>

            /*Marker 270deg */
            <mesh position={[0,-1.1,0]} >
                <boxBufferGeometry attach="geometry" args={[0.1,0.1,0.1]}/>
                <meshStandardMaterial attach="material" color="green"/>
            </mesh>

            /*Marker 270deg 3D number. */
            <mesh position={[0,-1.3,0.2]}>
                <textGeometry attach='geometry' args={["270°", textOptions]} />
                <meshStandardMaterial attach='material' />
            </mesh>

            /*Marker 45deg */
            <mesh position={[0.78,0.78,0]} rotation={[0,0,THREE.MathUtils.degToRad(45)]}>
                <boxBufferGeometry attach="geometry" args={[0.1,0.1,0.1]}/>
                <meshStandardMaterial attach="material" color="green"/>
            </mesh>

            /*Marker 45deg 3D number. */
            <mesh position={[0.9,0.9,0]}>
                <textGeometry attach='geometry' args={["45°", textOptions]} />
                <meshStandardMaterial attach='material' />
            </mesh>
            
            /*Marker 135deg */
            <mesh position={[-0.78,0.78,0]} rotation={[0,0,THREE.MathUtils.degToRad(45)]}>
                <boxBufferGeometry attach="geometry" args={[0.1,0.1,0.1]}/>
                <meshStandardMaterial attach="material" color="green"/>
            </mesh>

            /*Marker 135deg 3D number. */
            <mesh position={[-1,1,0]}>
                <textGeometry attach='geometry' args={["135°", textOptions]} />
                <meshStandardMaterial attach='material' />
            </mesh>

            /*Marker 225deg */
            <mesh position={[-0.78,-0.78,0]} rotation={[0,0,THREE.MathUtils.degToRad(45)]}>
                <boxBufferGeometry attach="geometry" args={[0.1,0.1,0.1]}/>
                <meshStandardMaterial attach="material" color="green"/>
            </mesh>

            /*Marker 225deg 3D number. */
            <mesh position={[-1.1,-1.1,0]}>
                <textGeometry attach='geometry' args={["225°", textOptions]} />
                <meshStandardMaterial attach='material' />
            </mesh>

            
            /*Marker 315deg */
            <mesh position={[0.78,-0.78,0]} rotation={[0,0,THREE.MathUtils.degToRad(45)]}>
                <boxBufferGeometry attach="geometry" args={[0.1,0.1,0.1]}/>
                <meshStandardMaterial attach="material" color="green"/>
            </mesh>

            /*Marker 315deg 3D number. */
            <mesh position={[1,-1,0]}>
                <textGeometry attach='geometry' args={["315°", textOptions]} />
                <meshStandardMaterial attach='material' />
            </mesh>
        </>
    )
}

export default UnitCircle

const styles = StyleSheet.create({})
