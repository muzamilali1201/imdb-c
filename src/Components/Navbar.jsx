import React, { useState } from 'react'
import { Stack, Box, Typography } from '@mui/material'
// import { Link } from "react-router-dom"
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import { Search } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import CardSearch from './CardSearch';
const Navbar = () => {
    const navigate = useNavigate();
    const [val, setVal] = useState("")
    const handleSearch = (e) => {
        e.preventDefault()
        navigate(`movies/search/${val}`)
        setVal("")
    }
    return (
        <Stack spacing={4} direction='row' justifyContent='space-between' alignItems='center' >
            <Box p={4} sx={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
                <Link to="/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" alt="" className='logo' /></Link>
                <Link to="movies/popular" style={{ textDecoration: 'none' }}><Typography variant='h5' color='white' className='headers'>Popular</Typography></Link>
                <Link to="movies/upcoming" style={{ textDecoration: 'none' }}><Typography variant='h5' color='white' className='headers'>Upcoming</Typography></Link>
                <Link to="movies/top_rated" style={{ textDecoration: 'none' }}><Typography variant='h5' color='white' className='headers'>Top Rated</Typography></Link>
            </Box>
            <Box p={4} sx={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                <Input placeholder="Search...." variant="soft" size='md' value={val} onChange={(e) => setVal(e.target.value)} />
                {/* <Button></Button> */}
                <Button variant='soft' size='sm' onClick={handleSearch}><Search /></Button>
            </Box>
            {/* <Card /> */}
        </Stack>
    )

}

export default Navbar