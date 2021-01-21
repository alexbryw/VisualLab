import React, {useRef} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useFrame } from 'react-three-fiber'

const Rect = () => {
    const rotor = useRef()
    const sineMeter = useRef()
    const cosMeter = useRef()

    useFrame(() => {
        if(rotor && rotor.current) {
            rotor.current.rotation.z += 0.03
        }
        sineMeter.current.scale.y = Math.sin(rotor.current.rotation.z)
        sineMeter.current.position.y = Math.sin(rotor.current.rotation.z) / 2

        cosMeter.current.scale.x = Math.cos(rotor.current.rotation.z)
        cosMeter.current.position.x = Math.cos(rotor.current.rotation.z) / 2
        
    })
    return (
    <>
        <group ref={rotor} rotation={[0,0,THREE.Math.degToRad(0)]}>
            <mesh position={[0.5,0,0]} >
                <boxBufferGeometry attach="geometry" args={[1,0.1,1]}/>
                <meshStandardMaterial attach="material" color="orange"/>
            </mesh>
            {/* <mesh position={[-1,0,0]} rotation={[0,0,THREE.Math.degToRad(0)]}>
                <boxBufferGeometry attach="geometry" args={[1,0.1,1]}/>
                <meshStandardMaterial attach="material" color="orange"/>
            </mesh> */}
        </group>
        <mesh>
            <ringBufferGeometry attach="geometry" args={[1.1, 1.2, 32, 32]} />
            <meshStandardMaterial attach="material" color="orange"/>
        </mesh>
        <mesh ref={sineMeter} position={[1.3,0,0]} >
            <boxBufferGeometry attach="geometry" args={[0.1,1,0.1]}/>
            <meshStandardMaterial attach="material" color="blue"/>
        </mesh>
        <mesh ref={cosMeter} position={[0,-1.3,0]} >
            <boxBufferGeometry attach="geometry" args={[1,0.1,0.1]}/>
            <meshStandardMaterial attach="material" color="red"/>
        </mesh>
    </>
    )
}

export default Rect

const styles = StyleSheet.create({})
