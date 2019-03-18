import React, { Component } from "react";

//导入样式
import "./Index.css";

//导入哈希路由
import { HashRouter, Link, Route, Switch } from "react-router-dom";

import "element-theme-default";

//导入仓库
import store from "../store/index";

//导入组件
import GoodsList from "./GoodsList";
import Cart from "./Cart";
import NotFound from "./NotFound";

export default class Index extends Component {
  constructor() {
    super();
    //定义模型
    this.state = {
      totalCount: 0
    };
  }

  //组件初始化时只调用，以后组件更新不调用，整个生命周期只调用一次，此时可以修改state
  componentWillMount() {
      //去仓库中取数据
     //初始化时也获取购物车数量
     this.setState({
      totalCount:this.calcTotalCount()
    })
    //监听仓库数据变化store.subscribe
    store.subscribe(()=>{
      //console.log('---仓库发生了变化------')
      //仓库发生变化 购物车数量也变化
      this.setState({
        totalCount:this.calcTotalCount()
      })
    })
  }

  //把仓库数组取出来 获得购物车数量totalCount
  calcTotalCount= ()=>{
    //去仓库中取到最新的数据   store.getState()从仓库中获取数据
    const goodsList = store.getState()

    let totalCount =0
    //forEach遍历数组 把所有数量加起来
    goodsList.forEach(item=>{
      totalCount += item.num
    })

    //返回
    return totalCount
  }

  render() {
    return (
      <HashRouter>
        <div>
          <div>
            <h2 className="title">
              买买买-商城
              <p>
                <Link to="/">商品列表</Link>
                {/* 购物车数量大于0才显示 */}
                <Link to="/Cart">
                  购物车
                  {this.state.totalCount > 0 && (
                    <span>（{this.state.totalCount}）</span>
                  )}
                  <span />
                </Link>
              </p>
            </h2>
          </div>
          <div className="index-container">
            {/* 设置路由规则 */}
            <Switch>
              <Route exact path="/" component={GoodsList} />
              <Route path="/Cart" component={Cart} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </HashRouter>
    );
  }
}
