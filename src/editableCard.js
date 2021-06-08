import React from 'react'
import { Paper, Button, CardContent, FormControl, TextField, Grid } from '@material-ui/core';

export default function EditableCard(props) {

    const user = props.test;

    const [name, setName] = React.useState(user.name);
    const [visitor, setVisitor] = React.useState(user.visitor);
    const [unit, setUnit] = React.useState(user.unit);
    const [phoneNumber, setPhoneNumber] = React.useState(user.phoneNumber);
    const [edit, setEdit] = React.useState(false);

    var tempName = name;
    var tempVisitor = visitor;
    var tempUnit = unit;
    var tempPhonenumber = phoneNumber;

    const handleChangeName = (event) => {

        tempName = event.target.value;

    }
    const handleChangeVisitor = (event) => {

        tempVisitor = event.target.value;

    }
    const handleChangeUnit = (event) => {

        tempUnit = event.target.value;

    }
    const handleChangePhone = (event) => {

        tempPhonenumber = event.target.value;

    }

    const saveCard = () => {

        setName(tempName);
        setVisitor(tempVisitor);
        setPhoneNumber(tempPhonenumber);
        setUnit(tempUnit);

        // save to database

        setEdit(false);

    }

    const editCard = () => {

        tempName = name;
        tempVisitor = visitor;
        tempPhonenumber = phoneNumber;
        tempUnit = unit;
        setEdit(true);

    }

    return(
        <div id="editableCard">
            {!edit ? (
            <Paper style={{width: 202, height:300}} >
                <CardContent style={{marginLeft: 0}}>
                <FormControl style={{width: 150}}>
                        <TextField 
                            disabled
                            multiline 
                            label={"Resident"} 
                            style={{width: 150, paddingBottom: 10}} 
                            defaultValue={tempName} 
                            onChange={handleChangeName}
                        />
                    </FormControl>
                    <FormControl style={{width: 150}}>
                        <TextField 
                            disabled
                            multiline 
                            label={"Unit"} 
                            style={{width: 150, paddingBottom: 10}} 
                            defaultValue={tempUnit} 
                            onChange={handleChangeUnit}
                        />
                    </FormControl>
                    <FormControl>
                        <TextField 
                            disabled
                            label="Visitor" 
                            style={{width: 150, paddingBottom: 10}} 
                            defaultValue={tempVisitor} 
                            onChange={handleChangeVisitor}
                        />
                    </FormControl>
                    <FormControl>
                        <TextField 
                            disabled
                            inputProps={{ maxLength: 10 }} 
                            label="Phone Number" 
                            style={{width: 150, paddingBottom: 10}} 
                            defaultValue={tempPhonenumber} 
                            onChange={handleChangePhone} 
                        />
                    </FormControl>
                    <Button variant="outlined" onClick={editCard}>Edit</Button>
                </CardContent>
            </Paper>

            ) : (

            <Paper style={{width: 200, height:300}}>
                <CardContent>
                    <FormControl style={{width: 150}}>
                        <TextField 
                            multiline 
                            label={"Resident"} 
                            style={{width: 150, paddingBottom: 10}} 
                            defaultValue={tempName} 
                            onChange={handleChangeName}
                        />
                    </FormControl>
                    <FormControl style={{width: 150}}>
                        <TextField 
                            multiline 
                            label={"Unit"} 
                            style={{width: 150, paddingBottom: 10}} 
                            defaultValue={tempUnit} 
                            onChange={handleChangeUnit}
                        />
                    </FormControl>
                    <FormControl>
                        <TextField 
                            label="Visitor" 
                            style={{width: 150, paddingBottom: 10}} 
                            defaultValue={tempVisitor} 
                            onChange={handleChangeVisitor}
                        />
                    </FormControl>
                    <FormControl>
                        <TextField 
                            inputProps={{ maxLength: 10 }} 
                            label="Phone Number" 
                            style={{width: 150, paddingBottom: 10}} 
                            defaultValue={tempPhonenumber} 
                            onChange={handleChangePhone} 
                        />
                    </FormControl>
                    <Grid>
                        <Button variant="outlined" color="primary" onClick={saveCard}>Save</Button>
                        <Button variant="outlined" color="secondary" onClick={() => {setEdit(false)}}>Cancel</Button>
                    </Grid>
                </CardContent>
            </Paper>
            )}
        </div>
    )
}