import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: "56.25%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "darken",
  },
  roundedCorners: {
    borderRadius: "26px",
  },
  cardTitle: {
    fontSize: "14px",
    lineHeight: "14px",
  },

  cardContent: {
    height: "80px",
    overflow: "hidden",
  },
  cardActions: {
    padding: "5px 15px",
  },
  overlay: {
    position: "absolute",
    top: "10px",
    left: "10px",
    color: "white",
  },

  avatar: {
    color: "white",
    backgroundColor: theme.palette.primary.main,
  },

  p: {
    lineHeight: "normal",
    fontSize: "12px",
    padding: "5px 0",
  },

  buttonSubmit: {
    borderRadius: "48px",
    margin: "20px auto",
    maxWidth: "400px",
    display: "block",
  },
}));
