import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    main: {
        marginTop: theme.spacing(8),
    },
    box: {
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    
    mainButton: {
        borderRadius: '48px',
    }
}));