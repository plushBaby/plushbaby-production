import React, { useState } from "react";
import useStyles from "./CommentsStylePage";

const CommentForm = ({
  handleSubmit,
  submitLabel,
  hasCancelButton = false,
  initialText = "",
  handleCancel,
}) => {
  const classes = useStyles();

  const [text, setText] = useState(initialText);
  const isTextareaDisabled = text.length === 0;
  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(text);
    setText("");
  };
  return (
    <form onSubmit={onSubmit}>
      <textarea
        className={classes.commentFormTextarea}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className={classes.commentFormButton}
        disabled={isTextareaDisabled}
      >
        {submitLabel}
      </button>
      {hasCancelButton && (
        <button
          type="button"
          className={classes.commentFormButton}
          onClick={handleCancel}
        >
          Cancel
        </button>
      )}
    </form>
  );
};

export default CommentForm;
