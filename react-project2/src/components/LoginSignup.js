import { Box, Button, TextField } from '@mui/material';
import axios from 'axios';
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { BUTTON_COLOR, BUTTON_RADIUS, TEXTFIELD_COLOR, TEXTFIELD_MARGIN, TEXTFIELD_RADIUS, TEXT_COLOR } from '../constants/styles';

const LoginSignup = () => {

    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();

const signinApi = "http://127.0.0.1:8000/api/auth/login";
const signupApi = "http://127.0.0.1:8000/api/auth/register";

    const signin = async (e) => {
        e.preventDefault();
        const user = {
            email: email,
            password: password,
        };
        axios.post(signinApi, { ...user } )
        .then(response => {
            if(email === response.data.user.email){
                localStorage.setItem("token", response.data.access_token)
                history.push('/dashboard')
            };
        }).catch (err => {
            setError("Invalid Credentials")
        });
  }

  const signup = async (e) => {
    e.preventDefault();
    const user = {
        email: email,
        password: password,
        password_confirmation: passwordConfirmation,
        name: name
    };
    axios.post(signupApi, { ...user } )
    .then(response => {
        if(email === response.data.user.original.user.email){
            localStorage.setItem("token", response.data.user.original.access_token)
            history.push('/dashboard')
        };
    }).catch(err => {
        setError("Invalid Input")
    });
}
    const [showSignup, setShowSignup] = useState(true);

    return (
        <div className='LoginSignup'>
        {showSignup?<Box className="Login">
                <form className="Signin" onSubmit={signin} style={{display:'flex', flexDirection:'column'}}>
                <TextField id="outlined-basic" label="Email" variant="outlined" style={{
                        margin: TEXTFIELD_MARGIN, 
                        backgroundColor:TEXTFIELD_COLOR, 
                        borderRadius:TEXTFIELD_RADIUS
                        }} onChange={e => setEmail(e.target.value)}/>
                    <TextField id="outlined-basic" label="Password" variant="outlined" style={{
                        margin: TEXTFIELD_MARGIN, 
                        backgroundColor:TEXTFIELD_COLOR, 
                        borderRadius:TEXTFIELD_RADIUS
                        }} onChange={e => setPassword(e.target.value)}/>
                    <Button className="Button" type="submit" style={{backgroundColor:BUTTON_COLOR, borderRadius:BUTTON_RADIUS, color:TEXT_COLOR}}> Login</Button>
                    <Button className="Button" style={{backgroundColor:BUTTON_COLOR, borderRadius:BUTTON_RADIUS, color:TEXT_COLOR}} onClick ={() => setShowSignup(false)}> Register</Button>      
                </form>
                <p>{error}</p>  
            </Box>
            :<Box className="Signup">
                <form className='Register' onSubmit={signup} style={{display:'flex', flexDirection:'column'}}>
                    <TextField id="outlined-basic" label="Email" variant="outlined" style={{
                        margin: TEXTFIELD_MARGIN, 
                        backgroundColor:TEXTFIELD_COLOR, 
                        borderRadius:TEXTFIELD_RADIUS
                        }} onChange={e => setEmail(e.target.value)}/>
                    <TextField id="outlined-basic" label="Name" variant="outlined" style={{
                        margin: TEXTFIELD_MARGIN, 
                        backgroundColor:TEXTFIELD_COLOR, 
                        borderRadius:TEXTFIELD_RADIUS
                        }} onChange={e => setName(e.target.value)}/>
                    <TextField id="outlined-basic" label="Password" variant="outlined" style={{
                        margin: TEXTFIELD_MARGIN, 
                        backgroundColor:TEXTFIELD_COLOR, 
                        borderRadius:TEXTFIELD_RADIUS
                        }} onChange={e => setPassword(e.target.value)}/>
                    <TextField id="outlined-basic" label="Password Confirmation" variant="outlined" style={{
                        margin: TEXTFIELD_MARGIN, 
                        backgroundColor:TEXTFIELD_COLOR, 
                        borderRadius:TEXTFIELD_RADIUS
                
                        }} onChange={e => setPasswordConfirmation(e.target.value)}/>
                    <Button className="Button" type="submit" style={{backgroundColor:BUTTON_COLOR, borderRadius:BUTTON_RADIUS, color:TEXT_COLOR}}> Signup</Button>
                    <Button className="Button" style={{backgroundColor:BUTTON_COLOR, borderRadius:BUTTON_RADIUS, color:TEXT_COLOR}} onClick ={() => setShowSignup(true)}> Close</Button>           
                </form>
                <p>{error}</p> 
            </Box>}
        </div>
    );
}
   
  export default LoginSignup;