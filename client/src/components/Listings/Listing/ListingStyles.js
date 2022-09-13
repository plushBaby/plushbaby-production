import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
  roundedCorners: {
    borderRadius: '26px',
  },
  cardTitle: {
    fontSize: '14px',
    lineHeight: 'normal',
  },

  cardContent: {
    height: '100px',
    overflow: 'hidden',
  },
  cardActions: {
    padding: '5px 15px',
  }
  
}));