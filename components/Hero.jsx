import React from 'react';
import styles from '@/scss/components/Hero.module.scss';

const Hero = () => {
    return (
        <div className={styles.hero}>
            <h1 className={styles.title}>Seismic Quakes</h1>
            <div className={styles.buttonContainer}>
                <button className={styles.missionButton}>Explore the moon</button>
                <button className={styles.missionButton}>Explore Mars</button>
            </div>
            <p className={styles.description}>Choose your celestial destination and embark on an interplanetary adventure.</p>
        </div>
    );
};

export default Hero;