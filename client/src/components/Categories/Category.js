import React, { useEffect , useState }   from 'react';
import { useLocation , useNavigate } from 'react-router-dom';
import { Card,  CardMedia, CardContent, Typography, CardActionArea , Link} from '@material-ui/core';
import useStyles from './CategoryStyles';

const Category = ({ category }) => {

    const classes = useStyles();
    const navigate = useNavigate();
    const location = useLocation();
    const [ currentCategory, setCategory ] = useState(null);

    useEffect( () => {
        setCategory(category.title);
      }, [location]);

    const openCategoryPage = () => {
        // setCurrentId(listing._id);
        setCategory(category.name);
        navigate(`/${category.name}`);
    };

    return (
        <Card className={classes.categoryCard}>
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
        </Card>
    )
}

export default Category