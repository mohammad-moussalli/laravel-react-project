import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import axios from "axios";

const Dashboard = () => {
  const getUserApi = "http://127.0.0.1:8000/api/auth/user-profile";
  const updateUserApi = "http://127.0.0.1:8000/api/auth/update-data";

  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);
  const [error, setError]  = useState(null)
  const [password, setPassword] = useState(null);
  const [passwordConfirmation, setPasswordConfirmation] = useState(null);


  const getUser = async () => {
    const token = localStorage.getItem("token")
      axios.get(getUserApi, { headers: {"Authorization" : `Bearer ${token}`} })
      .then(response => {
        setEmail(response.data.email)
        setName(response.data.name)
      }).catch (err => {
          setError("Something went wrong!")
      });
}

const updateUser = async () => {
  const token = localStorage.getItem("token")
  axios.post(updateUserApi, { name: name, password: password, password_confirmation: passwordConfirmation, email: email} ,
    { headers: {"Authorization" : `Bearer ${token}`} } )
}

useEffect(() => {
  getUser() 
}, []);

  
    if (localStorage.getItem('token') == null) {
      return (
        <p>Please signIn</p>
      )} else {
        return (
          <div className="user-details">
          <p>name: {name}</p>
          <p>email: {email}</p>
          <p>{error}</p>
    
         <Button variant="contained">Update info</Button>
    
         <div className="login">
            <form onSubmit={updateUser}>
                <input type="text" value={email} placeholder="Email" onChange={e => setEmail(e.target.value)}/>
                <input type="text" value={name} placeholder="Name" onChange={e => setName(e.target.value)}/>
                <input type="text" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                <input type="text" placeholder="Confirm your password" onChange={e => setPasswordConfirmation(e.target.value)}/>
                <button className="Login" type="submit"> Save</button>      
            </form>
            <p>{error}</p>
        </div>
        </div>
        )
      }
    

  ;
}
 
export default Dashboard;