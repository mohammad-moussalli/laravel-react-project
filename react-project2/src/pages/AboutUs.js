import { Box } from "@mui/material";

const AboutUs = () => {
  return (
    <Box className="AboutUs">
      <h1>About Us</h1>
      <ul className="aboutus">
        <li><h4>This is an Educational Project implemented using Laravel Framework and React Js Library undergone using the MVC (Model-View-Controller) software design architecural pattern.</h4></li>
        <li><h4>For the Backend,PHP language was used in a Laravel Framework to implement the APIs and connect to the Database.</h4></li>
        <li><h4>The Backend represents the Model and Controller parts of this Educational Project .</h4></li>
        <li><h4>For the Frontend, JSX language was used in a React Js Library to connect with the Backend and display the returned output from the Model to the user.</h4></li>
        <li><h4>The Frontend represents the View part of this Educational Project .</h4></li>
      </ul>
    </Box>
  );
}
export default AboutUs;