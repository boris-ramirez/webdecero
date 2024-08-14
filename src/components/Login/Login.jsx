import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Button, TextField } from '@mui/material';

import './login.css';
import { useForm } from 'react-hook-form';

import { useAuth } from '../../hooks/useAuth';

export const Login = () => {
    const {logIn} = useAuth()
   

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

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [errorMessage, setErrorMessage] = React.useState('');


    
    const onSubmit = async (data) => {
        try {
            
    await logIn(data)
            
        } catch (error) {
            setErrorMessage("Nombre de usuario o contraseña incorrectos");
            console.log(error)
        }
    };
    
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
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        id="username"
                        label="Username"
                        variant="standard"
                        placeholder='Enter Your Username'
                        fullWidth
                        required
                        {...register('username', { required: true })}
                        error={errors.username ? true : false}
                        helperText={errors.username && "Username is required"}
                    />
                    <TextField
                        id="password"
                        label="Password"
                        variant="standard"
                        placeholder='Enter Your Password'
                        type='password'
                        fullWidth
                        required
                        {...register('password', { required: true })}
                        error={errors.password ? true : false}
                        helperText={errors.password && "Password is required"}
                    />
                    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                    <Button style={btnstyle} type='submit' color='primary' variant="contained" fullWidth>
                        Login
                    </Button>
                </form>
            </Paper>
        </Grid>
    );
}

export default Login;
