
//导出加入购物车的方法
export const addToCart = goods =>{
    return {
        type:'ADD_CART',//类型 添加购物车
        goods,  //商品数据
    }
}

//导出修改购物车商品数量的方法
export const updateToCart = goods =>{
    return {
        type:'UPDATE_CART',//类型 修改数量
        goods,  //商品数据
    }
}

//导出删除商品的方法
export const deleteToCart = id =>{
    return {
        type:'DELETE_CART',//类型 修改数量
        id,  //传id  根据id删除
    }
}