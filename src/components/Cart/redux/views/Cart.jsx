import React, { Component } from 'react'

//导入仓库store
import store from '../store/'

//按需导入
import {Table,Button,InputNumber} from 'element-react'

//导入修改购物车操作
import {updateToCart} from '../store/actionCreators'
//导入删除操作
import {deleteToCart} from '../store/actionCreators'

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
                    label: "数量",  //defaultValue默认值出次渲染的时候给它设置值  后面更改值之后就会被value覆盖
                    render:row => {
                        return <InputNumber size="small" defaultValue={row.num} 
                        value={row.num} onChange={this.onChange.bind(this,row)} 
                        min="1"></InputNumber>
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
                            <Button onClick={this.onDelete.bind(this,row.id)} type="danger">删除</Button>
                        </div>
                    }
                }
            ],
            goodsList:[], //表格数据
            totalPrice:this.calcToralPrice(), //总价 调用计算总价方法

        }
    }

    //增加数量点击事件
    onChange = (goods,value ) => {
        
        //步骤 点击修改事件 --触发生成action--传到仓库
        //先进行深拷贝商品数据 因为仓库需要全新的数据,而不是之前的数据
        const newGoods = JSON.parse(JSON.stringify(goods))
        //拿到最新的数量
        newGoods.num = value
        //生成修改的action 
        const action =updateToCart(newGoods)
        //触发action 通过dispatch方法传到仓库
        store.dispatch(action)
    }

    //点击删除商品事件
    onDelete = id=>{
        //先生成删除的action
        const action = deleteToCart(id)
        //触发action 传给仓库  再到reducer操作
        store.dispatch(action)
    }

    //初始化时调用 第一次进来的时候
    componentWillMount(){
        //store.getState()获取仓库中的数据
        this.setState({
            //拿到仓库的数据给列表
            goodsList:store.getState()
        })

        // 监听仓库中数据的变化，只要数据发生了改变，就会自动触发回调函数
        store.subscribe(()=>{
            this.setState({
                goodsList:store.getState(),
                //数据变化总价也要变化
                totalPrice:this.calcToralPrice()
            })
        })
        
    }

    //计算总价方法
    calcToralPrice =() =>{
        //定义
        let totalPrice =0
        //拿到数组
        store.getState().forEach(item=>{
            //总价等于 单价*数量
            totalPrice += item.price * item.num
        })

        //返回总价  给外面调用
        return totalPrice

    }

    //购物车组件销毁前触发
    componentWillUnmount(){
        // if (store && store.unsubscribe){
        //     store.unsubscribe(this.watchStore)
        // }
        //在组件卸载前清除timer
        clearTimeout(this.pwdErrorTimer);
        clearTimeout(this.userNameErrorTimer);

    }


    render() {
        //渲染到页面
        return <div>
            <Table style={{width: '100%'}}
             columns={this.state.columns}
             data={this.state.goodsList} />
             {/* 总价 */}
             <div style={{marginLeft:5}}>
                <p>总价:{this.state.totalPrice}</p>
                <Button type="success">总价</Button>
             </div>
        </div>
    }
}