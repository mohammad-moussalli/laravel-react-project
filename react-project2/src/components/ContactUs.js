import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { BUTTON_COLOR, BUTTON_RADIUS, TEXTFIELD_COLOR, TEXTFIELD_MARGIN, TEXTFIELD_RADIUS, TEXT_COLOR } from "../constants/styles";


const ContactUs = () => {
    const [val, setVal] = useState();

    return (
        <Box sx={{ 
            flexDirection: 'column',
            display: 'flex',
            justifyContent: 'space-evenly', 
            alignItems: 'center', 
            borderColor: '#333', 
            minWidth:'550px', 
            minHeight:'550px',
            border:'solid', 
            borderRadius:'10px',
            padding: '10px',
            backgroundColor: 'wheat',
            }}>
            <h2>Contact Us</h2>
            <TextField id="outlined-basic" label="Name" variant="outlined" style={{margin: TEXTFIELD_MARGIN, backgroundColor: TEXTFIELD_COLOR, borderRadius: TEXTFIELD_RADIUS, minWidth: 530}} value={val}/>
            <TextField id="outlined-basic" label="Email" variant="outlined" style={{margin: TEXTFIELD_MARGIN, backgroundColor: TEXTFIELD_COLOR, borderRadius: TEXTFIELD_RADIUS, minWidth: 530}} value={val}/>
            <TextField id="outlined-multiline-static" label="Message" multiline rows={5} variant="outlined" style={{margin: TEXTFIELD_MARGIN, backgroundColor: TEXTFIELD_COLOR, borderRadius: TEXTFIELD_RADIUS, minWidth: 530}} value={val}/>
            <Button className="Button" variant="text" style={{backgroundColor:BUTTON_COLOR, borderRadius:BUTTON_RADIUS, color: TEXT_COLOR}} onClick={() => setVal(() => "")}>Submit</Button>
        </Box>
    );
  }
   
  export default ContactUs;