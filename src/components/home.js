import NavigationBar from './navigationBar'
import { Container, Col, Nav } from 'react-bootstrap'
import Poll from './Poll'
import '../App.css'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
//------------------------------ end of import --------------------------------//

//-------------------------Functions-------------------------------------------//

function Home() {
    const users = useSelector(state => state.entities.users)
    const questions = useSelector(state => state.entities.questions)
    const authedUser = useSelector(state => state.entities.authuser.name)
    
    const {answeredQuestions, unAnsweredQuestions } = arrange(users, questions, authedUser)
  
    const [questionSwitch, setquestionSwitch] = useState(false)
   
    const handleChangeAnswered = () => setquestionSwitch (true)
    const handleChangeUnAnswered = () => setquestionSwitch (false)
   
    
        return (
            <div>
                <NavigationBar />
                <Container>
                    <Col xs={6} md={6}>
                        <Nav justify variant="tabs" defaultActiveKey="link-1">
                            <Nav.Item>
                                <Nav.Link eventKey="link-1" onClick={handleChangeUnAnswered}>Unanswered</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-2" onClick={handleChangeAnswered}>Answered</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        {questionSwitch === false ? (
                            unAnsweredQuestions.map((q) => (
                                <Poll key={q.id} ques={q} />
                            ))
                        ) : answeredQuestions.map((q) => (
                            <Poll key={q.id} ques={q} />
                        ))}
                    </Col>
                </Container>
            </div>
        )
    
}


//-------------------------Extra Functions----------------------------------------------------//

function arrange(users, questions, authedUser) {
    let allQuestions = Object.values(questions)
    let loggedInUser = users[authedUser] 
    let loggedInAnswers = loggedInUser ? Object.keys(loggedInUser.answers) : []
    return {
        answeredQuestions : allQuestions.filter((question) => loggedInAnswers.includes(question.id)).sort((a, b) => b.timestamp - a.timestamp),
        unAnsweredQuestions: allQuestions.filter((question) => !loggedInAnswers.includes(question.id)).sort((a, b) => b.timestamp - a.timestamp)

    }
}
//-------------------------------------------------------------------------------------------
export default Home
