import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";


const ContactUs = () => {
    const [val, setVal] = useState();

    return (
        <Box sx={{ flexDirection: 'column', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>…
            <h2>Contact Us</h2>
            <TextField id="outlined-basic" label="Name" variant="outlined" style={{margin: "5px"}} value={val}/>
            <TextField id="outlined-basic" label="Email" variant="outlined" style={{margin: "5px"}} value={val}/>
            <TextField id="outlined-basic" label="Message" variant="outlined" style={{margin: "5px"}} value={val}/>
            <Button variant="text" style={{color: 'white', backgroundColor: '#f1356d', borderRadius: '8px'}} onClick={() => setVal(() => "")}>Submit</Button>
        </Box>
    );
  }
   
  export default ContactUs;