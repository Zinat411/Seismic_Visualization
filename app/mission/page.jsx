"use client";

import React from 'react';
import { Radio, Zap, Globe, Star } from 'lucide-react';
import Link from 'next/link';

const MissionPage = () => {
    return (
        <div className="bg-black text-white min-h-screen p-4 bg-space-image bg-cover bg-center bg-fixed">
            <div className="max-w-6xl mx-auto bg-black bg-opacity-80 p-8 rounded-lg">
                <h1 className="text-7xl font-bold text-center mb-12 text-blue-400">Our Mission</h1>

                <div className="mb-12">
                    <h2 className="text-5xl font-semibold mb-6 text-yellow-400 flex items-center">
                        <Star className="mr-3" size={40} /> Seismic Detection Across the Solar System
                    </h2>
                    <p className="text-3xl mb-6 leading-relaxed">
                        At Fourier Foreseers, we're on a mission to shake up planetary seismology. We're tackling the power problems that have held back our study of quakes on far-off worlds.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    <div className="bg-gray-900 bg-opacity-70 p-8 rounded-lg">
                        <h3 className="text-4xl font-semibold mb-4 text-green-400 flex items-center">
                            <Radio className="mr-3" size={32} /> The Challenge
                        </h3>
                        <p className="text-2xl leading-relaxed">
                            Space missions struggle to send non-stop earthquake data back home because of power limits. We're working on smart software to pick out the good stuff from the noise, so we only beam back the juicy science bits.
                        </p>
                    </div>
                    <div className="bg-gray-900 bg-opacity-70 p-8 rounded-lg">
                        <h3 className="text-4xl font-semibold mb-4 text-purple-400 flex items-center">
                            <Zap className="mr-3" size={32} /> Our Approach
                        </h3>
                        <p className="text-2xl leading-relaxed">
                            We're digging into real moon quake data from Apollo and Mars shakes from InSight. Our goal? Cook up a clever program that can spot quakes in the noise, helping us save power and learn tons about what's shaking on other planets.
                        </p>
                    </div>
                </div>

                <div className="bg-gray-900 bg-opacity-70 p-8 rounded-lg mb-12">
                    <h3 className="text-4xl font-semibold mb-6 text-red-400">Impact and Importance</h3>
                    <ul className="list-disc pl-8 space-y-4 text-2xl">
                        <li>Overcome power constraints in planetary missions</li>
                        <li>Optimize data transmission from distant celestial bodies</li>
                        <li>Enhance our understanding of planetary geology</li>
                        <li>Enable more comprehensive seismic studies across the Solar System</li>
                        <li>Pave the way for future space exploration and discovery</li>
                    </ul>
                </div>

                <div className="text-center">
                    <h3 className="text-4xl font-semibold mb-6 text-blue-400 flex items-center justify-center">
                        <Globe className="mr-3" size={36} /> Exploring the Cosmos, One Quake at a Time
                    </h3>
                    <p className="mb-8 text-3xl leading-relaxed">
                        We’re building smart software to filter seismic data from the Moon and Mars, solving power challenges so we can focus on the best science, bringing us closer to understanding the universe around us.
                    </p>
                    <Link href="/" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-2xl transition duration-300 ease-in-out transform hover:scale-105">
                        Let's Start The Journey
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MissionPage;