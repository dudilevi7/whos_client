import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBlock: '10px',
    },
    img: {
        cursor: 'pointer',
        height: '42px',
        width: '160px'
    }
}))
