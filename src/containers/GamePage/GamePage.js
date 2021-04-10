import { Card } from '@material-ui/core'
import React, { useEffect, useState } from 'react';
import './GamePage.css'
import { WHOS_API } from '../../constants/constants';
import getRequest from '../../services/getRequest';
import { LoaderSpinner } from '../../components/Exceptions/Exceptions';
import gameService from '../../services/gameService';
import Question from '../../components/Question/Question';

const GamePage = props => {
    const [ questions , setQuestions] = useState();
    const [ currIndex , setCurrIndex ] = useState(0);

    useEffect(() =>{
        const fetchData = async() => {
            const data = await getRequest(WHOS_API);
            gameService.shuffleArray(data); //shuffle the order of the questions
            if(data.length>0) setQuestions(data)
        }
        fetchData();
    },[])

    const onSendAnswer = ()=>{
        if(currIndex<questions.length-1)
        setCurrIndex(currIndex=> currIndex+1)
        else alert('game is end')
    }
    
    return (
            <div className="homeContainer">
                <Card className="cardContainer">
                    {!questions && <LoaderSpinner/>}
                    {questions &&  <Question data={questions[currIndex]} onSendAnswer={onSendAnswer}/>}
                </Card>
            </div>
        
        )
}
export default GamePage;