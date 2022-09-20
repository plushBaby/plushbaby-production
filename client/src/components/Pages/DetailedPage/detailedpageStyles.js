import { makeStyles } from '@material-ui/core/styles';
import { Column1 } from '../../HeroBanner/HeroBannerStyles';

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

      
      commentSection: {
        borderRadius: '20px',
        padding: '5px 40px',
        gridGap: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flexEnd',
        [theme.breakpoints.down('xs')]: {
          padding: '5px',
        },
      },

      commentFlexbox: {
        display: 'flex',
        flexDirection: 'column',
      },

      commentBox: {
        fontSize: "16px",
        height: "75px",
        backgroundColor: theme.palette.light.main,
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
        backgroundColor: theme.palette.primary.main,
      },

      icons: {
        fontSize: '16px',
        "&:hover": {
          color: theme.palette.secondary.main,
          backgroundColor: 'unset',
        },

        [theme.breakpoints.down('xs')]: {
          fontSize: '10px',
        },
      },

      submit: {
        fontSize: '16px',
        borderRadius: '68px',
        marginTop: "20px",
        "&:hover": {
          color: theme.palette.secondary.main,
          backgroundColor: 'unset',
        },
      },

      price: {
        color: theme.palette.secondary.dark,
        margin: '20px 0',
      }
}));