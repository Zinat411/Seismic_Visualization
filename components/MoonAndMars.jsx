import React, { useRef } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { TextureLoader } from 'three';

const Planet = ({ initialPosition, size, textureUrl, orbitRadius, orbitSpeed }) => {
    const meshRef = useRef();
    const texture = useLoader(TextureLoader, textureUrl);

    useFrame(({ clock }) => {
        if (meshRef.current) {
            const t = clock.getElapsedTime() * orbitSpeed;
            meshRef.current.position.x = Math.cos(t) * orbitRadius;
            meshRef.current.position.z = Math.sin(t) * orbitRadius;
            meshRef.current.rotation.y += 0.01;
        }
    });

    return (
        <mesh ref={meshRef} position={initialPosition}>
            <sphereGeometry args={[size, 32, 32]} />
            <meshStandardMaterial map={texture} />
        </mesh>
    );
};

const MoonAndMars = () => {
    return (
        <group>
            <Planet
                initialPosition={[-6, 0, 0]}
                size={2}
                textureUrl="/assets/moon.jpg"
                orbitRadius={6}
                orbitSpeed={0.2}
            />
            <Planet
                initialPosition={[12, 0, 0]}
                size={3}
                textureUrl="/assets/mars.png"
                orbitRadius={12}
                orbitSpeed={0.1}
            />
        </group>
    );
};

export default MoonAndMars;