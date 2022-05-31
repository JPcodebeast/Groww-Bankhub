import React,{useEffect,useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@material-ui/core/Container';
import { allbanks_dummyData } from '../../data/dummyData';
import { useParams } from 'react-router-dom';
import {setFavorites,markFavorite} from '../../actions/dataActions'
import { useDispatch,useSelector } from 'react-redux';

export default function ImgMediaCard() {


  const params = useParams()
  const dispatch = useDispatch()
  const {favBank} = useSelector(state => state.dataReducer)
  // const {favAddress} = useSelector(state => state.dataReducer)

 

  useEffect(() => {
  const bankData = allbanks_dummyData.find((el) => el.ifsc === params.ifsc)
    console.log('hy',typeof bankData)
    // localStorage.setItem('selected_bank',JSON.stringify(bankData))
    // setBankDetails({...JSON?.parse(localStorage.getItem('selected_bank'))})
    dispatch(markFavorite(bankData))
  },[])

  return (
    <Container fixed>
      <Card sx={{ maxWidth:'100%',height:'100%'}} >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {favBank?.bank_name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {/* {favAddress?.addrress} */}
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => dispatch(setFavorites(favBank))} color="secondary" variant="contained" size="xs" >Add ❤️</Button>
      </CardActions>
    </Card>
    </Container>
    
  );
}
