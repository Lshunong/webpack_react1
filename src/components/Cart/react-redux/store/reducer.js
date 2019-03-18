/* 
    preState 代表之前保存的数据
    action 现在要进行的操作传递的值
    新增商品
    修改商品
    删除商品
*/
//导出
export default (preState = [],action) =>{
    //检查在GoodsList触发的action有没有传到这里
    console.log("---reducer---",action)
    switch (action.type) {
        case "ADD_CART":
            //为了不影响之前的 把preState 进行深拷贝一次 放到新数组
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
           
        default:
            return preState
    }
}