import { Card, Container } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router';
import LDButton from '../../components/customs/LDButton';
import ResponsiveTypography from '../../components/customs/ResponsiveTypography';
import './Homepage.css'

const Homepage = props => {
    let history = useHistory();

    return (

        <Container maxWidth="md">
            <Card className="cardContainer">
                <ResponsiveTypography variant="h5">התחבר באמצעות</ResponsiveTypography>
                <LDButton bgcolor1="#0079ED" color="white">
                    התחבר עם פייסבוק
                    </LDButton>
                <LDButton bgcolor1="tomato" color="white">
                    התחבר עם גוגל
                    </LDButton>
                <LDButton onClick={() => history.push('/login')} bgcolor1="#B2B2B2" color="white">
                    התחברות רגילה
                    </LDButton>
                <LDButton onClick={() => history.push('/register')} variant="text" bgcolor1="white" color="#2b2b2b" border="#2b2b2b">
                    לא נרשמת עדיין ? אנא לחץ כאן
                    </LDButton>
            </Card>
        </Container>
    )
}
export default Homepage;