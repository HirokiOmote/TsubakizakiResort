import React, { Component } from 'react';
import * as Actions from '../../actions';
import styles from './SectionBlog.scss';

export default class sectionBlog extends Component {
    render() {
        return (
            <article>
                <header className={styles.header}>
                    <h2><img src="../assets/images/top/ttl_Blog.svg" alt="椿崎だより"/></h2>
                </header>
                <div>
                    {this.props.children}
                </div>
            </article>
        );
    }
}
