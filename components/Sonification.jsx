import React, { useEffect, useRef } from 'react';
import { useDataContext } from '@/hooks/useDataContext';

const Sonification = () => {
    const { quake, sonification } = useDataContext();
    const audioContextRef = useRef(null);
    const oscillatorRef = useRef(null);
    const gainNodeRef = useRef(null);

    useEffect(() => {
        if (sonification && quake) {
            if (!audioContextRef.current) {
                audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
            }

            const audioContext = audioContextRef.current;

            // Clean up the previous sound if there's any
            if (oscillatorRef.current) {
                oscillatorRef.current.stop();
                oscillatorRef.current.disconnect();
            }

            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();

            // Set oscillator frequency based on quake magnitude
            oscillator.type = 'sine';
            oscillator.frequency.setValueAtTime(quake.magnitude * 100, audioContext.currentTime);

            // Adjust gain for a louder, more continuous sound
            gainNode.gain.setValueAtTime(0.5, audioContext.currentTime); // You can tweak this value for volume

            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);

            oscillator.start();
            oscillatorRef.current = oscillator;
            gainNodeRef.current = gainNode;

        } else {
            // Stop the sound if sonification is disabled
            if (oscillatorRef.current) {
                oscillatorRef.current.stop();
                oscillatorRef.current.disconnect();
                oscillatorRef.current = null;
            }
        }

        // Cleanup when the component is unmounted or when quake/sonification changes
        return () => {
            if (oscillatorRef.current) {
                oscillatorRef.current.stop();
                oscillatorRef.current.disconnect();
                oscillatorRef.current = null;
            }
        };
    }, [quake, sonification]); // Listen to changes in quake and sonification

    return null; // No visual output, only sound
};

export default Sonification;
