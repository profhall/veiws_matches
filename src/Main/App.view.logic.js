import React from 'react'
import App from './App.view.js'

export default class AppLogic extends React.Component {

  cardClicked = card =>{
    console.log("card clicked")
    console.log(card.target.id)
  }

  render() {
    return <App cardClicked={this.cardClicked} {...this.props} />
  }
}