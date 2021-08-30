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
    paddingTop: "65%",
  },
  btn: {
    backgroundColor: "linear-gradient(to top, #f46b45, #eea849)",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  content: {
    display: "flex",
    justifyContent: "space-between",
  },
}));
