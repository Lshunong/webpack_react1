import React from 'react'
import "./App.less"

//导入组件
import NoStateComponent from './components/NoStateComponent'
import StateComponent from './components/StateComponent'

const zhangsanStyle ={
    color:'green',
    fontSize:50
}

//类组件(有状态组件)
class App extends React.Component{
    // render 是react的声明周期函数之一，用来渲染组件的内容
    render(){
        return <div>
            <NoStateComponent/>
            <hr/>
            <StateComponent/>
        </div>
    }
    render(){
        return <div id="app">
            Hello React
            <div className="imgDiv"></div>
            <div>
                <span><i className="iconfont icon-login_user"></i></span>
            </div>
            <div>
                {/* 注释 */}
                {/* 行内样式写法 */}
                <p style={{color:'red',fontSize:36+'px'}}>我不是好人</p>
                {/* 页内样式写法 */}
                <p style={zhangsanStyle}>张三不是好人</p>
            </div>
        </div>
    }
}

export default App