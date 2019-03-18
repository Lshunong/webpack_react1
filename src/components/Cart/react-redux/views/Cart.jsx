import React, { Component } from 'react'

//导入仓库store
import store from '../store/'

//按需导入
import {Table,Button,InputNumber} from 'element-react'

export default class Cart extends Component {
    constructor(){
        super()
        //定义模型
        this.state = {
            columns: [
                {
                    label: "名字",
                    prop: "name",
                },
                {
                    label: "图片",
                    render:(row)=>{
                        return <div style={{width:100,height:100}}>
                            <img style={{width:'100%',height:'100%'}} src={row.url} alt=""/>
                        </div>
                    }
                },
                {
                    label: "数量",
                    render:row => {
                        return <InputNumber size="small" defaultValue={row.num} onChange={this.onChange.bind(this)} min="1"></InputNumber>
                    }
                },
                {
                    label: "单价",
                    prop: "price"
                },
                {
                    label: "总价",
                    render:row => {
                        return <span>{row.num * row.price}</span>
                    }
                },
                {
                    label:'操作',
                    render:row=>{
                        return <div>
                            <Button type="danger">删除</Button>
                        </div>
                    }
                }
            ],
            goodsList:[]
        }
    }

    //增加数量点击事件
    onChange = (value) => {
        console.log(value)
    }

    //初始化时调用 第一次进来的时候
    componentWillMount(){
        //store.getState()获取仓库中的数据
        this.setState({
            goodsList:store.getState()
        })

        // 监听仓库中数据的变化，只要数据发生了改变，就会自动触发回调函数
        store.subscribe(()=>{
            this.setState({
                goodsList:store.getState()
            })
        })
        
    }

    render() {
        return <div>
            <Table style={{width: '100%'}}
             columns={this.state.columns}
             data={this.state.goodsList} />
        </div>
    }
}