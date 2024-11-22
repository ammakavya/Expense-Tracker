import { Box, Divider, Paper, Typography } from '@mui/material'
import React from 'react'

const  History = () => {
  return (
    <>
    <Box sx={{marginleft:'30%'}}>
    <Typography  variant='h5' sx={{marginRight:'35%'}}>History</Typography>
    <Divider sx={{width:'32%',marginLeft:'30%',borderColor:'black'}}/>
    <Paper  elevation={3}  sx={{width:'31%', marginLeft:'30%',display:"flex",padding:'10px'}}>
<Typography sx={{marginRight:'10%'}}>CASH</Typography>
<Typography sx={{marginLeft:'60%'}}>200</Typography>
        </Paper>
        <Paper  elevation={3}  sx={{width:'31%', marginLeft:'30%',display:"flex",padding:'10px'}}>
<Typography sx={{marginRight:'10%'}}>CAMERA</Typography>
<Typography sx={{marginLeft:'60%'}}>150</Typography>
        </Paper>
        <Paper  elevation={3}  sx={{width:'31%', marginLeft:'30%',display:"flex",padding:'10px'}}>
<Typography sx={{marginRight:'10%'}}>BOOKS</Typography>
<Typography sx={{marginLeft:'60%'}}>130</Typography>
        </Paper>
    </Box>
    
    </>
  )
}

export default History