import React from 'react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Main = ({children}) => {
    return (
        <div style={{height:'100vh'}}>
            <Navbar />
                {children}
            <Footer />
        </div>
    );
};

export default Main;