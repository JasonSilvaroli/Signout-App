import React from 'react';
import { CardContent, Typography, Grid, Paper, Card, TextField, FormControl } from '@material-ui/core';
import TimeRow from './TimeRow'

function TimeCard() {

    

    var destinations = [
        {name: "Front Gazebo", num: 1},
        {name: "Poolside", num: 2},
        {name: "Steeles/Palm Gate", num: 3},
        {name: "Sunrise Corner", num: 4},
        {name: "Sunrise Corner", num: 5},
        {name: "Outside Dining Room", num: 6},
        {name: "Parkette", num: 7},
        {name: "Parkette", num: 8},
    ]

    var test= [
        {name: "Jason Silvaroli", unit: "123", visitor: "Dom", phoneNumber: "1234567890", key: "0"},
        {name: "Jason Silvaroli", unit: "543", visitor: "Dom", phoneNumber: "1354854656", key: "1"},
        {name: "", unit: "", visitor: "", phoneNumber: "", key: "2"},
        {name: "", unit: "", visitor: "", phoneNumber: "", key: "3"},
        {name: "Jason Silvaroli", unit: "445", visitor: "Dom", phoneNumber: "3425673435", key: "4"},
        {name: "", unit: "", visitor: "", phoneNumber: "", key: "5"},
        {name: "", unit: "", visitor: "", phoneNumber: "", key: "6"},
        {name: "Jason Silvaroli", unit: "534", visitor: "Dom", phoneNumber: "1234567890", key: "7"},
    ]

    var topCards1 = destinations.map(function(obj) {

        return(
            <Grid item key={obj.num} style={{ width: 202, marginRight:1}}>
                <Paper style={{width: 202, height:88}} >
                    <CardContent>
                        <FormControl style={{width: 150}}>
                            <TextField 
                                style={{width: 150, paddingBottom: 10}} 
                                disabled
                                value={"Garden " + obj.num}
                            />
                        </FormControl>
                        <FormControl style={{width: 150}}>
                            <TextField 
                                style={{width: 150, paddingBottom: 10}} 
                                disabled
                                value={obj.name}
                            />
                        </FormControl>
                    </CardContent>
                </Paper>
            </Grid>
        )

    });

    return (
            <Grid container direction="column" alignContent="space-between" >

                <Grid container style={{marginTop: 10, position: "fixed", top:0, zIndex:2}} id="topCards">
                    <Grid item id="timeCard" style={{width: 200, marginRight:10}}>
                        <Paper style={{height: 88}}>
                            <CardContent>
                                <Typography> Time </Typography>
                            </CardContent>
                        </Paper>
                    </Grid>

                

                    {topCards1}

                </Grid>     
                    
                <Grid container style={{marginTop: 110}} direction="column">
                    <TimeRow cards={test} time="9:00 AM - 10:00 AM"></TimeRow>
                    <TimeRow cards={test} time="10:30 AM - 11:30 AM"></TimeRow>
                    <TimeRow cards={test} time="12:00 PM - 1:00 PM"></TimeRow>
                    <TimeRow cards={test} time="1:30 PM - 2:30 PM"></TimeRow>
                    <TimeRow cards={test} time="3:00 PM - 4:00 PM"></TimeRow>
                    <TimeRow cards={test} time="4:30 PM - 5:30 PM"></TimeRow>
                    <TimeRow cards={test} time="6:00 PM - 7:00 PM"></TimeRow>
                </Grid>

            </Grid>
    )

}

export default TimeCard;