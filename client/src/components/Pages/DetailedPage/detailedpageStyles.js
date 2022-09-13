import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
 
    paper: {
        display: 'block',
        height: '100%',
      },
    
      media: {
        objectFit: 'cover',
        width: '100%',
        maxHeight: '700px',
        borderRadius: '26px',
      },
      
      card: {
        position: 'relative',
        margin: '20px',
        display: 'flex',
        boxSizing: 'border-box',
        [theme.breakpoints.down('xs')]: {
          margin: '20px 0',
          display: 'block',
        },
      },
      
      section: {
        borderRadius: '20px',
        flex: 1,
        padding: '5px 40px',
        [theme.breakpoints.down('xs')]: {
          padding: '5px',
        },
      },
    
      imageSection: {
        [theme.breakpoints.down('sm')]: {
          marginLeft: 0,
        },
      },
    

    
}));