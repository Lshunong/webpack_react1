import React,{Component} from 'react'

export default class MyCheckbox extends Component{
    constructor(){
        super();
        //模型
        this.state={
            name:'fruits',
            values:['apple','orange','banana','mangosteen'],
            svalues:['orange','banana'] //默认选中的值
        }
    }

    //onChange事件 选中的时候触发  更改选中的值
    handle = event =>{
        console.log(event.target.value)//event.target.value 点中哪个
        if(this.state.svalues.includes(event.target.value)){
            //filter过滤方法
            const newArray = this.state.svalues.filter(item=>item != event.target.value)
            this.setState({
                svalues:newArray
            })
        }else{
            const newArray =  [...this.state.svalues,event.target.value]
            this.setState({
                svalues:newArray
            })
        }
    }

    submit = ()=>{
        console.log(this.state.svalues)
    }

    render(){
        //解构赋值
        const {values,svalues,name} = this.state
        return <div>
            <form action="">
                我爱吃的水果:
                {values.map((item,index)=>{
                    //选中受到模型的控制
                    return <label key={index}>
                        {/* includes包含 */}
                        <input type="checkbox" value={item} onChange={this.handle}
                         checked={svalues.includes(item)} name={name}/>{item}
                    </label>
                })}
                <br/>
                <input type="button" value="提交" onClick={this.submit}/>
            </form>
        </div>
    }
}