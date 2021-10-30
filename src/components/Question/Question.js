import { FormControl, FormControlLabel, Radio, RadioGroup } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import gameService from '../../services/gameService';
import LDButton from '../customs/LDButton';
import ResponsiveTypography from '../customs/ResponsiveTypography';
import { LoaderSpinner } from '../Exceptions/Exceptions';
import GameTools from '../GameTools/GameTools';
import Hint from '../Hint/Hint'

const Question = props => {
    const { onSendAnswer } = props

    const [data,setData] = useState()
    const [value ,setValue] = useState()
    const [correctAnswer,setCorrectAnswer] = useState()
    const [hint , setHint] = useState(false)

    useEffect(()=>{
        setCorrectAnswer(props.data.correctAnswer)
        gameService.shuffleArray(props.data.answers) //shuffle the order of the answers
        setData(props.data)
        setValue(props.data.answers[0])
        
    },[props.data ,correctAnswer])

    const onChangeAnswer = event => {
        setValue(event.target.value)
    }
    const onSendClicked = () => {
        const isCorrectAnswer = value === correctAnswer
        if(isCorrectAnswer) 
            alert('correct answer!')
        else 
            alert('wrong answer')
        onSendAnswer(data.points, isCorrectAnswer)
        setHint(false)
    }
    const onUseTool = tool => {
        if (tool==='neg1') {
            const randomItem = gameService.removeRandomItem(data.answers,correctAnswer)
            const updatedArray = data.answers.filter(ques => ques!== randomItem)
            const newData = {...data}
            newData.answers = updatedArray;
            setData(newData)
        }
        if(tool==='lamp') {
            setHint(true)
        } 
    }

    if (!data) return <LoaderSpinner/>

    return (
        <div style={{ display: 'flex', flexDirection: 'column' , alignContent:'center' }}>
            {hint && <Hint>{data.hint}</Hint>}
            <ResponsiveTypography variant="h5"><bdi>{data.question}</bdi></ResponsiveTypography>
            <FormControl component="fieldset">
                <RadioGroup aria-label="question" name="question" value={value} onChange={onChangeAnswer} >
                    {data.answers.map((answer,key)=> {
                        return <FormControlLabel key={key} labelPlacement="start" value={answer} control={<Radio />} label={answer} />
                    })}
                </RadioGroup>
            </FormControl>
            <LDButton bgcolor1="#0079ED" color="white" onClick={onSendClicked}>
                שלח
            </LDButton>
            <GameTools onUseTool={onUseTool}/>
        </div>
    )
}
export default Question;