import React,{Component} from "react";
import PropTypes from "prop-types";

//多级传值
class Grandson extends Component{
    
    render(){
        return <div>
        我是第三级----{this.context.myVaule}
        </div>
            
        
    }
}
    //静态属性
    Grandson.contextTypes={
        //类型
        myValue:PropTypes.string
    }

    class Parent extends Component{
        static contextTypes ={
            myValue:PropTypes.string
        }
        render(){
            return <div>
            我是第二级----{this.context.myValue}<br/>
            <Grandson/>
        </div>
        }
    }

    class Grandpa extends Component{
        //static静态属性 约定给孙组件传值的时候  属性角什么  以及他的类型是什么
        static childContextTypes = {
            //类型约定好
            myValue:PropTypes.string
        }
        getChildContext(){
            return {myValue: this.state.myValue};
        }

        constructor(){
            super()
            this.state = {
                vaule:'我是第一级的值'
            }
        }

        chengeValue = () =>{
            this.setState({
                vaule:'22221111'
            })
        }

        render(){
            return <div>
                我是第一级组件<br/>
                <button onClick={this.chengeValue}>我要更改值</button>
                <Parent/>
            </div>
        }

    }

//静态属性


export default Grandpa;