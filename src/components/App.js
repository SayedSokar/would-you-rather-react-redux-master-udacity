import React, { useEffect } from 'react'
import {  useDispatch } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './login'
import Home from './home'
import QuestionForm from './QuestionForm'
import Leaderboard from './leaderBoard'
import QuestionView from './QuestionView'
import  PrivateRoute from '../authentication/PrivateRoute'
import NotFound from './404Page'
import { getInitialData  } from '../utils/api'
import { RECIEVE_USERS } from '../slices/usersSlice'
import { RECEIVE_QUESTIONS } from '../slices/questionsSlice'
//------------------------------ end of import --------------------------------//

//-------------------------Functions-------------------------------------------//



function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    
    return getInitialData().then(({ users, questions }) => {
                dispatch(RECEIVE_QUESTIONS(questions))
                dispatch(RECIEVE_USERS(users))
                
            })
  }, [])
  
  
  
    return (
      <div className="App"> 
        <Router>
              <PrivateRoute path="/" exact component={ Home }/> 
              <PrivateRoute path="/add" component={ QuestionForm }/>
              <PrivateRoute path="/leaderboard" component={ Leaderboard }/>
              <Route path="/login" exact component={ Login }/>
              <PrivateRoute path="/404-page" component={NotFound}/>
              <PrivateRoute path="/questions/:id" component={ QuestionView }/>
        </Router>
      </div>
    )
  
}

//-----------------------------------------------------------------------------//


export default App
