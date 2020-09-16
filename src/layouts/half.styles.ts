import { ITheme } from "../app-theme";

const { createUseStyles } = require('react-jss');

export default createUseStyles((theme: ITheme) => {
  return {
    mainLayout: {
      //   minWidth: "1280px",
      //   maxWidth: "1600px",
      height: "100vh",
      position: "relative",
      display: "flex",
      flexDirection: "row",

      alignItems: "center",
      justifyContent: "center",
      fontSize: "12pt",
      color: "white",

      "& > .left-background": {
        minWidth: "327px",
        maxWidth: "327px",
        height: "100%",
        position: "relative",
        backgroundColor: theme.palette[1],
      },

      "& > .left-background .left-column": {
        //minWidth: "327px",
        //maxWidth: "327px",
        //display: "block",
        //height: "100%",
        height: "calc(100% - 130px)",
        position: "relative",
        //flexGrow: 0,
        color: theme.palette[4],
        //backgroundColor: theme.palette[1],
        padding: "0px 13px 0px 13px",
        overflowY: "scroll",
        marginTop: "60px"

      },

      "& > .left-background .left-column .cards-area": {
        width: "100%",
        height: "100%"
        //overflowY: "scroll"
      },

      "& > .center-column": {
        //width: "calc(100% - 1152px)",
        //minWidth: "1280px",
        //maxWidth: "1600px",
        width: "100%",
        height: "100%",
        flexGrow: 1,
        color: theme.palette[4],
        backgroundColor: theme.palette[0],
        padding: "100px 100px 50px 50px",
        overflowY: "scroll"
      },

      "& > .right-column": {
        width: "384px",
        position: "relative",
        color: theme.palette[1],
        height: "100%",
        backgroundColor: theme.palette[4],
        overflowY: "scroll"
      },
    }
  }
})