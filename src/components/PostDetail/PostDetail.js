import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comment from '../Comment/Comment';

const PostDetail = () => {
    const { id } = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(data => setPost(data))
    }, [])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
            .then((res) => res.json())
            .then((data) => setComments(data));
    }, [])
    return (
        <div>
            <h2>This is detail of post { id }</h2>
            <div className="post">
                <h3>{ post.title }</h3>
                <small> By - {post.userId}</small>
                <p>{ post.body }</p>
            </div>
            {
                comments.map(comment => <Comment comment={comment} />)
            }
            
        </div>
    );
};

export default PostDetail;