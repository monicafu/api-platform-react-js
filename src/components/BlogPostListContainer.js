import React from 'react';
import BlogPostList from './BlogPostList';
import { blogPostListFetch,blogPostAdd } from '../actions/actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    ...state.blogPostList
});

const mapDispatchToProps = {
    blogPostAdd,
    blogPostListFetch
};

class BlogPostListContainer  extends React.Component {
    componentDidMount() {
        setTimeout(this.props.blogPostAdd,1000);
        setTimeout(this.props.blogPostAdd,3000);
        setTimeout(this.props.blogPostAdd,5000);
        this.props.blogPostListFetch();
    }
    render() {
        console.log(this.props);
        return (<BlogPostList posts = {this.props.posts}/>)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BlogPostListContainer);