import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";


const ContactUs = () => {
    const [val, setVal] = useState();

    return (
        <Box sx={{ 
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
            <h2>Contact Us</h2>
            <TextField id="outlined-basic" label="Name" variant="outlined" style={{margin: "10px", backgroundColor:'white', borderRadius:'5px'}} value={val}/>
            <TextField id="outlined-basic" label="Email" variant="outlined" style={{margin: "10px", backgroundColor:'white', borderRadius:'5px'}} value={val}/>
            <TextField id="outlined-multiline-static" label="Message" multiline rows={5} variant="outlined" style={{margin: "10px", backgroundColor:'white', borderRadius:'5px'}} value={val}/>
            <Button className="Button" variant="text" style={{backgroundColor:'wheat', borderRadius:'10px', color:'#333'}} onClick={() => setVal(() => "")}>Submit</Button>
        </Box>
    );
  }
   
  export default ContactUs;