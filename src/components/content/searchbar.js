import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {useDispatch} from 'react-redux';
import {searchBanks} from '../../actions/filterActions'


export default function FullWidthTextField() {

  const dispatch = useDispatch()
  return (
    <Box
      sx={{
        maxWidth:'100%',
      }}
    >
      <TextField onChange={(e) => dispatch(searchBanks(e.target.value,'search'))} fullWidth label="Search Groww" id="fullWidth" />
    </Box>
  );
}
