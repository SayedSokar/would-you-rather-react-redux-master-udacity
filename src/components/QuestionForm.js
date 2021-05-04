import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Col, Form } from 'react-bootstrap'
import { handleSaveQuestion } from '../actions/shared'
import NavigationBar from './navigationBar'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
//------------------------------ end of import --------------------------------//

//-------------------------Functions-------------------------------------------//
function QuestionForm(props) {
    
    //--------------------------------------------------------------
    const authedUser = useSelector(state => state.entities.authuser.name)
    const dispatch = useDispatch()
    const [option1, setOption1] = useState(null)
    const [option2, setOption2] = useState(null)
    //------------------------------------------------------------
    const handleChange1 = (e) => setOption1(e.target.value)
    const handleChange2 = (e) => setOption2(e.target.value)
    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(handleSaveQuestion(authedUser, option1, option2))
        props.history.push('/')
        }
    
        return (
            <div>
                <NavigationBar />
                <Container>
                <Col xs={6}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Would you Rather...</Card.Title>
                            <Form>
                                <Form.Group controlId="users">
                                <Form.Control onChange={handleChange1} type="text" placeholder="Option 1" />
                                <span>Or</span>
                                <Form.Control onChange={handleChange2} type="text" placeholder="Option 2" />
                                </Form.Group>
                                <Button variant="primary" onClick={onSubmit} block>Add</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Container>
            </div>
        )
    
}

//-----------------------------------------------------------------------------//

export default QuestionForm