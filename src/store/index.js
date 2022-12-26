import { configureStore } from "@reduxjs/toolkit";
import Homereducer from './modules/Home'
import Entirereducer from './modules/entire'

const store = configureStore({
    reducer: {
      home: Homereducer,
      entire: Entirereducer
    }
  })
  

export default store