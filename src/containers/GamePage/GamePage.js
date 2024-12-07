import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import { Card, Container } from '@material-ui/core'
import { REACT_APP_WHOS_API , REACT_APP_QUES_ROUTE } from '../../constants/constants';
import fetchData from '../../services/fetchData';
import { LoaderSpinner } from '../../components/Exceptions/Exceptions';
import gameService from '../../services/gameService';
import Question from '../../components/Question/Question';
import './GamePage.css'
import { updateUserResult } from '../../redux/stats/actions';

const GamePage = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState();
    const [currIndex, setCurrIndex] = useState(0);
    const [pointsCount, setPointsCount] = useState(0);
    const [corrects, setCorrects] = useState(0);
    const userId = useSelector((state) => state.auth.userData._id);
    const userCurrResult = useSelector((state) => state.auth.userData.highScore.result);
    const isGameOn = questions && currIndex < questions.length;

    useEffect(() => {
        fetchQuestions();
    }, []);

    useEffect(() => {
        if (currIndex > 0 && !isGameOn) {
            setUserResult()
        }
    }, [isGameOn]);

    const setUserResult = async() => {
        const shouldUpdateUserResult = pointsCount > userCurrResult;
        if (shouldUpdateUserResult) {
            setLoading(true);
            await dispatch(updateUserResult(userId, pointsCount));
            setLoading(false);
        }
        setTimeout(() => history.push('/statistics'), 3000);
        
    }
    const fetchQuestions = async () => {
        setLoading(true);
        const data = await fetchData(REACT_APP_WHOS_API+REACT_APP_QUES_ROUTE);
        if (data) {
            gameService.shuffleArray(data); //shuffle the order of the questions
            setTimeout(() => {
                setQuestions(data)
                setLoading(false);    
            }, 500);
            
        }
    }

    const onSendAnswer = (points, isCorrectAnswer) => {
        if(isCorrectAnswer) {
            setPointsCount(prevPointsCount => prevPointsCount + points);
            setCorrects(corrects + 1);
        }
        setCurrIndex(currIndex + 1);
    }
    const renderTitleByPoints = () => {
        if (pointsCount < 20 ) return "משחק סבירררר"
        if (pointsCount < 45) return "שיחקתתת אותה"
        return "צ'מפיוןןןןןןןן"
    }
    if (loading) return <LoaderSpinner />
    return (
        <Container maxWidth="md">
            <Card className="cardContainer">
                {isGameOn ? 
                <div className="">
                    <Question pointsCount={pointsCount} data={questions[currIndex]} onSendAnswer={onSendAnswer} />
                </div> :
                <div className="col g10">
                    <span>{renderTitleByPoints()}</span>
                    <div className="row g10">
                        <span>סך הכל צלחת</span>
                        <span className="bold">{corrects}/{questions?.length}</span>
                    </div>
                    <span className="pointsCount bold">{pointsCount}</span>
                </div>
                }
            </Card>
        </Container>
    )
}
export default GamePage