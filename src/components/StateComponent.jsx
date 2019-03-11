import React,{Component} from "react"

export default class StateComponent extends Component{
    constructor (){
        super()
        this.state = {
            name :"张三",
            age:18,
            address:'深圳南山'
        }
    }
    render(){
        const {age,address} = this.state
        return (
            <div>
                我是有状态组件<br/>
                姓名---{this.state.name}<br/>
                年龄---{age}<br/>
                地址---{address}
            </div>
        )
    }
}