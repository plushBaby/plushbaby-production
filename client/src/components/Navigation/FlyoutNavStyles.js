import { makeStyles } from '@material-ui/core/styles';
// import { styled } from '@material-ui/styles';

export default makeStyles(() => ({
    FlyOutNavContainer: {
        position: 'fixed',
        zIndex: '100',
        width: '70%',
        height: '100%',
        background: 'white',
        display: 'grid',
        alignItems: 'center',
        top: '0',
        left: '-100',
        boxShadow: '1px 1px 10px grey',
        opacity: '0',
        left: '-100%',
        transition: '0.3s ease-in-out',
    },
    isOpen: {
        opacity: '100%',
        left: '0%',
    },
}))
