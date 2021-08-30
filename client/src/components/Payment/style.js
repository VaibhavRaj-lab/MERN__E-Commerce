import { FormHelperText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  card: {
    borderRadius: "none",
    // height: "500px",
    // display: "flex",
    // flexDirection: "column",
  },

  checkout: {
    display: "flex",
    // flexDirection: "row",
    marginBottom: "2px",
    borderBottom: "2px solid black",
  },
  root: {
    maxWidth: "100%",
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
  success: {
    display: "flex",
    justifyContent: "center",
    width: "100vw",
    height: "100vh",
    alignItems: "center",
    flexDirection: "column",
  },
}));
