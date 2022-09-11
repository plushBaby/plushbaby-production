import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
    background: theme.palette.primary.main,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },

  logo: {
    backgroundColor: '#72cad8',
  },

  heading: {
    color: theme.palette.primary.main,
    color: 'white',
    textDecoration: 'none',
    fontSize: '1.5em',
    fontWeight: 300,
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
    },
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
    color: 'white',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      marginTop: 20,
      justifyContent: 'center',
    },
  },
  profileName: {
    display: 'flex',
    columnGap: '10px',
  },

  mainButton: {
    borderRadius: '48px',
  }
  
}))