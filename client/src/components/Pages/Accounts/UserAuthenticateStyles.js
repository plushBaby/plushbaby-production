import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  main: {
    margin: "50px auto",
  },
  box: {
    marginTop: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  mainButton: {
    borderRadius: "48px",
  },

  submit: {
    margin: "20px auto",
    borderRadius: "46px",
  },

  form: {
    padding: "20px 0",
  },
}));
