import React from 'react';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { useDataContext } from '@/hooks/useDataContext';

const Mars = () => {
    const { heightMap } = useDataContext();
    const marsTexture = useLoader(TextureLoader, '/assets/mars.png');
    const heightMapTexture = useLoader(TextureLoader, '/assets/height-mars.jpg');

    return (
        <>
            <mesh>
                <sphereGeometry
                    attach='geometry'
                    args={[2, 64, 64, -Math.PI / 2]}
                />
                <meshStandardMaterial
                    map={heightMap === true ? heightMapTexture : marsTexture}
                    wireframe={false}
                />
            </mesh>
        </>
    );
};

export default Mars;
