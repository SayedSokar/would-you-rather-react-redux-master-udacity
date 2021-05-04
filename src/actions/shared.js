import { saveQuestionApi, saveQuestionAnswerApi } from '../utils/api'
import {  SAVE_USER_ANSWER, SAVE_USER_QUESTION } from '../slices/usersSlice'
import {  SAVE_QUESTION, SAVE_QUESTION_ANSWER } from '../slices/questionsSlice'
//------------------------------ end of import --------------------------------//

//-------------------------Functions-------------------------------------------//

export function handleSaveQuestion (author, optionOneText, optionTwoText) {
    const question = {
      author: author,
      optionOneText: optionOneText,
      optionTwoText: optionTwoText
    }
    return (dispatch) => {
      return saveQuestionApi(question).then((q) => {
       
        dispatch(SAVE_QUESTION(q))
        let id = q.id
        let authedUser = q.author 
        dispatch(SAVE_USER_QUESTION({authedUser, id}))
      })
    }
  }
  
export function handleAnswer(authedUser, qid, answer) {
    return (dispatch) => {
      dispatch(SAVE_QUESTION_ANSWER({authedUser, qid, answer}))
      dispatch(SAVE_USER_ANSWER({authedUser, qid, answer}))
      return saveQuestionAnswerApi({
        authedUser: authedUser,
        qid: qid,
        answer: answer
      })
    }
}
  //-----------------------------------------------------------------------------//