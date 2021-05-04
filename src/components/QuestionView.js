import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Card, Form, Button, Col, ProgressBar, Badge } from 'react-bootstrap'
import { handleAnswer } from '../actions/shared'
import NavigationBar from './navigationBar'
import '../App.css'
//------------------------------ end of import --------------------------------//

//-------------------------Functions-------------------------------------------//
function QuestionView(props) {

    //--------------------------------------------------------------
    const users = useSelector(state => state.entities.users)
    const questions = useSelector(state => state.entities.questions)
    const authedUser = useSelector(state => state.entities.authuser.name)
    const dispatch = useDispatch()
    const [selectedValue, setselectedValue] = useState(null)
    //------------------------------------------------------------

    if(questions[props.match.params.id] === undefined) {
        const error = true;
        return {
            error
        }
    }
    let q = questions[props.match.params.id]
    const  author  = q ? users[q.author] : ''
    //-----------------------------------------------------------
    
    //-----------------------------------------------------------------
    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(handleAnswer(authedUser, props.match.params.id, selectedValue))
    }
    //-----------------------------------------------------------------
        if(props.error) {
            return (
                <Container>
                    <Col>
                        <h1>404</h1>
                        <p>The page not found</p>
                    </Col>
                </Container>
            )
        }
    //-----------------------------------------------------------------
    
        let ques = q ? q : ''
        
        let answerMarkOp1 = q ? q.optionOne.votes.includes(authedUser) : null
        let answerMarkOp2 = q ? q.optionTwo.votes.includes(authedUser) : null
        return (
            <div>
                <NavigationBar />
                <Container>
                    {answerMarkOp1 === true || answerMarkOp2 === true ? (
                        <Col xs={6} md={6}>
                            <Card>
                                <Card.Img variant="top" src={author.avatarURL} />
                                <Card.Body>
                                    <Card.Title>Asked by {author.name}</Card.Title>
                                    <Card.Text>
                                        Results:
                                    </Card.Text>
                                    <div>
                                        <div className="cell">
                                            <div>
                                                {answerMarkOp1 ? (
                                                    <Badge pill variant="warning">
                                                        Your Vote
                                                    </Badge>
                                                ) : ' '}
                                            </div>
                                            Would you rather {ques ? ques.optionOne.text : ''}
                                            <ProgressBar now={ques ? (ques.optionOne.votes.length / (ques.optionOne.votes.length + ques.optionTwo.votes.length)) * 100 : ''}
                                                label={`${ques ? (ques.optionOne.votes.length / (ques.optionOne.votes.length + ques.optionTwo.votes.length)) * 100 : ''}%`} />
                                            <p>{ques ? `${ques.optionOne.votes.length} out of ${ques.optionTwo.votes.length + ques.optionOne.votes.length}` : ' '}</p>
                                        </div>

                                        <div className="cell">
                                            <div>
                                                {answerMarkOp2 ? (
                                                    <Badge pill variant="warning">
                                                        Your Vote
                                                    </Badge>
                                                ) : ' '}
                                            </div>
                                            Would you rather {ques ? ques.optionTwo.text : ''}
                                            <ProgressBar now={ques ? (ques.optionTwo.votes.length / (ques.optionOne.votes.length + ques.optionTwo.votes.length)) * 100 : ''}
                                                label={`${props.q ? (ques.optionTwo.votes.length / (ques.optionOne.votes.length + ques.optionTwo.votes.length)) * 100 : ''}%`} />
                                            <p>{ques ? `${ques.optionTwo.votes.length} out of ${ques.optionTwo.votes.length + ques.optionOne.votes.length}` : ' '}</p>
                                        </div>
                                    </div>

                                </Card.Body>
                            </Card>
                        </Col>
                    ) : (
                            <Col xs={6} md={6}>
                                <Card>
                                    <Card.Img variant="top" src={author.avatarURL} />
                                    <Card.Body>
                                        <Card.Title>{author.name} asks</Card.Title>
                                        <Card.Text>
                                            Would you rather
                                        </Card.Text>
                                        <Form.Group>
                                        <div className="mb-3">
                                            <Form.Check
                                                type="radio"
                                                name="select"
                                                label={ques ? ques.optionOne.text : ''}
                                                onChange={(e)=>setselectedValue(e.target.value)}
                                                value="optionOne"
                                            />

                                            <Form.Check
                                                type="radio"
                                                name="select"
                                                label={ques ? ques.optionTwo.text : ''}
                                                onChange={(e)=>setselectedValue(e.target.value)}
                                                value="optionTwo"
                                            />
                                        </div>
                                        </Form.Group>
                                        <Button variant="primary" block onClick={onSubmit}>Submit</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )}
                </Container>
            </div>
        )
    
}

//-----------------------------------------------------------------------------//
export default QuestionView