import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import Header from '../components/header/Header';
import Navigation from '../components/navigation/Navigation';
import SectionVilla from '../components/section/SectionVilla';
import SectionSecond from '../components/section/SectionSecond';
import SectionDream from '../components/section/SectionDream';
import SectionBlog from '../components/section/SectionBlog';
import Sidebar from '../components/Sidebar';
import Footer from '../components/footer/Footer';

export default class TopPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Navigation />
                <SectionVilla />
                <SectionSecond />
                <SectionDream />
                <SectionBlog />
                {this.props.children}
                <Footer />
            </div>
        );
    }
}
