import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import useStyles from './FormStyles';
import  { createAListing, updateListing } from '../../actions/listings'

const Form = ({ currentId, setCurrentId, loadedListing, setCategory }) => {
  
    const listing = useSelector((state) => (currentId ? state.listings.find((listing) => listing._id === loadedListing._id) : null ));
    const userIn = JSON.parse(localStorage.getItem('accountProfile'));

    useEffect(() => {
        if(listing) setListingData(listing);
    }, [listing]);

    const classes = useStyles();
    const dispatch = useDispatch();
    const [listingData, setListingData] = useState ({
        title: loadedListing ? loadedListing.title : '', 
        subtitle: loadedListing ? loadedListing.subtitle : '',
        price: loadedListing ? loadedListing.price : '', 
        category: loadedListing ? loadedListing.category : '', 
        condition: loadedListing ? loadedListing.condition : '', 
        description: loadedListing ? loadedListing.description : '', 
        tags: loadedListing ? loadedListing.tags : '', 
        selectedFile: loadedListing ? loadedListing.selectedFile : '',
    });
    
    const clear = () => {
        setCurrentId(null);
        setCategory(null);
        setListingData({ title: '', subtitle: '', condition: '', price: '', category: '', description: '', tags: '', selectedFile: '' });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(!loadedListing) { 
            dispatch(createAListing( {...listingData, name: userIn?.result?.name } ))
            window.alert("Your new listing has been posted.")
            window.location.reload(true);

        } else {
            dispatch(updateListing( loadedListing._id, {...listingData, name: userIn?.result?.name } ));
            window.location.reload(true);
        }

        clear();
    };

    if( !userIn?.result?.name) {
        
        return (
            <Typography variant='h6' aligned='center'>
                Please sign in to create a new listing
            </Typography>
        );
    }

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
            <Typography variant='h4'> {loadedListing ? 'Editing this' : 'Start a '}  listing </Typography>
            
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
                name="subtitle"
                variant="outlined"
                label="Listing sub title"
                fullWidth
                value={listingData.subtitle}
                onChange={(event) => setListingData({ ...listingData, subtitle: event.target.value })}
            />
            <TextField 
                name="price"
                variant="outlined"
                label="Asking price"
                fullWidth
                type="number"
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
                multiline
                rows={5}
                value={listingData.description}
                onChange={(event) => setListingData({ ...listingData, description: event.target.value })}
            />
            
             
             
            <FormControl fullWidth variant="outlined"  className={classes.formControl} >
                    <InputLabel id="category">Category</InputLabel>
                    <Select
                        labelId="category"
                        name="category"
                        label="Category"
                        value={listingData.category}
                        fullWidth
                        onChange={(event) => setListingData({ ...listingData, category: event.target.value })}
                    >
                    <MenuItem value="Beanie Babies"> Beanie Babies </MenuItem>
                    <MenuItem value="Furby"> Furby </MenuItem>
                    <MenuItem value="Disney"> Disney </MenuItem>
                    <MenuItem value="Pokemon"> Pokemon </MenuItem>
                    <MenuItem value="Riot Games"> Riot Games </MenuItem>
                    <MenuItem value="Anime"> Anime </MenuItem>
                    </Select>
            </FormControl>


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
            <Button className={classes.buttonSubmit} variant="contained" color="primary"  size="large" type="submit" fullWidth > {loadedListing ? 'Update changes' : 'Publish'}  </Button>
        </form>
        
    );
}

export default Form;