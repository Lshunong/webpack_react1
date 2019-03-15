import React,{Component} from "react";
import PropTypes from "prop-types";

//类型检测包 PropTypes
class Counter extends Component{
    constructor(props){
        super();

        this.state={
            //先把父组件的值传给子组件
            const:props.initCount
        };
    }

    //加了static的属性 就是静态属性.  访问的时候, 必须使用 类名.属性 来访问
    //共性的才能使用静态属性
    static propTypes={
        initCount:PropTypes.number,
        callback:PropTypes.func
    };

    //默认值  如果没传值默认是100
    static defaultProps={
        initCount:100
    };

    add =()=>{
        //异步执行
        this.setState(
            {
                const:this.state.const + 1
            },
            ()=>{
                //console.log(this.state.const)
                //调用  传参
                this.props.callback(this.state.const);
            }
        );
    };
    render(){
        return (
            <div>
                我是子组件..
                <br/>
                {this.state.const}&nbsp;&nbsp;<button onClick={this.add}>+</button>
            </div>
        );
    }

}

//静态属性


export default Counter;