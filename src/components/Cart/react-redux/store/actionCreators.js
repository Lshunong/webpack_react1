
//导出加入购物车的方法
export const addToCart = goods =>{
    return {
        type:'ADD_CART',//类型 添加购物车
        goods,  //数据
    }
}