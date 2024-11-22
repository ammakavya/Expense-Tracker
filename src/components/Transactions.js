import { Box, Button, Divider, Paper, TextField, Typography } from '@mui/material'
import React from 'react';
// import { DevTool } from '@hookform/devtools';
import { FormControl, Autocomplete } from '@mui/material';
// import { useForm } from 'react-hook-form';

const  Transactions = () => {
  return (
    <>

    <Box sx={{marginRight:'25%'}}>
        <Typography  variant='h6' sx={{fontWeight:'bold', marginRight:'30px'}}>
            Add New Transaction
        </Typography>
        <Divider sx={{width:'42%',marginLeft:'40%',borderColor:'black'}}/>
        <Typography  sx={{fontWeight:'bold', margin:'10px',marginRight:'200px'}}>Text</Typography>
        <TextField
          label="Enter text"
          id="outlined-size-small"
          size="small"
          sx={{width:'42%' ,marginLeft:'22%'}}
        />
        <Typography  sx={{fontWeight:'bold',marginRight:'15%'}}>Amount</Typography>
        <Typography  sx={{fontWeight:'bold',marginLeft:'35px'}}>(negative-expense,positive-income)</Typography>
        <TextField
          label="Enter Amount"
          id="outlined-size-small"
          defaultValue="0"
          size="small"
          sx={{width:'42%', marginLeft:'22%',marginTop:'10px' }}
        />
    </Box>
    <Button variant="contained" sx={{width:'32%',marginRight:'8%',marginTop:'5px', backgroundColor:"SlateBlue"}}>Add Transaction</Button>
    </>
  )
}

export default Transactions;