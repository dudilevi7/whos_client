import { Card } from '@material-ui/core'
import React from 'react'
import LDButton from '../../components/customs/LDButton';
import ResponsiveTypography from '../../components/customs/ResponsiveTypography';
import './Homepage.css'

const Homepage = props => {
    return (
            <div>
               
                <Card className="cardContainer">
                    <ResponsiveTypography variant="h5">התחבר באמצעות</ResponsiveTypography>
                    <LDButton bgcolor1 = "#0079ED" color ="white">
                        התחבר עם פייסבוק
                    </LDButton>
                    <LDButton bgcolor1 = "tomato" color ="white">
                        התחבר עם גוגל
                    </LDButton>
                    <LDButton bgcolor1 = "#B2B2B2" color ="white">
                        הרשמה מהירה לאתר
                    </LDButton>
                </Card>
            </div>
        
        )
}
export default Homepage;