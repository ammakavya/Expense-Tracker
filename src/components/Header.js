import { Box, Typography } from '@mui/material'
import React from 'react'

const Header = () => {
  return (
   <Box sx={{marginTop:'2%'}}>
    <Typography variant='h4' sx={{fontWeight:'bold',marginRight:'10%'}}>Expense tracker</Typography>

   </Box>
  )
}

export default Header