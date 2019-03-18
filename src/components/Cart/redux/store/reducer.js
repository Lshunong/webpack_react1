/* 
    preState 代表之前保存的数据
    action 现在要进行的操作传递的值
    新增商品
    修改商品
    删除商品

    仓库:帮我们统一管理数据
    深拷贝数据之后是仓库变化了,通过监听仓库触发回调 重新渲染视图才变化 
    不是数据变了视图就变化
*/
//导出
//创建仓库的时候,从本地仓库取到操作的数据保存到state  没有就是空数组
const state =JSON.parse(localStorage.getItem('CART') || "[]") 

export default (preState = state,action) =>{
    //检查在GoodsList触发的action有没有传到这里
    console.log("---reducer---",action)
    switch (action.type) {
        //新增
        case "ADD_CART":
            //为了不影响之前的数据 把preState 进行深拷贝一次 放到新数组
            const newArray = JSON.parse(JSON.stringify(preState))
            //goods判断添加的商品之前有没有在购物车里
            const goods = newArray.find(item=>item.id === action.goods.id)
            if(goods){//如果有
                //商品数量加一
                goods.num += action.goods.num
            }else{//之前没有就新增一条商品记录
                newArray.push(action.goods)
            }
            //返回 新数组
            return newArray

        //修改
        case 'UPDATE_CART':
            //为了不影响之前的 把preState 进行深拷贝一次 放到新数组
            const updateArray = JSON.parse(JSON.stringify(preState))
            //判断添加的商品之前有没有在购物车里
            const updateGoods = updateArray.find(item=>item.id === action.goods.id)

            //把仓库中的数量修改成最新的
            updateGoods.num = action.goods.num
            //把修改之后的结果  返回给仓库 store
            return updateArray

        //删除
        case 'DELETE_CART':
            //为了不影响之前的 把preState 进行深拷贝一次 放到新数组
            const deleteArray = JSON.parse(JSON.stringify(preState))    
            //找到索引  判断之前数组中的id是否与action传过来的id一样
            const deleteIndex = deleteArray.findIndex(item=>item.id === action.id)

            //一样 删除 1代表一个
            deleteArray.splice(deleteIndex,1)

            return deleteArray
        default:
            return preState
    }
}