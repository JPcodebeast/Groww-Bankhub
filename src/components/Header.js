import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import LensBlurRoundedIcon from '@mui/icons-material/LensBlurRounded';
import IconButton from "@material-ui/core/IconButton";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import { makeStyles } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import orange from "@material-ui/core/colors/orange";
import green from "@material-ui/core/colors/green";
import {blue} from "@material-ui/core/colors";



const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: theme.palette.background.light,
    color: theme.palette.common.white,
    textAlign:'center',
    [theme.breakpoints.up("sm")]: {
      zIndex: theme.zIndex.drawer + 1
    }
  },
  rightIcons: {
    marginLeft: theme.spacing(0.5)
  },
  spacer: {
    flexGrow: 1
  },
  text :{
      height: theme.typography.h3.fontSize,
      fontSize: theme.typography.h4.fontSize,
      fontWeight: theme.typography.h1.fontWeight,
      textAlign: "center",
      align: "center"
  }

}));

export default function Header({
  handleDrawerToggle,
  toggleDarkMode,
  darkMode
}) {
  const classes = useStyles();
  return (
    <AppBar position="fixed" className={classes.appbar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerToggle}
          edge="start"
        >

    <div>
      <LensBlurRoundedIcon style={{ color: red[500] }} />  
      <LensBlurRoundedIcon style={{ color: orange[500] }} />
      <LensBlurRoundedIcon style={{ color: green[500] }} />
      <LensBlurRoundedIcon style={{ color: blue[500] }} />
    </div>
        </IconButton>
        <div className={classes.spacer} />
        <Typography className={classes.text} >
            Groww s
          </Typography>
      {/* space between Brightness icon and Name  */}
      <div className={classes.spacer} />
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDarkMode}
            edge="start"
            className={classes.rightIcons}
          >
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
      </Toolbar>
    </AppBar>
  );
}
