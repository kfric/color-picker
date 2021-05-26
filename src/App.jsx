import React, { Component } from 'react'

export class App extends Component {
  state = {
    hue: Math.floor(Math.random() * 360),
    saturation: 100,
    lightness: 50,
  }
  handleRandomColor = event => {
    this.setState({
      hue: Math.floor(Math.random() * 360),
      saturation: Math.floor(Math.random() * 100),
      lightness: Math.floor(Math.random() * 100),
    })
  }

  render() {
    return (
      <>
        <h1>Background color changer</h1>
        <div
          className="changeColor"
          style={{
            backgroundColor: `hsl(${this.state.hue}, ${this.state.saturation}%, ${this.state.lightness}%)`,
          }}
        >
          hsl(${this.state.hue}, ${this.state.saturation}%, $
          {this.state.lightness}%)
        </div>
        <p>Hue: {this.state.hue}</p>
        <input
          max="360"
          type="range"
          value={this.state.hue}
          onChange={event => this.setState({ hue: event.target.value })}
        />
        <p>Saturation: {this.state.saturation}</p>
        <input
          max="100"
          type="range"
          value={this.state.saturation}
          onChange={event => this.setState({ saturation: event.target.value })}
        />
        <p>Lightness: {this.state.lightness}</p>
        <input
          max="100"
          type="range"
          value={this.state.lightness}
          onChange={event => this.setState({ lightness: event.target.value })}
        />
        <p>
          <button onClick={this.handleRandomColor}>RANDOM</button>
        </p>
      </>
    )
  }
}
