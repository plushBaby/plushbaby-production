import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    categoryCard: {
        background: 'none',
        boxShadow: 'none',
        textAlign: 'center',
    },

    wrapper: {
        padding: '20px',
    },

    img: {
        borderRadius: '100px',
    },
    content: {
        padding: '10px 0',
        lineHeight: 'normal',
    }
}));