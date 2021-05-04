import { createSlice } from '@reduxjs/toolkit'
//------------------------------ end of import --------------------------------//

//-------------------------Functions-------------------------------------------//
export const questionsSlice = createSlice({
    name: 'questions',
    initialState: {},
    reducers: {
        RECEIVE_QUESTIONS: (questions, action) => {
            return {
                ...questions.list,
                ...action.payload
            }
        },
        SAVE_QUESTION: (questions, action) => {
            return {
                ...questions,
                [action.payload.id]: action.payload
            }
        },
        SAVE_QUESTION_ANSWER: (questions, action) => {
            const votes = questions[action.payload.qid][action.payload.answer].votes
            return {
                ...questions,
                [action.payload.qid]: {
                    ...questions[action.payload.qid],
                    [action.payload.answer]: {
                        ...questions[action.payload.qid][action.payload.answer],
                        votes: votes.concat([action.payload.authedUser])
                    }
                }
            }
            
        },
    }
})


//-----------------------------------------------------------------------------//


export const { RECEIVE_QUESTIONS, SAVE_QUESTION, SAVE_QUESTION_ANSWER} = questionsSlice.actions

export default questionsSlice.reducer