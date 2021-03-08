import React from 'react';
import './Comment.css';

const Comment = (props) => {
    const {email, body} = props.comment;

    const colors = ['black', 'darkcyan', 'blueviolet', 'tomato'];
    const number = Math.round(Math.random()*(colors.length - 1));
    const bgColor = {backgroundColor: colors[number]};
    
    return (
        <div className="comment">
            <div className="avatar" style={bgColor}>
                { email.slice(0, 1) }
            </div>
            <h5>{ email } says: </h5>
            <p>{ body }</p>
        </div>
    );
};

export default Comment;