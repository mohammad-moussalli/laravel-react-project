import { Fragment, useEffect, useState } from "react";
import Button from '@mui/material/Button';
import axios from "axios";
import { Box  } from "@mui/system";
import { TextField } from "@mui/material";
import { BUTTON_COLOR, BUTTON_RADIUS, TEXT_COLOR } from "../constants/styles";

const Dashboard = () => {
  const getUserApi = "http://127.0.0.1:8000/api/auth/user-profile";
  const updateUserApi = "http://127.0.0.1:8000/api/auth/update-data";

  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [error, setError]  = useState();
  const [password, setPassword] = useState();
  const [passwordConfirmation, setPasswordConfirmation] = useState();


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

const [showUpdateData, setShowUpdateData] = useState(true);

useEffect(() => { getUser() }, []);
  
    if (localStorage.getItem('token') == null) {
      return (
        <h1 className="dashboard">Please Register or Login to access this page</h1>
      )} else {
        return (

        <div className="Dashboard">

          {showUpdateData?<Box className="UserData">     
            <div className="data">
              <h3>Name: {name}</h3>
              <h3>Email: {email}</h3>
            </div>     
            <Button  className='buttons' variant="text" style={{backgroundColor:BUTTON_COLOR, borderRadius:BUTTON_RADIUS, color:TEXT_COLOR, alignSelf:'center'}} onClick ={() => setShowUpdateData(false)}>Update info</Button>
            <Fragment><h6>{error}</h6></Fragment>
          </Box>
          
          :<Box className="UpdateData">
            <form className='UpdateUser' onSubmit={updateUser}>
                <h1>Update User Data</h1>
                <TextField className="textfield" value={email} id="outlined-basic"  variant="outlined" onChange={e => setEmail(e.target.value)}/>
                <TextField className="textfield" value={name} id="outlined-basic"  variant="outlined" onChange={e => setName(e.target.value)}/>
                <TextField className="textfield" value={password} id="outlined-basic" label="Password" variant="outlined" onChange={e => setPassword(e.target.value)}/>
                <TextField className="textfield" value={passwordConfirmation} id="outlined-basic" label="Confirm Password" variant="outlined" onChange={e => setPasswordConfirmation(e.target.value)}/>
                <Button className="saveButton" type="submit" style={{backgroundColor:BUTTON_COLOR, borderRadius:BUTTON_RADIUS, color:TEXT_COLOR}}> Save</Button> 
                <Button className="closeButton" style={{backgroundColor:BUTTON_COLOR, borderRadius:BUTTON_RADIUS, color:TEXT_COLOR}} onClick ={() => setShowUpdateData(true)}> Close</Button> 

                <Fragment><h6>{error}</h6></Fragment>
            </form>
          </Box>
        }
        </div>
        )
      }
    

  ;
}
 
export default Dashboard;