import React, {useState, useEffect} from 'react';
import useStyles from './CommentsStylePage';
import {Typography} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import  { makeAComment } from '../../actions/comments';
import { useParams } from "react-router-dom";

const CommentForm = ({
    currentId,
    loadedComment,
    handleSubmit, 
    submitLabel, 
    hasCancelButton = false,
    handleCancel,
}) => {
   
    const comment = useSelector((state) => (currentId ? state.comments.find((comment) => comment._id === loadedComment._id) : null ));
    const userIn = JSON.parse(localStorage.getItem('accountProfile'));
    const { id } = useParams();

    useEffect(() => {
        if(comment) setCommentData(comment);
    }, [comment]);

    const classes = useStyles();
    const dispatch = useDispatch();
    const [commentData, setCommentData] = useState({
        comment: loadedComment ? loadedComment.comment: '',
    });
    const isTextareaDisabled = commentData.length === 0;

    const onSubmit = event => {
        event.preventDefault();
        if (!loadedComment) {
            dispatch(makeAComment({ ...commentData, name: userIn?.result?.name }));
            window.alert("Your comment has been posted.");
            window.location.reload(true);handleSubmit(commentData);
            setCommentData("");
        };    
    };

    if( !userIn?.result?.name) {
        
        return (
            <Typography variant='h6' aligned='center'>
                Please sign in to write a comment.
            </Typography>
        );

    }

    return (
        <form onSubmit={onSubmit}>
            <div className={classes.commentUserDetails}>
            <textarea
                placeholder='Name'
                className={classes.commentFormUserDetailsarea}
                value={commentData.name}
                onChange={(event) => setCommentData({...commentData, name: event.target.value})}
            />
            </div>
            
            <textarea
            placeholder='Add Comment'
                className={classes.commentFormTextarea}
                value={commentData.comment}
                onChange={(event) => setCommentData({...commentData, comment: event.target.value})}
            />
            <button className={classes.commentFormButton} disabled={isTextareaDisabled} >{submitLabel}</button>
            {hasCancelButton && (
                <button 
                type="button" 
                className={classes.commentFormButton}
                onClick = {handleCancel} 
                >
                    Cancel
                    </button>
            )}
        </form>
    );
};

export default CommentForm;
