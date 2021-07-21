import React from 'react';
import '../styles/comment.scss';

export default function Comment(props) {
    const { accountName, comment} = props;
    return (
        <div className="commentContainer">
            <div className="accountName">
                {accountName}
            </div>
            <div className="comment">
                {comment}
            </div>
            
        </div>
    )
}
