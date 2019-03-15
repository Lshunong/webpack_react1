import React from 'react'


//无状态组件 函数式组件
function NoStateComponent({name,age,sex,isMan}) {
    //console.log(props)
    return <div>
        我是无状态组件---{name}---{age}---{sex}---{isMan}
    </div>
}

export default NoStateComponent
