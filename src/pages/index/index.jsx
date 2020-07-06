import React, { Component } from 'react'
import { View, Button, Text } from '@tarojs/components'
import { connect } from 'react-redux'
import counterCreator from '@ACTIONS/counter'

import './index.scss'

const mapStateToProps = state => {
  return {
    num: state.counter.num,
  }
}

@connect(
  state => ({
    num: state.counter.num,
  }),
  counterCreator
)
class Index extends Component {
  componentWillReceiveProps (nextProps) {
    // console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Button className='add_btn' onClick={this.props.add}>+</Button>
        <Button className='dec_btn' onClick={this.props.minus}>-</Button>
        <View><Text>{this.props.num}</Text></View>
        <View><Text>Hello, World</Text></View>
      </View>
    )
  }
}

export default Index
