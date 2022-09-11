import React from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import useStyles from './FormStyles';

const Form = () => {
    
    const classes = useStyles();

    return (
        <Paper className={classes.paper} >
            <form className={`${classes.root} ${classes.form}`} >

                <Typography variant='h6'>  Create a listing </Typography>
                
                <TextField 
                    name="title"
                    variant="outlined"
                    label="Listing title"
                    fullWidth
                    required
                />
                <TextField 
                    name="price"
                    variant="outlined"
                    label="Asking price"
                    fullWidth
                />
                <TextField 
                    name="condition"
                    variant="outlined"
                    label="Condition"
                    fullWidth
                />

                <TextField 
                    name="description"
                    variant="outlined"
                    label="Description"
                    fullWidth
                />

                <TextField 
                    name="tags"
                    variant="outlined"
                    label="Tags"
                    fullWidth
                />
                <div>
                    <FileBase
                        className={classes.fileInput}
                        type="file"
                        multiple={false}
                    >
                    </FileBase>
                </div>
                <Button className={classes.mainButton} variant="contained"  color="primary"  size="large" type="submit" fullWidth > Publish </Button>
            </form>
        </Paper>
    );
}

export default Form;