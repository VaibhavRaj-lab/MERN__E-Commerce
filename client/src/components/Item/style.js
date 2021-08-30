import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  card: {
    borderRadius: "none",
  },
  paper: {
    padding: "20px",
    textAlign: "center",
    color: "black",
  },
  root: {
    marginTop: "150px",
    marginBottom: "50px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  btn: {
    backgroundColor: "linear-gradient(to top, #f46b45, #eea849)",
  },
  content: {
    display: "flex",
    justifyContent: "space-between",
  },
}));
