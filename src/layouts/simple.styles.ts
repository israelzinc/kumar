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

      "& > .simple-column": {
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
      }      
    }
  }
})