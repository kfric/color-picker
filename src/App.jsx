import React, { Component } from 'react'

export class App extends Component {
  render() {
    return (
      <div>
        <h1>---</h1>
        <p>Hue: </p>
        <input type="range" />
        <p>Saturation: </p>
        <input type="range" />
        <p>Lightness: </p>
        <input type="range" />
      </div>
    )
  }
}
