import { Box, Typography } from '@mui/material'
import React from 'react'

const Balance = () => {
  return (
  <Box sx={{marginRight:'30%',marginTop:'3%'}}>
    <Typography variant='h5'  sx={{marginRight:'30px'}}>Your Balance</Typography>
    <Typography variant='h5' sx={{color:'green',marginRight:'7%'}}>$260.00</Typography>
  </Box>
  )
}

export default Balance