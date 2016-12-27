import React, { Component } from 'react';
import styles from './Post.scss';

export default class Post extends Component {
    createMarkup(html) {
        return {
            __html: html
        };
    }
    Thumbnail() {
        const { post } = this.props;
        if ( post._embedded["wp:featuredmedia"] !== undefined ) {
            const thumbnailHtml = post._embedded["wp:featuredmedia"][0].media_details.sizes.thumbnail.source_url;
            return thumbnailHtml;
        }
    }
    Terms() {
        const { post } = this.props;

    }
    render() {
        const { post } = this.props;
        if ( post._embedded["wp:terms"] !== undefined ) {
            const terms = post._embedded["wp:terms"];
            console.log(post._embedded["wp:terms"]);
        }
        return (
            <article className={styles.BlogPostList}>
                <div className={styles.Thumbnail}>
                    <img src={this.Thumbnail()} alt=""/>
                </div>
                <header>
                    <ul>

                    </ul>
                    <h3 className={styles.title}>{post.title.rendered}</h3>
                    <p className="blog-post-meta">{post.date}</p>
                </header>
                <a href={post.link}>記事を読む</a>
            </article>
        );
    }
}
