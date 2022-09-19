import { makeStyles } from '@material-ui/core/styles';
// import { styled } from '@material-ui/styles';

export default makeStyles((theme) => ({
    FlyOutNavContainer: {
        position: 'fixed',
        zIndex: '100',
        width: '70%',
        maxWidth: '500px',
        height: '100%',
        display: 'grid',
        alignItems: 'center',
        top: '0',
        boxShadow: '1px 1px 10px grey',
        opacity: '0',
        left: '-100%',
        transition: '0.3s ease-in-out',
        textAlign: 'center',
        background: 'white',
    },
    isOpen: {
        opacity: '100%',
        left: '0%',
    },

    container: {
        display: 'grid',
        alignItems: 'center',
        height: '100%',
    },

    link: {
        display: 'block',
        maxWidth: '400px',
        margin: '10px auto',
        textTransform: 'capitalize',
        borderRadius: "68px",
        padding: "15px",
    },
    userName: {
        textTransform: 'capitalize',
    }
}))
