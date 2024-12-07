import React, { useState } from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login'
import { useDispatch } from 'react-redux'
import { GOOGLE_CLIENT_ID } from '../../constants/constants'
import isTokenExpiry from '../../lib/is-token-expiry'
import { setGoogleLogin, setLogout } from '../../redux/auth/authActions'


const Logout = ({ onSuccessLogout }) => {
    const onLogoutSuccess = () => {
        onSuccessLogout()
    }
    return (
        <div>
            <GoogleLogout
                clientId={GOOGLE_CLIENT_ID}
                buttonText="התנתק מגוגל"
                onLogoutSuccess={onLogoutSuccess} />
        </div>
    )
}

const Login = ({ onSuccessLogin }) => {

    const onSuccess = (res) => {
        onSuccessLogin(res)
    }
    const onFailure = (res) => {
    }

    return (
        <div>
            <GoogleLogin
                clientId={GOOGLE_CLIENT_ID}
                buttonText="התחבר עם גוגל"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true} />
        </div>
    )
}
const GoogleAuthButton = () => {
    const [isSignedIn, setIsSignedIn] = useState(false)

    const dispatch = useDispatch()

    const onLogin = (data) => {
        const {
            accessToken,
            profileObj: profile = {},
            tokenObj: {
                'expires_at': expiresAt,
                'id_token': tokenId,
            } = {},
        } = data || {}
        if (!isTokenExpiry(expiresAt, tokenId)) {

            dispatch(setGoogleLogin({
                accessToken,
                profile,
                expiresAt,
                tokenId,
            }, true));
            setIsSignedIn(true)
        }
    }
        const onLogout = () => {
            dispatch(setLogout())
            setIsSignedIn(false)
        }
        return (
            !isSignedIn ? <Login onSuccessLogin={(data) => onLogin(data)} />
                : <Logout onSuccessLogout={() => onLogout()} />
        )
    }

    export default GoogleAuthButton