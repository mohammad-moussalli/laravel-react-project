import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {Button, Grid, InputAdornment, TextField} from "@mui/material";
import {decrement, increment, incrementByAmount} from "../../features/counter/counterSlice";

const Landing = () => {

    const [name, setName] = React.useState('Cat in the Hat');
    const handleChange = (event) => {
        setName(event.target.value);
    };

    const dispatch = useDispatch()
    return (
        <div style={{height: '500px', background: 'white'}}>
            <Grid container>
                <Grid item xs={6}>
                    <Button variant={"contained"} onClick={() => dispatch(incrementByAmount(5))}>
                        Increment By 5
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button variant={"contained"} onClick={() => dispatch(decrement(5))}>
                        Decrement
                    </Button>
                    <TextField
                        label="Name"
                        value={name}
                        required
                        onChange={handleChange}
                        />
                </Grid>
            </Grid>

        </div>
    );
}

export default Landing;