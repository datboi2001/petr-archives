import React from 'react';
import { Link } from '@mui/material';
import { Link as RRLink } from 'react-router-dom';
import logo from '../assets/petr-archives-logo.png';
import styles from './NavBar.module.css';

const NavBar = () => {
    return (
        <div className={styles.nav}>
            <div className={styles.home}>
                <RRLink to="/">
                    <Link>
                        <img
                            className={styles.logo}
                            src={logo}
                            alt="PETR Archives"
                        />
                    </Link>
                </RRLink>
            </div>
            <div className={styles['submit-div']}>
                <RRLink
                    to="/submit"
                    style={{ textDecoration: 'none', color: 'white' }}
                    className={styles['submit-nav']}
                >
                    Submit a PETR
                </RRLink>
            </div>
        </div>
    );
};

export default NavBar;
