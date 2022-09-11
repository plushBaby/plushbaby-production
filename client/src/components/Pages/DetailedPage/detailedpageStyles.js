import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

    paper: {
        marginTop: '20px',
        display: 'flex',
        backgroundColor: 'unset',
        boxShadow: 'unset',
      },
    
      container: {
        display: 'flex',
      },
    
      media: {
        objectFit: 'cover',
        width: '100%',
        maxHeight: '600px',
        borderRadius: '26px',
      },
      card: {
        position: 'relative',
        margin: '0 20px',
        display: 'flex',
        boxSizing: 'border-box',
        backgroundColor: 'white',
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
        padding: '20px'
      },
    
      imageSection: {
        [theme.breakpoints.down('sm')]: {
          marginLeft: 0,
        },
      },
    

    
}));