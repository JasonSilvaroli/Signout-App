import React from 'react';
import { Grid, Paper, CardContent, Typography, Button } from '@material-ui/core';
import EditableCard from './editableCard';

function TimeRow(props) {

    const [hide, setHide] = React.useState(false);

    var row = props.cards.map(function(obj) {

        return(
            <Grid item key={obj.key} style={{width: 202, height:300, marginRight: 1}}>
                <EditableCard test={obj} ></EditableCard>
            </Grid>
        )
    })

    return(
        <div>
            {!hide ? (
        <Grid container style={{marginBottom: 10}}>  
            <Grid item key="0" style={{marginRight: 10}}>
                <Paper style={{width: 200, height: 88}}>
                    <CardContent>
                        <Typography> {props.time} </Typography>
                        <Button variant="outlined" onClick={() => setHide(true)}>Hide</Button>
                    </CardContent>
                </Paper>
            </Grid>

            {row}
        </Grid>   
            ) : (

        <Grid container style={{marginBottom: 10}}>  
            <Grid item key="0" style={{marginRight: 10}}>
                <Paper style={{width: 200, height: 88}}>
                    <CardContent>
                        <Typography> {props.time} </Typography>
                        <Button variant="outlined" onClick={() => setHide(false)}>Show</Button>
                    </CardContent>
                </Paper>
            </Grid>
        </Grid> 

            )}
        </div>

    )


}

export default TimeRow;