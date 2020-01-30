import { createStore, applyMiddleware } from 'redux'

import reducer from './reducers'

// 异步操作处理
import thunk from 'redux-thunk';

export default createStore(reducer, applyMiddleware(thunk))