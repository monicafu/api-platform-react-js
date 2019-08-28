import React from 'react';
import BlogPostList from './BlogPostList';
import { blogPostListFetch } from '../actions/actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    ...state.blogPostList
});

const mapDispatchToProps = {
    blogPostListFetch
};

class BlogPostListContainer  extends React.Component {
    componentDidMount() {
        // setTimeout(this.props.blogPostAdd,1000);
        // setTimeout(this.props.blogPostAdd,3000);
        // setTimeout(this.props.blogPostAdd,5000);
        this.props.blogPostListFetch();
    }
    render() {
        const {posts,isFetching} = this.props;

        return (<BlogPostList posts = {posts} isFetching={isFetching}/>)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BlogPostListContainer);