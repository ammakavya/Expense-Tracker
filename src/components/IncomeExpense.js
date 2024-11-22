import { HorizontalRule } from '@mui/icons-material'
import { Box, Card, Grid, Paper, Typography } from '@mui/material'
import React from 'react'

const IncomeExpense = () => {
  return (
   <>
   <Box sx={{display:'flex', marginTop:'30px',marginRight:'25%'}}>
  <Paper  elevation={3} sx={{width:'270px',height:'80px', textAlign:'inherit' ,marginLeft:'40%'}}>
  <Typography variant='h5' sx={{fontWeight:'bold'}}>INCOME </Typography>
  <Typography  sx={{color:'green'}}>+$500.00</Typography>
  </Paper>
  <Paper  elevation={3} sx={{width:'270px',height:'80px'}}>
  <Typography variant='h5' sx={{fontWeight:'bold'}}>EXPENSE </Typography>
  <Typography sx={{color:'maroon'}}>+$240.00</Typography>
  </Paper>
  </Box>
   
   </>
  )
}

export default IncomeExpense