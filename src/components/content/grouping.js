import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {useDispatch} from 'react-redux';
import { setSpecificSearch} from '../../actions/filterActions';

const options = [{
  label: 'Bank',
  title: 'bank_name'
},{
  label: 'Branch',
  title: 'branch'
},{
  label: 'IFSC',
  title: 'ifsc'
}];

export default function ControllableStates() {
  const [value, setValue] = React.useState(null);
  const [inputValue, setInputValue] = React.useState('');

  const dispatch = useDispatch()

  return (
    <div>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          dispatch(setSpecificSearch(newValue.title))
         
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={options}
        sx={{ width: 250 }}
        renderInput={(params) => <TextField {...params} label="Select Category" />}
      />
    </div>
  );
}
