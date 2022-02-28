import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";


const ContactUs = () => {
    return (
        <Box sx={{ flexDirection: 'column', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>…
            <h2>Contact Us</h2>
            <TextField id="outlined-basic" label="Name" variant="outlined" style={{margin: "5px"}} />
            <TextField id="outlined-basic" label="Email" variant="outlined" style={{margin: "5px"}} />
            <TextField id="outlined-basic" label="Message" variant="outlined" style={{margin: "5px"}} />
            <Button variant="text" style={{color: 'white', backgroundColor: '#f1356d', borderRadius: '8px'}} >Submit</Button>
            
        </Box>
    );
  }
   
  export default ContactUs;