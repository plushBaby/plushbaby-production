import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import useStyles from './FormStyles';

import  { createAListing, updateListing } from '../../actions/listings'

const Form = ({ currentId, setCurrentId }) => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const [listingData, setListingData] = useState ({
        title: '', 
        price: '',  
        condition: '', 
        description: '', 
        tags: '', 
        selectedFile: '',
    });
    

    const listing = useSelector((state) => (currentId ? state.listings.find((listing) => listing._id === currentId) : null ));

    useEffect(() => {
        if(listing) setListingData(listing);
    }, [listing]);

    const clear = () => {
        setCurrentId(null);
        setListingData({ title: '', condition: '', price: '', description: '', tags: '', selectedFile: '' });
    };

    
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('publish button clicked');
        console.log(listingData);
        if(currentId === null) { 
            dispatch(createAListing( {...listingData } ))
            
        } else {
            dispatch(updateListing( currentId, {...listingData } ));
        }
    };


    return (
        
        <form 
            autoComplete="off" 
            noValidate 
            className={`
                ${classes.root}
                ${classes.form}
            `} 
            onSubmit={handleSubmit}
        >
            <Typography variant='h6'> Create a Listing </Typography>
            
            <TextField 
                name="title"
                variant="outlined"
                label="Listing title"
                fullWidth
                value={listingData.title}
                required
                onChange={(event) => setListingData({ ...listingData, title: event.target.value })}
            />
            <TextField 
                name="price"
                variant="outlined"
                label="Asking price"
                fullWidth
                value={listingData.price}
                onChange={(event) => setListingData({ ...listingData, price: event.target.value })}
            />
            <TextField 
                name="condition"
                variant="outlined"
                label="Condition"
                fullWidth
                value={listingData.condition}
                onChange={(event) => setListingData({ ...listingData, condition: event.target.value })}
            />

            <TextField 
                name="description"
                variant="outlined"
                label="Description"
                fullWidth
                value={listingData.description}
                onChange={(event) => setListingData({ ...listingData, description: event.target.value })}
            />

            <TextField 
                name="tags"
                variant="outlined"
                label="Tags"
                fullWidth
                value={listingData.tags}
                onChange={(event) => setListingData({ ...listingData, tags: event.target.value.split(',') })}
            />
            <div className={classes.fileInput}>
                <FileBase
                    type="file"
                    multiple={false}
                    onDone={({base64}) => setListingData({ ...listingData, selectedFile: base64 })}
                >
                </FileBase>
            </div>
            <Button className={classes.mainButton} variant="contained" color="primary"  size="large" type="submit" fullWidth > Publish  </Button>
        </form>
        
    );
}

export default Form;