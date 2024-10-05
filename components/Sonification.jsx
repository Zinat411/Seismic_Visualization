import React, { useEffect, useRef } from 'react';
import { useDataContext } from '@/hooks/useDataContext';

const Sonification = () => {
    const { quake, sonification } = useDataContext();
    const audioContextRef = useRef(null);
    const oscillatorRef = useRef(null);
    const gainNodeRef = useRef(null);

    useEffect(() => {
        if (!audioContextRef.current) {
            audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
        }

        const audioContext = audioContextRef.current;

        const setupSound = () => {
            // Clean up the previous sound if there's any
            if (oscillatorRef.current) {
                oscillatorRef.current.stop();
                oscillatorRef.current.disconnect();
            }

            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();

            // Create a custom waveform for a more piano-like sound
            const real = new Float32Array([0, 0.4, 0.4, 1, 0.3, 0.2, 0.1]);
            const imag = new Float32Array(real.length);
            const customWave = audioContext.createPeriodicWave(real, imag);

            oscillator.setPeriodicWave(customWave);

            // Set oscillator frequency based on quake magnitude
            const baseFrequency = 261.6; // C4 note
            const frequency = baseFrequency * Math.pow(2, quake.magnitude / 12);
            oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);

            // Create an envelope for the piano-like sound
            gainNode.gain.setValueAtTime(0, audioContext.currentTime);
            gainNode.gain.linearRampToValueAtTime(0.5, audioContext.currentTime + 0.01);
            gainNode.gain.exponentialRampToValueAtTime(0.1, audioContext.currentTime + 1.5);

            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);

            oscillator.start();
            oscillatorRef.current = oscillator;
            gainNodeRef.current = gainNode;
        };

        if (sonification && quake) {
            setupSound();
        } else {
            // Stop the sound if sonification is disabled
            if (oscillatorRef.current) {
                oscillatorRef.current.stop();
                oscillatorRef.current.disconnect();
                oscillatorRef.current = null;
            }
            if (gainNodeRef.current) {
                gainNodeRef.current.disconnect();
                gainNodeRef.current = null;
            }
        }

        // Cleanup when the component is unmounted or when quake/sonification changes
        return () => {
            if (oscillatorRef.current) {
                oscillatorRef.current.stop();
                oscillatorRef.current.disconnect();
                oscillatorRef.current = null;
            }
            if (gainNodeRef.current) {
                gainNodeRef.current.disconnect();
                gainNodeRef.current = null;
            }
        };
    }, [quake, sonification]); // Listen to changes in quake and sonification

    return null; // No visual output, only sound
};

export default Sonification;