import React from 'react';
import { useHistory } from 'react-router';
import './Post.css';

const Post = (props) => {
    const {title, id, body} = props.post;
    const history = useHistory();
    return (
        <div className="post">
            <h2>{ title }</h2>
            <div>
                { body }
            </div>
            <button onClick={() => history.push(`/post/${id}`)}>Show comments</button>
        </div>
    );
};

export default Post;