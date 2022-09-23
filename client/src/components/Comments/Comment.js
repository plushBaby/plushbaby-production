import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  useLocation  } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Avatar } from '@material-ui/core';
import CommentForm from "./CommentForm";
import  { makeAComment } from '../../actions/comments';
import useStyles from './CommentsStylePage';


const Comment = ({
  currentId,
  loadedComment,
  replies,
  setActiveComment,
  activeComment,
  updateComment,
  deleteComment,
  addComment,
  parentId = null,
  currentUserId,
}) => {
  
    const replyId = parentId ? parentId : comment.id;

    const { listing } = useSelector( (state) => state.listings);
    const dispatch = useDispatch();
    const classes = useStyles();
    const comment = useSelector((state) => (currentId ? state.comments.find((comment) => comment._id === loadedComment._id) : null ));

    
    

  const isReplying =
    activeComment &&
    activeComment.type === "replying" &&
    activeComment.id === comment.id;

    
    const fiveMinutes = 300000;
    const timePassed = new Date() - new Date(comment.createdAt) > fiveMinutes;
    const canReply = Boolean(currentUserId);
    const canDelete = currentUserId === comment.userId && !timePassed;
    const createdAt = new Date(comment.createdAt).toLocaleDateString();

    
    
    
  return (
    <div className={classes.comment}>
      <div className={classes.commentImageContainer}>
        <Avatar className={classes.avatar}></Avatar>
      </div>
      <div className={classes.commentRightPart}>
        <div className={classes.commentContent}>
          <div  className={classes.commentAuthor}>{comment.name}</div>
          <div>{createdAt}</div>
        </div>
       
        <div className={classes.commentActions}>
          {canReply && (
            <div
              className={classes.commentAction}
              onClick={() =>
                setActiveComment({ id: comment.id, type: "replying" })
              }
            >
              Reply
            </div>
          )}
          
          {canDelete && (
            <div
              className={classes.commentAction}
              onClick={() => deleteComment(comment.id)}
            >
              Delete
            </div>
          )}
        </div>
        {isReplying && (
          <CommentForm
            submitLabel="Reply"
            handleSubmit={(text) => addComment(text, replyId)}
          />
        )}
        {replies.length > 0 && (
          <div className={classes.replies}>
            {replies.map((reply) => (
              <Comment
                comment={reply}
                key={reply.id}
                replies={[]}
                currentUserId={currentUserId}
                deleteComment={deleteComment}
                updateComment={updateComment}
                addComment={addComment}
                activeComment={activeComment}
                setActiveComment={setActiveComment}
                parentId={comment.id}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;
