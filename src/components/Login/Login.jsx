import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Button, TextField } from '@mui/material';
import './login.css';

export const Login = () => {

    const paperStyle = {
        padding: 20,
        height: '50vh',
        width: 280,
        margin: "auto",
        backgroundColor: '#E6F4F1',
        borderRadius: '12px',
        boxShadow: '0px 0px 8px rgba(0, 0, 0, 25)'
    };
    const btnstyle = { backgroundColor: '#1B6DA1', margin: '12px 0' };

    return (
        <Grid
            container
            style={{ minHeight: '100vh' }}  
            alignItems="center"             
            justifyContent="center"
        >
            <Paper elevation={12} style={paperStyle}>
                <Grid align='center'>
                    <img src='/logo-color.png' className='image' alt=""/>
                    <h2>Login</h2>
                </Grid>
                <TextField
                    id="standard-basic"
                    label="Username"
                    variant="standard"
                    placeholder='Enter Your Username'
                    fullWidth
                    required
                />
                <TextField
                    id="standard-basic"
                    label="Password"
                    variant="standard"
                    placeholder='Enter Your Password'
                    type='password'
                    fullWidth
                    required
                />
                <Button style={btnstyle} type='submit' color='primary' variant="contained" fullWidth>Login</Button>
            </Paper>
        </Grid>
    );
}

export default Login;
