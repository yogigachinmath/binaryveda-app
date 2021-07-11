import { makeStyles } from '@material-ui/core/styles';

export const Styles = makeStyles({
  heading: {
    color: '#3A3335',
    fontFamily: 'Inter',
    fontSize: '34px',
    letterSpacing: '-0.09px',
    lineHeight: '48px',
    textAlign: 'center',
    marginBottom: '0.25rem',
  },
  paragraph: {
    color: '#908E8E',
    fontFamily: 'Inter',
    fontSize: '14px',
    letterSpacing: '-0.1px',
    lineHeight: '21px',
    textAlign: 'center',
    marginTop: '0rem',
  },
  headingContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    marginBottom: '2rem',
  },
  submitButton: {
    backgroundColor: '#f24a4f',
    borderRadius: '10px',
    width: '27.25rem',
    height: '54px',
    marginTop: '1rem',
    color: '#FFFFFF',
    fontFamily: 'Inter',
    fontSize: '14px',
    letterSpacing: '-0.1px',
    lineHeight: '21px',
    textAlign: 'center',
    '&:hover': {
      backgroundColor: '#f24a4f',
    }
  },
})
