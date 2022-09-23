import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import useStyles from "./ListingStyles";
import {
  Button,
  TextField,
  Avatar,
  ListItem,
  ListItemText,
  ListItemAvatar,
} from "@material-ui/core/";
import { commentListing } from "../../../actions/listings";
import DeleteIcon from "@material-ui/icons/Delete";

const CommentSection = ({ listing }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const location = useLocation();
  const [comments, setComments] = useState(listing?.comments);
  const [comment, setComment] = useState("");
  const [userIn, setUserIn] = useState(
    JSON.parse(localStorage.getItem("accountProfile"))
  );

  function forceUpdate() {
    this.setState({});
    window.location.reload(true);
  }

  useEffect(() => {
    setUserIn(JSON.parse(localStorage.getItem("accountProfile")));
  }, [location]);

  const handleSubmit = async () => {
    const userComment = `${userIn?.result?.name} : ${comment}`;
    const newComment = await dispatch(commentListing(userComment, listing._id));
    console.log("submit button clicked!");
    setComments(newComment);
    setComment("");
    forceUpdate();
  };

  const confirmDelete = () => {
    if (window.confirm("Do you want to delete this comment?") === true) {
        //do something
    }
  };

  const getCommentUsername = (comment) => {
    const commentCreator = comment.split(" : ")[0];
    if (commentCreator === "undefined") {
      return "Anonymous";
    } else {
      return comment.split(" : ")[0];
    }
  };

  const getCommentBody = (comment) => {
    return comment.split(" : ")[1];
  };

  return (
    <div>
      {comments.map((comment) => (
        <div className={classes.container}>
          <ListItem>
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                {getCommentUsername(comment).charAt(0)}{" "}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={getCommentUsername(comment)}
              secondary={getCommentBody(comment)}
            />
            {userIn?.result?.name === getCommentUsername(comment) && (
              <Button
                className={classes.icons}
                onClick={confirmDelete}
                color="secondary"
                variant="outlined"
              >
                {" "}
                <DeleteIcon fontSize="small" /> Delete{" "}
              </Button>
            )}
          </ListItem>
        </div>
      ))}

      <div>
        <TextField
          name="comment"
          fullWidth
          rows={2}
          variant="outlined"
          label="Add a comment..."
          multiline
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        <Button
          className={classes.buttonSubmit}
          disabled={!comment}
          onClick={handleSubmit}
          variant="contained"
          color="primary"
          size="large"
          fullWidth
        >
          {" "}
          Post your Comment{" "}
        </Button>
      </div>
    </div>
  );
};

export default CommentSection;
