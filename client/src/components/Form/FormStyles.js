import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

    root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
        },
      },
      paper: {
        
      },

      form: {
        margin: '80px auto',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
      },
    
      fileInput: {
        width: '97%',
        margin: '10px 0',
      },
      buttonSubmit: {
        borderRadius: '48px',
        marginBottom: 10,
        margin: 'auto',
        maxWidth: '400px'
      },
}));