import { createSlice } from '@reduxjs/toolkit'
//------------------------------ end of import --------------------------------//

//-------------------------Functions-------------------------------------------//
export const usersSlice = createSlice({
    name: 'users',
    initialState: { },
    reducers: {
        RECIEVE_USERS: (users, action) => {
            return {
                ...users,
                ...action.payload
            }
        },
        SAVE_USER_ANSWER: (users, action) => {
            
       
            return {
              ...users,
              [action.payload.authedUser] : {
                ...users[action.payload.authedUser],
                answers : {
                  ...users[action.payload.authedUser].answers,
                  [action.payload.qid] : action.payload.answer
                }
              }
            }
        },

        SAVE_USER_QUESTION: (users, action) => {
            // const votes = users[action.payload.qid][action.payload.answer].votes
            return {
              ...users,
              [action.payload.authedUser] : {
                ...users[action.payload.authedUser],
                questions: [...users[action.payload.authedUser].questions, action.payload.id]
              }
            }
        },
    }
})
//-----------------------------------------------------------------------------//

export const { RECIEVE_USERS, SAVE_USER_ANSWER, SAVE_USER_QUESTION } = usersSlice.actions

export default usersSlice.reducer

