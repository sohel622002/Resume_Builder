import { configureStore } from '@reduxjs/toolkit'

import resumeReducer from '../Redux/Resumeslice'

export default configureStore({
    reducer:{
        resume : resumeReducer
    }
})