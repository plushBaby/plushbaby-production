import React from 'react';
import useStyles from './CommentsStylePage';
import { Avatar } from '@material-ui/core';
import CommentForm from "./CommentForm";

const Comment = ({
    comment,
    replies,
    setActiveComment,
    activeComment,
    updateComment,
    deleteComment,
    addComment,
    parentId = null,
    currentUserId,
}) => {

    const isEditing = 
        activeComment && 
        activeComment.type === 'editing' && 
        activeComment.id === comment.id;
        const replyId = parentId ? parentId : comment.id;

    const isReplying = 
        activeComment && 
        activeComment.type === 'replying' && 
        activeComment.id === comment.id;

    const classes = useStyles();

    const fiveMinutes = 300000;
    const timePassed = new Date() - new Date(comment.createdAt) > fiveMinutes;
    const canReply = Boolean(currentUserId);
    const canEdit = currentUserId === comment.userId && !timePassed;
    const canDelete = currentUserId === comment.userId && !timePassed;
    const createdAt = new Date(comment.createdAt).toLocaleDateString();
    
    
    
    return (
        <div className={classes.comment}>
            <div className={classes.commentImageContainer}>
                <Avatar className={classes.avatar}></Avatar>
            </div>
            <div className={classes.commentRightPart}>
                <div className={classes.commentContent}>
                    <div  className={classes.commentAuthor}>{comment.username}</div>
                    <div>{createdAt}</div>
                </div>
                {!isEditing && <div className={classes.commentText}>{comment.body}</div>}
                {isEditing && (
                    <CommentForm
                        submitLabel="Update"
                        hasCancelButton
                        initialText={comment.body}
                        handleSubmit={(text) => updateComment(text, comment.id)}
                        handleCancel={() => {
                        setActiveComment(null);
                        }}
                    />
                )}
                <div className={classes.commentActions}>
                    {canReply && 
                    <div
                        className={classes.commentAction}
                        onClick = {() =>
                            setActiveComment({id: comment.id, type: "replying"})} >
                            Reply
                    </div>}
                    {canEdit && 
                    <div
                        className={classes.commentAction}
                        onClick = {() =>
                            setActiveComment({id: comment.id, type: "editing"})}>
                            Edit
                    </div>}
                    {canDelete && (
                    <div
                        className={classes.commentAction}
                        onClick={() =>
                            deleteComment(comment.id)}>
                        Delete
                    </div>
                    )}
                </div>
                {isReplying && (
                    <CommentForm
                    submitLabel="Reply"
                    handleSubmit = {(text) => addComment(text, replyId)}
                    />
                )}
                {replies.length > 0 && (
                    <div className={classes.replies}>
                        {replies.map(reply => (
                            <Comment
                            comment = {reply}
                            key = {reply.id}
                            replies = {[]}
                            currentUserId = {currentUserId}
                            deleteComment = {deleteComment}
                            updateComment = {updateComment}
                            addComment = {addComment}
                            activeComment = {activeComment}
                            setActiveComment = {setActiveComment}
                            parentId = {comment.id}
                            />
                        ))}
                    </div>
                )}
            </div>
            
        </div>
    );
};

export default Comment;