import React from 'react';
import {  useNavigate } from 'react-router-dom';
import { Card,  CardMedia, CardContent, Typography, CardActionArea , Link} from '@material-ui/core';
import useStyles from './CategoryStyles';

const Category = ({ category }) => {

    const classes = useStyles();
    const navigate = useNavigate();
    
    const openCategoryPage = () => {
        navigate(`/${category.name}`);
    };

return (
    
    <Card className={classes.categoryCard}>
        {/* <Link to={`/listings/${category.name}`}>  */}
            <CardActionArea  className={classes.wrapper} onClick={openCategoryPage}>
                <CardMedia
                    className={classes.img}
                    component="img"
                    height="auto"
                    image={category.image}
                    alt={category.title}
                />
                <CardContent className={classes.content}>
                    <Typography gutterBottom variant="body2" component="div"> {category.title} </Typography>
                </CardContent>
            </CardActionArea>
        {/* </Link> */}
    </Card>

  )
}

export default Category