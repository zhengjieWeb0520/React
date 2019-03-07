import React from 'react'
// 引入组件
import MainRoute from './../routers/header.route'
import Header from './header/header'

export default class Main extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <MainRoute />
      </div>
    )
  }
}