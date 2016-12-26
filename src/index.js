import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import configureStore from './store/configureStore';
import TopPage from './containers/TopPage';
import BlogContainer from './containers/BlogContainer';
import PostsContainer from './containers/PostsContainer';
import PostContainer from './containers/PostContainer';
import AboutPageContainer from './containers/AboutPageContainer';
import 'normalize.css';
import '../assets/stylesheets/common.scss';
import '../assets/stylesheets/bootstrap.css';
import '../assets/stylesheets/bootstrap-blog.css';

// const history = new browserHistory();
const store = configureStore();
let rootElement = document.getElementById('root')

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/">
                <IndexRoute component={TopPage} />
                <Route path="/" component={BlogContainer} />
                <Route path=":pageNum" component={PostsContainer} />
                <Route path="about" component={AboutPageContainer} />
                <Route path=":year/:month/:name" component={PostContainer} />
            </Route>
        </Router>
    </Provider>,
    rootElement
);
