import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    categories: {
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },

    categoryCard: {
        background: 'none',
        boxShadow: 'none',
        textAlign: 'center',
    },

    wrapper: {
        padding: '20px',
        [theme.breakpoints.down('md')]: {
            padding: '10px',
        },
    },

    img: {
        borderRadius: '100px',
    },
    
    content: {
        padding: '10px 0',
        lineHeight: 'normal',
    }
}));