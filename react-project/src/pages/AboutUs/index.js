import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Button, CircularProgress, Grid, Typography} from "@mui/material";
import {decrement} from "../../features/counter/counterSlice";
import { useGetUsersQuery} from "../../features/testApi/testApiSlice";

const AboutUs = () => {

    const dispatch = useDispatch()

    const [users,setUsers] = useState([]);

    // Uncomment if you want the component to fetch at the initial render
    // useEffect(() => {
    //     getAllUsers()
    // },[])

    // Fetching data inside the component
    const getAllUsers = () => fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((result) => {
            setUsers(result)
        })

    // Done inside redux
    const { data, error, isLoading } = useGetUsersQuery()

    if(isLoading){
        return <CircularProgress />
    }

    console.log(data)
    return (
        <Grid style={{height: '500px', background: 'white'}}>
            <Button variant={"contained"} onClick={() => dispatch(decrement())}>
                Decrement
            </Button>
            <Button onClick={() => getAllUsers() }>
                Fetch Users
            </Button>
            <Grid container>
                <Grid item xs={6}>
                    <Typography variant={"h4"} marginY={5}>
                        Fetched from redux
                    </Typography>
                    <div>
                        {
                            data.map((e) => {
                                if(e?.email){
                                    return (<div>{e.email}</div>)
                                }
                            })
                        }
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant={"h4"} marginY={5}>
                        Fetched from the button
                    </Typography>
                    <div>
                        {
                            users.map((e) => {
                                if(e?.email){
                                    return (<div>{e.email}</div>)
                                }
                            })
                        }
                    </div>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default AboutUs;