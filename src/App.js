import React, { useState,useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline, ThemeProvider, createTheme } from "@material-ui/core";
// import blue from "@mui/material/colors/blue";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "./styles.css";
import Demo from "./components/content/table";
import Dropdown from "./components/content/dropdown";
import Searchbar from "./components/content/searchbar";
import Grouping from "./components/content/grouping";
import Bankdetails from "./components/content/bankdetails";
import {useDispatch} from 'react-redux'
import { allbanks_dummyData } from "./data/dummyData";
import {setDataInitially} from './actions/dataActions'
import {Routes,Route,BrowserRouter as Router} from 'react-router-dom';
import Showcard from './components/content/showcard';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "inline-block",
    
  },
  content :{
    marginLeft:'20%',
    marginRight:'1%'
  },
  card:{
    marginLeft:'20%',
    marginTop:'5%',
    marginRight:'1.5%'
  },
  fav:{
    marginLeft:'19%',
  }
}));

export default function App() {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  // const [darkMode, setDarkMode] = useState(false);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setDataInitially(allbanks_dummyData))
  })



  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const theme = createTheme({
    palette: {
      // type:  ? "dark" : "light"
    }
  });

  // const toggleDarkMode = () => {
  //   setDarkMode(!darkMode);
  // };
  return (
    
        <div className="App" >
    <ThemeProvider theme={theme}>
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <Header
          handleDrawerToggle={handleDrawerToggle}
          // toggleDarkMode={toggleDarkMode}
          // darkMode={darkMode}
        />
        <Sidebar handleDrawerClose={handleDrawerClose} open={open} />
      </div>
      <div className={classes.card}>
            <table>
            <tr>
              <td colspan="2"><Searchbar /></td>
              <td rowspan="2"><Showcard /></td>
            </tr>
            <tr>
              <td><Dropdown /></td>
              <td><Grouping /></td>
            </tr>
          </table>
      </div>
      <br />
      <Routes>
        <Route exact path='/' element={ <div className={classes.content}>
        <Demo />
        </div>} />
        <Route exact path='/all_banks' element={<div className={classes.content}>
        <Demo />
        </div>} />
        <Route exact path='/:ifsc' element={
          <div className={classes.fav}>
            <Bankdetails />
          </div>
        }/>
    
        <Route exact path='/favorites' element={<div className={classes.content}><Demo /></div>} />
      </Routes>
      
      </Router>
    </ThemeProvider>
    </div>
    

  );
}
