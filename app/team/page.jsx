'use client';

import React from 'react';
import { Linkedin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const teamMembers = [
    {
        name: 'Matheus Santos Melo',
        role: 'Team Leader',
        image: '/assets/Matheus.jpg',
        linkedin: 'https://www.linkedin.com/in/matheus-santos-melo/'
    },
    {
        name: 'Zinat Abo Hgool',
        role: 'Web Developer',
        image: '/assets/Zinat.jpg',
        linkedin: 'https://www.linkedin.com/in/zinat-abo-hgool-8099131b4/'
    },
    {
        name: 'Gustavo Korzune Gurgel',
        role: 'Deep Learning Specialist',
        image: '/assets/Gustavo.jpg',
        linkedin: 'https://www.linkedin.com/in/gustavo-korzune-gurgel-4b996a1a5/'
    },
    {
        name: 'Ana Yoon Faria de Lima',
        role: 'MLOps Engineering',
        image: '/assets/Anna.jpg',
        linkedin: 'https://www.linkedin.com/in/ana-yoon-faria-de-lima/'
    },
    {
        name: 'Marcin Gajewski',
        role: 'Feature Engineering',
        image: '/assets/Marcin.jpg',
        linkedin: 'https://www.linkedin.com/in/marcin-gajewski-16824218a/'
    },
    {
        name: 'Carolina Carpio',
        role: 'Web Developer',
        image: '/assets/Carolina.jpg',
        linkedin: 'https://www.linkedin.com/in/carolinacarpio/'
    }
];

const TeamMember = ({ name, role, image, linkedin }) => (
    <div className="bg-black bg-opacity-50 backdrop-filter backdrop-blur-md rounded-lg shadow-lg p-4 flex flex-col items-center text-center h-[300px] justify-between">
        <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-white shadow-md mb-3">
            <Image src={image} alt={name} width={96} height={96} className="object-cover" />
        </div>
        <div className="flex-grow flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-white">{name}</h3>
            <p className="text-2xl text-gray-300 mt-1">{role}</p>
        </div>
        <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 mt-2">
            <Linkedin className="w-8 h-8" />
        </a>
    </div>
);

export default function TeamPage() {
    return (
        <div
            className="min-h-screen bg-cover bg-center flex flex-col p-4 md:p-8"
            style={{ backgroundImage: 'url(/assets/team-background.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
        >
            {/* Top Panel */}
            <div className="w-full flex justify-between items-center mb-8">
                <Link href="/">
                    <button className="bg-white text-black hover:bg-gray-300 transition-colors duration-300 px-4 py-2 rounded-lg shadow-lg text-lg">
                        Back to Home
                    </button>
                </Link>
            </div>

            {/* Centered title */}
            <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-8 md:mb-12" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)' }}>
                Our Team
            </h1>

            {/* Team Members grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 w-full max-w-screen-xl mx-auto">
                {teamMembers.map((member, index) => (
                    <TeamMember key={index} {...member} />
                ))}
            </div>
        </div>
    );
}