import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Navigation.scss';

export default class Navigation extends Component {
    render() {
        return (
            <nav className={styles.navigation}>
                <ul>
                    <li><Link to=""><img src="../assets/images/top/txt_nav001.svg" alt="お問い合わせ"/></Link></li>
                    <li><Link to=""><img src="../assets/images/top/txt_nav002.svg" alt="椿崎だより"/></Link></li>
                    <li><Link to=""><img src="../assets/images/top/txt_nav003.svg" alt="管理してます"/></Link></li>
                    <li><Link to=""><img src="../assets/images/top/txt_nav004.svg" alt="椿崎ここにあり"/></Link></li>
                    <li><Link to=""><img src="../assets/images/top/img_logo.png" alt="椿崎リゾート"/></Link></li>
                    <li><Link to=""><img src="../assets/images/top/txt_nav005.svg" alt="民宿椿荘"/></Link></li>
                    <li><Link to=""><img src="../assets/images/top/txt_nav006.svg" alt="夢、叶えませんか？"/></Link></li>
                    <li><Link to=""><img src="../assets/images/top/txt_nav007.svg" alt="セカンドライフ"/></Link></li>
                    <li><Link to=""><img src="../assets/images/top/txt_nav008.svg" alt="別荘でのんびり"/></Link></li>
                </ul>
            </nav>
        );
    }
}
