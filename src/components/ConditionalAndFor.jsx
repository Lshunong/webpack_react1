//条件渲染  列表渲染
import React,{Component} from 'react'

export default class ComditionalAndFor extends Component{
    
    constructor(){
        super();
        //模型
        this.state={
            isLogin:true,
            name:'李白',
        };
    }
    render(){
        //if判断
        // if(this.state.isLogin){
        //     return <div>
        //         恭喜登录...
        //     </div>
        // }else{
        //     return <div>
        //         请去登录...
        //     </div>
        // }

        //三目运算符
        //解构赋值
        const { isLogin } = this.state;
        return (
        <div>{isLogin ? <div>恭喜您登录了...</div> : <div>请去登录...</div>}</div>
        );

    }
}