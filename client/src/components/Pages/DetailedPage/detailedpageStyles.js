import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
 
    paper: {
        display: 'block',
        height: '100%',
      },
    
      media: {
        objectFit: 'cover',
        width: '100%',
        maxHeight: '600px',
        borderRadius: '26px',
      },
      
      card: {
        position: 'relative',
        margin: '20px',
        display: 'flex',
        boxSizing: 'border-box',
        [theme.breakpoints.down('sm')]: {
          flexWrap: 'wrap',
          flexDirection: 'column',
        },
    
        [theme.breakpoints.down('xs')]: {
          margin: '20px 0',
        },
      },
      
      section: {
        borderRadius: '20px',
        flex: 1,
        padding: '20px 40px',
        [theme.breakpoints.down('sm')]: {
          padding: '10px',
        },
      },
    
      imageSection: {
        [theme.breakpoints.down('sm')]: {
          marginLeft: 0,
        },
      },
    

    
}));