import { Box, Button, TextField } from '@mui/material';
import axios from 'axios';
import { useState } from "react";
import { useHistory } from "react-router-dom";

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
                console.log(response.data)
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
            console.log(response.data)
            history.push('/dashboard')
        };
    }).catch(err => {
        setError("Invalid Input")
    });
}
    const [showSignup, setShowSignup] = useState(true);

    return (
        <div>
        {showSignup?<Box className="Login" sx={{ 
            flexDirection: 'column',
            display: 'flex',
            justifyContent: 'space-evenly', 
            alignItems: 'center', 
            borderColor: '#333', 
            maxWidth:'300px', 
            border:'solid', 
            borderRadius:'10px',
            padding: '10px',
            backgroundColor: 'wheat'
            }}>
                <form onSubmit={signin} style={{display:'flex', flexDirection:'column'}}>
                <TextField id="outlined-basic" label="Email" variant="outlined" style={{
                        margin: "10px", 
                        backgroundColor:'white', 
                        borderRadius:'5px'
                        }} onChange={e => setEmail(e.target.value)}/>
                    <TextField id="outlined-basic" label="Password" variant="outlined" style={{
                        margin: "10px", 
                        backgroundColor:'white', 
                        borderRadius:'5px'
                        }} onChange={e => setPassword(e.target.value)}/>
                    <Button className="Button" type="submit" style={{backgroundColor:'wheat', borderRadius:'10px', color:'#333'}}> Login</Button>
                    <Button className="Button" style={{backgroundColor:'wheat', borderRadius:'10px', color:'#333'}} onClick ={() => setShowSignup(false)}> Register</Button>      
                </form>
                <p>{error}</p>  
            </Box>
            :<Box className="Signup"sx={{ 
                flexDirection: 'column',
                display: 'flex',
                justifyContent: 'space-evenly', 
                alignItems: 'center', 
                borderColor: '#333', 
                maxWidth:'300px', 
                border:'solid', 
                borderRadius:'10px',
                padding: '10px',
                backgroundColor: 'wheat'
                }}>
                <form onSubmit={signup} style={{display:'flex', flexDirection:'column'}}>
                    <TextField id="outlined-basic" label="Email" variant="outlined" style={{
                        margin: "10px", 
                        backgroundColor:'white', 
                        borderRadius:'5px'
                        }} onChange={e => setEmail(e.target.value)}/>
                    <TextField id="outlined-basic" label="Name" variant="outlined" style={{
                        margin: "10px", 
                        backgroundColor:'white', 
                        borderRadius:'5px'
                        }} onChange={e => setName(e.target.value)}/>
                    <TextField id="outlined-basic" label="Password" variant="outlined" style={{
                        margin: "10px", 
                        backgroundColor:'white', 
                        borderRadius:'5px'
                        }} onChange={e => setPassword(e.target.value)}/>
                    <TextField id="outlined-basic" label="Password Confirmation" variant="outlined" style={{
                        margin: "10px", 
                        backgroundColor:'white', 
                        borderRadius:'5px'
                        }} onChange={e => setPasswordConfirmation(e.target.value)}/>
                    <Button className="Button" type="submit" style={{backgroundColor:'wheat', borderRadius:'10px', color:'#333'}}> Signup</Button>
                    <Button className="Button" style={{backgroundColor:'wheat', borderRadius:'10px', color:'#333'}} onClick ={() => setShowSignup(true)}> Close</Button>           
                </form>
                <p>{error}</p> 
            </Box>}
        </div>
    );
}
   
  export default LoginSignup;