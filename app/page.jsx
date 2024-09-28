'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import Environment from '@/components/Environment';
import SolarSystem from '@/components/MoonAndMars'; // We'll create this
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import { DataContextProvider } from '@/contexts/DataContext';
import styles from '@/scss/pages/HomePage.module.scss';

const HomePage = () => {
    return (
        <DataContextProvider>
            <main className={styles.homePageContainer}>
                <Canvas camera={{ fov: 60, position: [0, 0, 25] }}>
                    <OrbitControls autoRotate={false} />
                    <ambientLight intensity={0.5}/>
                    <pointLight position={[10, 10, 10]} intensity={1}/>
                    <Environment />
                    <SolarSystem />
                </Canvas>
                <Navbar />
                <Hero />
            </main>
        </DataContextProvider>
    );
};

export default HomePage;