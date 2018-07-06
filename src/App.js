import React, { Component } from "react";
import { connect } from "react-redux";

class App extends Component {
  addTrack = event => {
    event.preventDefault();
    if(!this.trackInput.value)
    return

    this.props.onAddTrack(this.trackInput.value);
    this.trackInput.value = "";
  };

  findTrack = event => {
    event.preventDefault();
    if(!this.searchInput.value)
    return

    this.props.onFindTrack(this.searchInput.value)
    console.log(this.searchInput.value, 'find track')
    this.searchInput.value =""; 
  };

  render() {
    console.log(this.props.tracks);
    return (
      <div className="App">
        <form>
          <input type="text" ref={input => (this.trackInput = input)} />
          <button onClick={this.addTrack}>Add new track</button>
        </form>

        <div>
          <form>
            <input type="text" ref={input => (this.searchInput = input)} />
            <button onClick={this.findTrack}>Find Track</button>
          </form>
        </div>
        <ul>
          {this.props.tracks.map(track => {
            return <li key={track.id}>{track.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({
    tracks: state.tracks.filter(track => track.name.includes(state.filterTracks))
  }),
  dispatch => ({
    onAddTrack: name => {
      const payload = {
        id: Date.now().toString(),
        name
      };
      dispatch({ type: "ADD_TRACK", payload });
    },
    onFindTrack: (name) => {
      dispatch({ type: 'FIND_TRACK', payload: name})
    }
  })
)(App);
