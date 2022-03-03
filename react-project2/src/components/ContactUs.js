import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { BUTTON_COLOR, BUTTON_RADIUS, TEXTFIELD_COLOR, TEXTFIELD_MARGIN, TEXTFIELD_RADIUS, TEXTFIELD_WIDTH, TEXT_COLOR } from "../constants/styles";
import axios from "axios";


const ContactUs = () => {
    const contactUsApi = "http://127.0.0.1:8000/contact";

    const [email, setEmail] = useState(null);
    const [name, setName] = useState(null);
    const [message, setMessage]  = useState(null);

    const contactUs = async () => {
    axios.post(contactUsApi, { name: name, email: email, message: message})
    }

    return (
        <Box className='ContactUsBox'>
            <form className='ContactUs' onSubmit={contactUs}>
            <h2>Contact Us</h2>
            <TextField id="outlined-basic" label="Name" variant="outlined" style={{margin: TEXTFIELD_MARGIN, backgroundColor: TEXTFIELD_COLOR, borderRadius: TEXTFIELD_RADIUS, width: TEXTFIELD_WIDTH}} onChange={e => setName(e.target.value)}/>
            <TextField id="outlined-basic" label="Email" variant="outlined" style={{margin: TEXTFIELD_MARGIN, backgroundColor: TEXTFIELD_COLOR, borderRadius: TEXTFIELD_RADIUS, width: TEXTFIELD_WIDTH}} onChange={e => setEmail(e.target.value)}/>
            <TextField id="outlined-multiline-static" label="Message" multiline rows={5} variant="outlined" style={{margin: TEXTFIELD_MARGIN, backgroundColor: TEXTFIELD_COLOR, borderRadius: TEXTFIELD_RADIUS, width: TEXTFIELD_WIDTH}} onChange={e => setMessage(e.target.value)}/>
            <Button className="Button" type = "submit" variant="text" style={{backgroundColor:BUTTON_COLOR, borderRadius:BUTTON_RADIUS, color: TEXT_COLOR}}>Submit</Button>
            </form>
        </Box>
    );
  }
   
  export default ContactUs;