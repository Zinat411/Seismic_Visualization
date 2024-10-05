'use client';

import React from 'react';
import Link from 'next/link';
import styles from '@/scss/components/Navbar.module.scss';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>Fourier Foreseers</div>
            <ul className={styles.navLinks}>
                <li><Link href="/">HOME</Link></li>
                <li><Link href="/mission">MISSION</Link></li>
                <li><Link href="/team">TEAM</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;