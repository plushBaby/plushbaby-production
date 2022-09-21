
import React, { useEffect, useState } from 'react';
import {
    getComments as getCommentsApi,
    createComment as createCommentApi,
    deleteComment as deleteCommentApi,
    updateComment as updateCommentApi,
} from '../commentData';

import { Typography } from '@material-ui/core';
import useStyles from './CommentsStylePage';
import Comment from './Comment';
import CommentForm from './CommentForm';

const Comments = ({currentUserId}) => {
    const classes = useStyles();

    const [backendComments, setBackendComments] = useState([]);
    const [activeComment, setActiveComment] = useState(null);
    const rootComments = backendComments.filter(backendComment => backendComment.parentId === null
    );
    const getReplies = commentId => {
        return backendComments
        .filter(backendComment => backendComment.parentId === commentId)
        .sort(
            (a,b) =>
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
    };

    const addComment = (text, parentId) => {
        console.log('addComment', text, parentId);
        createCommentApi(text, parentId).then(comment => {
            setBackendComments([comment, ...backendComments]);
            setActiveComment(null);
        });
    };
    const deleteComment = (commentId) => {
        if (window.confirm ('Are you sure you want to remove comment?')) {
            deleteCommentApi(commentId).then(() => {
                const updatedBackendComments = backendComments.filter(
                    (backendComment) => backendComment.id !== commentId
                );
                setBackendComments(updatedBackendComments)
            });
        };
    };

    const updateComment = (text, commentId) => {
        updateCommentApi(text, commentId).then(() => {
            const updatedBackendComments = backendComments.map(backendComment => {
                if (backendComment.id === commentId) {
                    return {...backendComment, body: text};
                }
                return backendComment;
            });
            setBackendComments(updatedBackendComments);
            setActiveComment(null);
        })
    }

    useEffect(() => {
        getCommentsApi().then((data) => {
            setBackendComments(data)
        });
    }, [])
    return (
        <div className={classes.comments} >
            <Typography variant='h5'><strong> Comments </strong></Typography>
            <div  className={classes.commentFormTitle} variant='b2'>Ask a Question</div>
            <CommentForm submitLabel="Send" handleSubmit={addComment}/>
            <div className={classes.commentsContainer}>
                {rootComments.map(rootComment => (
                    <Comment
                    key={rootComment.id}
                    comment={rootComment}
                    replies = {getReplies(rootComment.id)}
                    currentUserId = {currentUserId}
                    deleteComment = {deleteComment}
                    updateComment = {updateComment}
                    activeComment = {activeComment}
                    setActiveComment = {setActiveComment}
                    addComment = {addComment}
                    />
                ))}
            </div>
        </div>
    );
};

export default Comments;