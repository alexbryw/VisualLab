import React, {useRef} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useFrame } from 'react-three-fiber'

const Rect = () => {
    const group = useRef()

    useFrame(() => {
        if(group && group.current) {
            group.current.rotation.z += 0.03
        }
    })
    return (
    <>
        <group ref={group} rotation={[0,0,THREE.Math.degToRad(0)]}>
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
    </>
    )
}

export default Rect

const styles = StyleSheet.create({})
