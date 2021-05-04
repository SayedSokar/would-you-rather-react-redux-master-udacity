import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import reducer from './reducer'
import logger from '../middleware/logger'
//------------------------------ end of import --------------------------------//

//-------------------------Functions-------------------------------------------//

 const store = configureStore({
    
     reducer: reducer,
     middleware: [
         ...getDefaultMiddleware(),
         logger
     ]
      

})
//-----------------------------------------------------------------------------//

export default store