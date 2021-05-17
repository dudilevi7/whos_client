import { Card, Container } from '@material-ui/core'
import React, { useEffect, useState } from 'react';
import './GamePage.css'
import { REACT_APP_WHOS_API , REACT_APP_QUES_ROUTE } from '../../constants/constants';
import fetchData from '../../services/fetchData';
import { LoaderSpinner } from '../../components/Exceptions/Exceptions';
import gameService from '../../services/gameService';
import Question from '../../components/Question/Question';

const GamePage = props => {
    const [questions, setQuestions] = useState();
    const [currIndex, setCurrIndex] = useState(0);

    useEffect(() => {
        const fetchQuestions = async () => {
            const data = await fetchData(REACT_APP_WHOS_API+REACT_APP_QUES_ROUTE);
            if (data) {
                gameService.shuffleArray(data); //shuffle the order of the questions
                setTimeout(() => {
                    setQuestions(data)    
                }, 500);
                
            }
        }
        fetchQuestions();
    }, [])

    const onSendAnswer = () => {
        if (currIndex < questions.length - 1)
            setCurrIndex(currIndex => currIndex + 1)
        else alert('game is end')
    }

    return (
        <Container maxWidth="md">
            <Card className="cardContainer">
                {!questions && <LoaderSpinner />}
                {questions && <Question data={questions[currIndex]} onSendAnswer={onSendAnswer} />}
            </Card>
        </Container>
    )
}
export default GamePage;