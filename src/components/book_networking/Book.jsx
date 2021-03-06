import React,{Component} from 'react'

//导入样式 
import "./Book.css"


export default class Book extends Component {
    //创建模型
    constructor (){
        super()

        this.state = {
            bookName:'',
            editId:null,//记录要修改的id
            Books:[]
        };
    }
    //绑定方法
    handle = (event) =>{
        //console.log(event)
        //设置值
        this.setState({
            bookName:event.target.value
            
        }) 
    }

    //先取到所有的id 并放到数组中
    _getNewId = () =>{
        const ids = this.state.Books.map(item=>item.id)

        // 拿到数组中的最大id
        const maxId = Math.max.apply(null, ids);
        //返回  最大id加1
        return maxId + 1;

    };

    //新增或者修改的方法
    addOrEdiit =()=>{
        //判断如果输入框内容长度等于0 就 返回
        if(this.state.bookName.trim().length === 0) return

        //判断是新增还是修改
        if(this.state.editId){//如果有值  
            //修改
            fetch('',{
                
            })
             //成功后 清空id 和输入框的name
             this.state.editId = null
             this.setState({
                 bookName:''
             })

        }else{//新增
            
            fetch('http://localhost:8080/book',{
                method:"POST", //请求方法
                headers:{//设置请求头  键值对 json格式
                    "Content-Type":"application/x-www-form-urlencoded",
                },
                body:"name="+this.state.bookName //键值对
            }).then(response=>response.json()).then(data=>{
                console.log(data)
                //重新加载数据
                this.loadBooksData()
            })
        }
        
    }

    //参数id是要删除的
    deleteBook = (event,id)=>{
        //阻止默认跳转
        event.preventDefault()

        //用过滤的方法filter  把不要删除的id放到新数组中并展示出来
        const newArray = this.state.Books.filter(item => item.id != id)
        //把新数组放到模型 展示出来
        this.setState({
            Books:newArray
        })
    }

    //编辑图书
    editBook = (event,id)=>{
        //阻止默认事件跳转
        event.preventDefault()

        //find找到要修改的图书
        const editBook = this.state.Books.find(item=>item.id === id)
        //记录要修改的id
        this.state.editId = editBook.id
        //把要修改的那么先显示到输入框 bookName
        this.setState({
            bookName:editBook.name
        });
    };

    //组件初始化时调用数据 渲染到页面
    componentWillMount(){
        this.loadBooksData()
    }

    //获取数据 
    loadBooksData = () =>{
        fetch('http://localhost:8080/book',{
            method:'GET'
        }).then(response=>{
            return response.json()
        }).then(data=>{
            this.setState({
                Books:data
            })
        })
    }


    render(){
        //解构赋值
        const {Books,bookName} = this.state
        return <div>
            {/* 受控组件绑定value值 值来自模型受到模型的控制*/}
            书名: <input type="text" onChange={this.handle} value={bookName}/>&nbsp;&nbsp;&nbsp;
            <button onClick={this.addOrEdiit}>新增/修改</button>
            <br/>
            <table>
                <thead>
                    <tr>
                        <th>编号</th>
                        <th>书名</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    {/* 模板渲染 用map */}
                    {Books.map(item=>{
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>
                                    <a href="" onClick={() => {this.deleteBook(event,item.id);}}>删除</a>
                                    |
                                    <a href="" onClick={() => {this.editBook(event,item.id);}}>编辑</a>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    }
}