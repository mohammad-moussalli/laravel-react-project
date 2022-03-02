import { Fragment, useEffect, useState } from "react";
import Button from '@mui/material/Button';
import axios from "axios";
import { Box  } from "@mui/system";
import { TextField } from "@mui/material";
import { BUTTON_COLOR, BUTTON_RADIUS, TEXTFIELD_COLOR, TEXTFIELD_MARGIN, TEXTFIELD_RADIUS, TEXT_COLOR } from "../constants/styles";

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

const [showUpdateData, setShowUpdateData] = useState(true);

useEffect(() => { getUser() }, []);
  
    if (localStorage.getItem('token') == null) {
      return (
        <h1 className="dashboard">Please Register or Login to access this page</h1>
      )} else {
        return (

        <div className="Dashboard">

          {showUpdateData?<Box sx={{ 
            flexDirection: 'column',
            display: 'flex',
            justifyContent: 'space-evenly', 
            borderColor: '#333', 
            width:'50vw', 
            minHeight:'250px',
            border:'solid', 
            borderRadius:'10px',
            padding: '10px',
            backgroundColor: 'wheat',
            marginLeft:'auto',
            marginRight:'auto',
            marginTop: "50px",
            marginBottom:'50px'
            }}>          
            <h3>Name: {name}</h3>
            <h3>Email: {email}</h3>
            <Button  className='Button' variant="text" style={{backgroundColor:'wheat', borderRadius:'10px', color:'#333'}} onClick ={() => setShowUpdateData(false)}>Update info</Button>
            <Fragment><h6>{error}</h6></Fragment>
          </Box>
          
          :<Box className="UpdateData">
            <form className='UpdateUser' onSubmit={updateUser}>
                <TextField value={email} id="outlined-basic"  variant="outlined" style={{margin: TEXTFIELD_MARGIN, backgroundColor: TEXTFIELD_COLOR, borderRadius:TEXTFIELD_RADIUS, width: '80%'}} onChange={e => setEmail(e.target.value)}/>
                <TextField value={name} id="outlined-basic"  variant="outlined" style={{margin: TEXTFIELD_MARGIN, backgroundColor: TEXTFIELD_COLOR, borderRadius:TEXTFIELD_RADIUS, width: '80%'}} onChange={e => setName(e.target.value)}/>
                <TextField id="outlined-basic" label="Password" variant="outlined" style={{margin: TEXTFIELD_MARGIN, backgroundColor: TEXTFIELD_COLOR, borderRadius:TEXTFIELD_RADIUS, width: '80%'}} onChange={e => setPassword(e.target.value)}/>
                <TextField id="outlined-basic" label="Confirm Password" variant="outlined" style={{margin: TEXTFIELD_MARGIN, backgroundColor:TEXTFIELD_COLOR, borderRadius:TEXTFIELD_RADIUS, minWidth: '80%'}} onChange={e => setPasswordConfirmation(e.target.value)}/>
                <Button className="Button" type="submit" style={{backgroundColor:BUTTON_COLOR, borderRadius:BUTTON_RADIUS, color:'#333'}}> Save</Button> 
                <Button className="Button" style={{backgroundColor:BUTTON_COLOR, borderRadius:BUTTON_RADIUS, color:TEXT_COLOR}} onClick ={() => setShowUpdateData(true)}> Close</Button> 

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