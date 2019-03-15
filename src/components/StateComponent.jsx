import React,{Component} from "react"

export default class StateComponent extends Component{
    constructor (props){
        super(props)
        this.state = {
            name :props.name,
            age:18,
            address:'深圳南山'
        }
    }
    //箭头函数
    clickMe2= (e,name) =>{
        // console.log(name)
        // console.log(this)
        // console.log(e)
        this.setState({
            name:'齐天大圣'
        })
        console.log(this.state)
    }
    render(){
        console.log("------render------")
        const {age,address} = this.state
        const {name,age:age2} = this.props
        return (
            <div>
                {/* 我是有状态组件<br/>
                姓名---{this.state.name}<br/>
                年龄---{age}<br/>
                地址---{address}
                <br/> */}
                姓名---{name}<br/>
                年龄---{age2}<br/>
                <button onClick={()=>{this.clickMe2(event,'诸葛亮')}}>更改值</button>
                {/* <button onClick={(e)=>{this.clickMe2(e,'刘备')}}>更改值 </button> */}
            </div>
        )
    }
}