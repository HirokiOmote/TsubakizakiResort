import React, { Component } from 'react';
import styles from './Footer.scss'

export default class Footer extends Component {
    render() {
        return (
            <footer className={styles.footer}>
                <p>©︎Tsubakizaki Resort. All Right Reserved.</p>
            </footer>
        );
    }
}
