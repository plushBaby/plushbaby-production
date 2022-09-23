
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


import {makeAComment} from '../../actions/comments';

import { Typography } from '@material-ui/core';
import useStyles from './CommentsStylePage';
import Comment from './Comment';
import CommentForm from './CommentForm';

const Comments = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { id } = useParams();
    const [currentId, setCurrentId] = useState(0);

    // const rootComments = backendComments.filter(backendComment => backendComment.parentId === null
    //     );

    useEffect( () => {
        dispatch(makeAComment(id));
        setCurrentId(id);
    }, [id ] );


    const displayComment = (text, parentId) => {
        console.log('addComment', text, parentId);
        
        
    };
    
    return (
        <div className={classes.comments} >
            <Typography variant='h5'><strong> Comments </strong></Typography>
            <CommentForm submitLabel="Send" handleSubmit={displayComment}/>
            <div className={classes.commentsContainer}>
                    
        
                
            {/* {rootComments.map(rootComment => (
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
                ))} */}


            </div>
        </div>
    );
};

export default Comments;
