import React, { useState } from 'react';
import {v4 as uuidv4 } from 'uuid';
import { Card, CircularProgress, Container, Input } from '@material-ui/core'
import './AddQuestion.css'
import { Add, QuestionAnswer } from '@material-ui/icons';
import LDButton from '../../components/customs/LDButton';
import { useDispatch } from 'react-redux';
import { addNewQuestion } from '../../redux/questions/actions';
import { LoaderSpinner } from '../../components/Exceptions/Exceptions';

const AddQuestion = () => {
    const [question, setQuestion] = useState({ answers: [] });
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const onAddNewOption = () => {
        if (question.answers?.length > 3 ) return;
        setQuestion({...question, answers: [...question.answers, ""]});
    }
    const onEnterQuestionOption = (e, ind) => {
        const cloneQuestion = {...question};
        cloneQuestion.answers[ind] = e.target.value;
        setQuestion(cloneQuestion);
    }
    
    const onEnterCorrectAnswer = (num) => setQuestion({...question, correctAnswer: num > 0 ? num - 1 : 0});
    const onEnterHint = (hint) => setQuestion({...question, hint});
    const onAddNewQuestion = async() =>{
        setLoading(true);
        await dispatch(addNewQuestion(question));
        setLoading(false);
        setQuestion({answers: []})
    }
    return (
        <Container maxWidth="md">
            <Card className="cardContainer">
                <div className="col g10">
                    <Input placeholder="Enter question" onChange={(e) => setQuestion({...question, question: e.target.value})} style={{width: '100%'}} />
                    <LDButton color="#0079ED" variant="outlined" startIcon={<Add />} onClick={onAddNewOption}>
                        Add New Option
                    </LDButton>
                    <div className="col g5">
                        {question.answers.map((option, ind) => (
                        <div className="row g10" key={ind}>
                            <span className="clause">{`${ind + 1}`}</span>
                            <Input placeholder="Enter question option" value={option} onChange={(e) => onEnterQuestionOption(e, ind)} />
                        </div>
                        ))}
                    </div>
                    <Input type="number" placeholder="enter the correct answer" onChange={(e) => onEnterCorrectAnswer(e.target.value)}/>
                    <Input type="string" placeholder="enter hint to the answer" onChange={(e) => onEnterHint(e.target.value)}/>
                    <Input type="number" placeholder="enter amount of points" onChange={(e) => setQuestion({...question, points: e.target.value})} />
                    <LDButton bgcolor1="#0079ED" bgcolor2="black" variant="outlined" startIcon={
                        loading ? <CircularProgress variant="primary" /> : <QuestionAnswer className='regularIcon' /> } onClick={onAddNewQuestion} >
                     Add Question
                    </LDButton>
                </div> 
            </Card>
        </Container>
    )
}
export default AddQuestion;