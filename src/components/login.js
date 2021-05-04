import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Col, Form } from 'react-bootstrap'
import { SET_AUTHED_USER } from '../slices/authuserSlice'
import { fakeAuth } from '../authentication/auth'
import { Redirect } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
//------------------------------ end of import --------------------------------//

//-------------------------Functions-------------------------------------------//

function Login() {
    const users = useSelector(state => state.entities.users)
    const [userId, setuserId] = useState(null)
    const [redirectToReferrer, setredirectToReferrer] = useState(false)
    const dispatch = useDispatch()
    
    const handleChange = (e) => {
        setuserId(e.target.value)
    }
    const login = (e) => {
        e.preventDefault()
        fakeAuth.authenticate(() => {
            setredirectToReferrer(true)
        })
        dispatch(SET_AUTHED_USER(userId))
    }
    
        
    const { from } = () => this.props.location.state || { from : { pathname: '/' } }
    

        if (redirectToReferrer === true) {
            return (
                <Redirect to={from} />
            )
        }
        return (
            <Container>
                <Col xs={6}>
                    <Card>
                        <Card.Header as="h5">Would You Rather App</Card.Header>
                        <Card.Body>
                            <Card.Title>Sign In to begin the game</Card.Title>
                            <Form>
                                <Form.Group controlId="users">
                                    <Form.Control as="select" onChange={handleChange}>
                                    <option hidden value="default">Sign in</option>
                                        {Object.keys(users).map((id) => (
                                            <option key={id} value={id}>
                                                {id}
                                            </option>
                                        ))}
                                    </Form.Control>
                                </Form.Group>
                                <Button variant="primary" onClick={login}>Sign in</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Container>
        )
    
}

//-----------------------------------------------------------------------------//




export default Login