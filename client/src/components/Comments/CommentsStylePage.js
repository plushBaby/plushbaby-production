import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

    comments: {
        marginTop: '20px',
    },
    commentsTitle: {
        fontSize: '30px',
        marginBottom: '20px',
    },
      
    commentsContainer: {
        marginTop: '40px',
    },

    commentFormTitle: {
        fontSize: '22px',
    },
      
    commentFormTextarea: {
        width: '100%',
        height: '80px',
        marginBottom: '8px',
        marginTop: '8px',
        border: 'none',
        color: theme.palette.secondary.dark,
        border: '1px #fffff',
    },
      
    commentFormButton: {
        fontSize: '16px',
        padding: '8px 16px',
        background: '#84D4E1',
        borderRadius: '8px',
        background: theme.palette.light.main,
    },
      
    commentFormButton: {
        "&:hover": {
            color: theme.palette.secondary.main,
            backgroundColor: 'unset',
        },

        borderRadius: '68px',
        padding: '15px',
        width: '50%',
        justifyContent: 'center',
        
    },
      
    comment: {
        display: 'flex',
        marginBottom: '28px',
    },
      
    commentImagecontainer: {
        marginright: '16px',
    },
      
    avatar: {
        color: 'white',
        backgroundColor: theme.palette.primary.main,
    },
      
    commentRightPart: {
        paddingLeft: '14px',
        width: '100%',
    },
      
    commentContent: {
        display: 'flex',
    },
      
    commentAuthor: {
        marginRight: '8px',
        fontSize: '20px',
        color: theme.palette.secondary.main,
    },
    commentText: {
        fontSize: '18px',
    },
      
    commentActions: {
        display: 'flex',
        fontSize: '12px',
        color: theme.palette.secondary.main,
        cursor: 'pointer',
        marginTop: '8px',
    },
      
    commentAction: {
        hover: {
            textDecoration: 'underline',
        },
            marginRight: '8px',
    },
      
    replies: {
        marginTop: '20px',
      },
      



      
}));