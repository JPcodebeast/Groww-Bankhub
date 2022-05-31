import React,{useEffect} from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import {indigo} from "@material-ui/core/colors";
import {allbanks_dummyData} from '../../data/dummyData';
import {useSelector,useDispatch} from 'react-redux'
import {searchBanks,clearFilters} from '../../actions/filterActions'
import { useLocation,Link } from 'react-router-dom';

const columns = [
  { id: 'bank_name', label: 'Bank ', minWidth:170 },
  { id: 'ifsc', label:'IFSC', minWidth:170,align:'center' },
  {
    id: 'branch',
    label: 'Branch',
    minWidth:170,
    align: 'center'
  },
  {
    id: 'bank_id',
    label: 'ID',
    minWidth: 70,
    align: 'center',
  },
  {
    id: 'address',
    label: 'Address',
    minWidth: 170,
    align: 'center',
  },
 
];


export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
  const dispatch = useDispatch()
  const location = useLocation()

  // useEffect(() => {
  //   console.log(':)',location)
  //   if(location.pathname === '/') {
  //     dispatch(searchBanks('Kolkata','city'));
  //   } else if(location.pathname === '/all_banks') {
  //     dispatch(clearFilters())
  //   }
  // })

  // <button onClick={() => dispatch(clearFilters())}>CLEAR</button>

  const handleChangePage = (event,newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const {banksList,errorMsg,favorites} = useSelector(state => state.dataReducer)

  console.log(errorMsg)
 

  return (
    <Paper sx={{ maxwidth: '100%'}}>
      <TableContainer sx={{ maxHeight:'100%',maxWidth:'100%'}}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                    <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, color:indigo[700],
                           fontSize:20, fontWeight:'bold'}}
                >
                  {column.label}
                </TableCell> 
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {errorMsg ? <h1>{errorMsg}</h1> : (location.pathname === '/favorites' ? favorites : banksList)
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((rows) => {
                return (
                  
                  <TableRow onClick={() => {}} hover  tabIndex={-1} key={rows.code}>
                    {columns.map((column) => {
                      const value = rows[column.id];
                      return (
                        // <Link to={{pathname: `/${rows.ifsc}`,state: rows}}>
                          <TableCell key={column.id} align={column.align}>
                            {column.id === 'ifsc' ? <Link style={{textDecoration: 'none',color: '#000'}} to={{pathname: `/${rows.ifsc}`,state: {bankData: rows}}}>{value}</Link> : value}
                          </TableCell>
                      );
                    })}
                  </TableRow>
                  
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10,25,50,100]}
        component="div"
        count={location.pathname === '/favorites' ? favorites.length : banksList.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
