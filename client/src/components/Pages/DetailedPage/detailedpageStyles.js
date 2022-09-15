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
        gridGap: '20px',
        [theme.breakpoints.down('xs')]: {
          padding: '5px',
        },
      },
    
      imageSection: {
        [theme.breakpoints.down('sm')]: {
          marginLeft: 0,
        },
      },

      overlay: {
        position: 'absolute',
        top: '5px',
        left: '5px',
      },
    
      avatar: {
        color: 'white',
        backgroundColor: theme.palette.secondary.main,
      },

      icons: {
        fontSize: '16px',
        "&:hover": {
          color: theme.palette.secondary.main,
          backgroundColor: 'unset',
        },
      },


    

    
}));