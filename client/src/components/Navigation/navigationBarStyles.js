import { makeStyles } from '@material-ui/core/styles';

export  default makeStyles((theme) => ({
  appBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
    background: theme.palette.primary.main,
    [theme.breakpoints.down('sm')]: {
      padding: '10px',
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

  link: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      marginTop: 20,
      justifyContent: 'center',
      display: 'none',
    },
  },

  navlink: {
    color: 'white',
    textDecoration: 'none',
    display: 'flex',
    columnGap: '10px',
    lineHeight: '1.8',
  },

  mainButton: {
    borderRadius: '48px',
  }, 

  mobileIcon: {
    display: 'none',

    [theme.breakpoints.down('sm')]: {
      display: 'block',
      cursor: 'pointer',
      color: 'white',
    },
  }
}))

