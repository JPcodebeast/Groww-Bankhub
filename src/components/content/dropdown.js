import React,{useState} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useDispatch} from 'react-redux'
import {searchBanks} from '../../actions/filterActions'

export default function FreeSolo() {
  const [city, setCity] = React.useState('');

  const dispatch = useDispatch()

  const handleChange = (event) => {
    setCity(event.target.value);
    console.log(event.target.value);
    dispatch(searchBanks(event.target.value,'city'));
  };

  return (
    <Box sx={{ minWidth: 250 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">City</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={city}
          label="City"
          onChange={handleChange}
          
        >
          {
            cities.map((city) => (
              <MenuItem value={city.title}>{city.title}</MenuItem>
            ))
          }
        </Select>
      </FormControl>
    </Box>
  );
}


const cities = [
  { title: 'Mumbai'},
  { title: 'Kolkata'},   
  { title: 'Delhi'},
  { title: 'Banglore'},
  { title: 'Chennai'}  
  
];
