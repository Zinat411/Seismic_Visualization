'use client';

import React from 'react';
import { Linkedin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const teamMembers = [
    {
        name: 'Arkadeep Chakraborty',
        role: 'Product Designer',
        image: '/assets/arkadeep.jpeg',
        linkedin: 'https://www.linkedin.com/in/arkadeep-chakraborty'
    },
    {
        name: 'Maaz Moosa',
        role: 'Product Manager',
        image: '/assets/maaz.jpeg',
        linkedin: 'https://www.linkedin.com/in/maaz-moosa'
    },
    {
        name: 'Soham Sonawane',
        role: 'Senior Developer',
        image: '/assets/soham.jpg',
        linkedin: 'https://www.linkedin.com/in/soham-sonawane'
    },
    {
        name: 'Vishal Gupta',
        role: 'UX Researcher',
        image: '/assets/vishal.jpg',
        linkedin: 'https://www.linkedin.com/in/vishal-gupta'
    },
    {
        name: 'Aarav Singh',
        role: 'Frontend Developer',
        image: '/assets/aarav.jpg',
        linkedin: 'https://www.linkedin.com/in/aarav-singh'
    },
    {
        name: 'Priya Sharma',
        role: 'Backend Engineer',
        image: '/assets/priya.jpg',
        linkedin: 'https://www.linkedin.com/in/priya-sharma'
    }
];

const TeamMember = ({ name, role, image, linkedin }) => (
    <div className="bg-black bg-opacity-50 backdrop-filter backdrop-blur-md rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
        <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-md mb-5">
            <Image src={image} alt={name} width={160} height={160} className="object-cover" />
        </div>
        <h3 className="text-2xl font-bold text-white">{name}</h3>
        <p className="text-lg text-gray-300">{role}</p>
        <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 mt-2">
            <Linkedin className="w-8 h-8" />
        </a>
    </div>
);

export default function TeamPage() {
    return (
        <div
            className="min-h-screen bg-cover bg-center flex flex-col p-8"
            style={{ backgroundImage: 'url(/assets/team-background.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
        >
            {/* Top Panel */}
            <div className="w-full flex justify-between items-center mb-8">
                <Link href="/">
                    <button className="bg-white text-black hover:bg-gray-300 transition-colors duration-300 px-6 py-3 rounded-lg shadow-lg text-xl">
                        Back to Home
                    </button>
                </Link>
            </div>

            {/* Centered title */}
            <h1 className="text-6xl font-bold text-white text-center mb-12" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)' }}>
                Our Team
            </h1>

            {/* Team Members in a single row */}
            <div className="grid grid-cols-6 gap-8 w-full max-w-screen-lg mx-auto">
                {teamMembers.map((member, index) => (
                    <TeamMember key={index} {...member} />
                ))}
            </div>
        </div>
    );
}
