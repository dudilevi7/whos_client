import { Card, Container } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router';
import LDButton from '../../components/customs/LDButton';
import ResponsiveTypography from '../../components/customs/ResponsiveTypography';
import './Homepage.css'

const Homepage = props => {
    let history = useHistory();

    return (

        <Container maxWidth="xs">
            <Card className="cardContainer">
                <LDButton onClick={() => history.push('/login')} bgcolor1="#0079ED" color="white">
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