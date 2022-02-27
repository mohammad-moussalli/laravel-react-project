import React, {useEffect, useState} from 'react';
import {Grid, Typography, Button} from "@mui/material";
import {useSelector} from "react-redux";

const Footer = () => {

    const count = useSelector(state => state.counter.value)

    const [countPlusTwo,setCountPlusTwo] = useState(0)

    useEffect(() => {
        setCountPlusTwo(count+2)
    },[count])

    return (
        <Grid container style={{background:'grey',height:'200px'}}>
            <Grid item xs>
                <Typography textAlign={"center"} variant={"h5"} color={"white"}>
                    Count From Redux: {count}
                </Typography>
            </Grid>
            <Grid item xs>
                <Typography textAlign={"center"} variant={"h5"} color={"white"}>
                    Count From Component State: {countPlusTwo}
                </Typography>
            </Grid>
        </Grid>
    );
};

export default Footer;