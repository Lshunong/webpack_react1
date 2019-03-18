//导入函数
import {createStore} from 'redux'

//导入做事的小弟 reducer
import reducer from './reducer'

//创建仓库
const store = createStore(
    //传一个做事的小弟Reducers函数
    reducer,
    //让window下 插件可以看到仓库
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store

