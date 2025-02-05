import{configureStore} from '@reduxjs/toolkit'
import userReducer from './userSlice'
import feedReducer from './feedSlice'
import connectionReducer from './connectionsSlice'
import receivedReducer from './receivedSlice'

const appStore=configureStore({
      reducer:{
            user:userReducer,
            feed:feedReducer,
            connections:connectionReducer,
            received:receivedReducer
      }
})
export default appStore 