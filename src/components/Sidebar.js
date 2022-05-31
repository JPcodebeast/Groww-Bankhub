import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import StarIcon from '@mui/icons-material/Star';
import {blue,deepOrange} from "@material-ui/core/colors";
import {Link} from 'react-router-dom'


const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink:0,
    flexrow:1
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  
}));

export default function Sidebar({ open, handleDrawerClose }) {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
        </IconButton>
      </div> 
     <Divider />  
        <List>
        <ListItem>
            <ListItemIcon>
              <h1 style={{ color: blue[800] }}>Explore</h1>
            </ListItemIcon>
          </ListItem> 
          <Link style={{textDecoration: 'none',color: '#000'}} to='/all_banks'>
          <ListItem button>
          
            <ListItemIcon>
              <DashboardIcon style={{ color: deepOrange[700] }} />
            </ListItemIcon>
            <ListItemText style={{ color: deepOrange[700] }} primary="All Banks" />
            </ListItem>
          </Link>

          <Link style={{textDecoration: 'none',color: '#000'}} to='/favorites'>
          <ListItem button>
            <ListItemIcon>
              <StarIcon style={{ color: deepOrange[700] }} />
            </ListItemIcon>
            <ListItemText style={{ color: deepOrange[700] }} primary="Favorites" />
          </ListItem>
          </Link>
          <ListItem>
              <h2>Summary</h2>
          </ListItem> 
          <ListItem>
            <ListItemIcon>
              <h3>
               There are various  activities  <br />
               that can be carried out once  <br/>
               you log in to your bank AC.</h3>
            </ListItemIcon>
          </ListItem>
        </List>
    </Drawer>
  );
}
