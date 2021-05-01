
import { CircularProgress } from '@material-ui/core';
import './Exceptions.css';

export const ErrorPage = ({ error })=>{
    return (
        <div className="expContainer">
            <h2>Error Message!</h2>
            <div className="errAlert">
                <strong>{error}</strong>
            </div>
        </div>
    )
}
export const LoaderSpinner = () => {
    return (<div className="expContainer">
                <CircularProgress color="secondary"/>
                <div className = "loadAlert">
                     <strong>Loading...</strong>
                </div>
            </div>)
} 