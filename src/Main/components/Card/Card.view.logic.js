import Card from './Card.view.js'
import React from 'react'

export default class CardLogic extends React.Component {
  render() {
    const { props } = this
    return <Card {...props} />
  }
}