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

    return (
        <div>
        <div className="login">
            <form onSubmit={signin}>
                <input type="text" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
                <input type="text" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                <button className="Login" type="submit"> Login</button>      
            </form>
            <p>{error}</p>
            
        </div>
                <div className="login">
                <form onSubmit={signup}>
                    <input type="text" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
                    <input type="text" placeholder="Name" onChange={e => setName(e.target.value)}/>
                    <input type="text" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                    <input type="text" placeholder="Confirm your password" onChange={e => setPasswordConfirmation(e.target.value)}/>
                    <button className="Login" type="submit"> Signup</button>      
                </form>
                <p>{error}</p>
                </div>
        </div>  

    );
  
}
   
  export default LoginSignup;