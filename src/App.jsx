import React from 'react'
import "./App.less"

//导入组件
import NoStateComponent from './components/NoStateComponent'
import StateComponent from './components/StateComponent'
import Counter from './components/Counter'
import Grandpa from './components/Grandpa'
import ConditionalAndFor from './components/ConditionalAndFor'
import MyCheckbox from './components/MyCheckbox'
//import Book from './components/book/Book'
//路由相关的组件
import Basic from './components/router/Basic'

//网络版图书销售
import Book from './components/book_networking/Book'


//购物车案例
import Index from './components/Cart/redux/views/Index'

//import Index from './components/Cart/react-redux/views/Index'


// 热更新
import { hot } from 'react-hot-loader/root'



const zhangsanStyle ={
    color:'green',
    fontSize:50
}

//类组件(有状态组件)
class App extends React.Component{
    getChildValue = data =>{
        console.log("---我是父组件---")
        console.log(data)

    }

    // render 是react的声明周期函数之一，用来渲染组件的内容
    render(){
        return <div>
            {/* <NoStateComponent name="张飞" sex ="男" age ={18} isMan = {true}/>
            <hr/>
            <StateComponent name="关羽" sex ="男" age ={18}/> */}
            {/* <Counter initCount={15} callback={this.getChildValue}></Counter> */}
            {/* <Grandpa/> */}
            {/* <ConditionalAndFor/>> */}
            {/* <MyCheckbox/> */}
            {/* <Book/> */}
            {/* <Basic/> */}
            <Index />
        </div>
    }
    render1(){
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

export default hot(App)