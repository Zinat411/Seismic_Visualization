import React from 'react';
import Link from 'next/link';

import styles from '@/scss/components/Navbar.module.scss';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>Fourier Foreseers</div>
            <ul className={styles.navLinks}>
                <li><a href="#home">HOME</a></li>
                <li><Link href="/mission">MISSION</Link></li>
                <li><a href="#team">TEAM</a></li>
                <li><a href="#contact">CONTACT</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
