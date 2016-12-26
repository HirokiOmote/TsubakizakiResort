import React, { Component } from 'react';
import styles from './Header.scss';

export default class Header extends Component {
    render() {
        return (
            <header className={styles.headerTop}>
                <div className={styles.container}>
                    <h1><img src="../assets/images/top/ttl_header.svg" alt="椿崎リゾート"/></h1>
                    <p><img src="../assets/images/top/txt_header.svg" alt=""/></p>
                </div>
            </header>
        );
    }
}
