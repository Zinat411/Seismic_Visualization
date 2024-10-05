import React from 'react';
import Link from 'next/link';
import styles from '@/scss/components/Hero.module.scss';

const Hero = () => {
    return (
        <div className={styles.hero}>
            <h1 className={styles.title}>Seismic Quakes Visualization</h1>
            <div className={styles.buttonContainer}>
                <Link href="/simulations/Moon">
                    <button className={styles.missionButton}>Explore the moon</button>
                </Link>
                <Link href="/simulations/Mars">
                    <button className={styles.missionButton}>Explore Mars</button>
                </Link>
            </div>
            <p className={styles.description}>Choose your celestial destination and embark on an interplanetary adventure.</p>
        </div>
    );
};

export default Hero;
