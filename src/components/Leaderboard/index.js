import React, { Component } from 'react';
import './Leaderboard.css';

// Why didn't you use Redux or XYZ Flux Pattern?!?!?!
// Simplicity. If I were building an application with a bunch of pages
// and navigation elements, sure I'd probably use a flux pattern because it makes
// a lot of sense. Shared application state, especially as you grow and add things
// like API calls.

class Leaderboard extends Component {
  constructor(props) {
    super(props);

    this.input = React.createRef();

    this.state = {
      players: [
        {
          firstName: "Adam",
          lastName: "Bourg",
          score: 75,
          id: 1
        },
        {
          firstName: "Adam",
          lastName: "Bourg",
          score: 75,
          id: 2
        }
      ]
    };

    this.removePlayer = this.removePlayer.bind(this);
    this.addPlayer = this.addPlayer.bind(this);
  }

  sortPlayers(players) {
    // to do sort the players
    this.setState({
      players
    })
  }

  removePlayer(id, event) {
    this.sortPlayers(this.state.players.filter(player => player.id !== id ));
  }

  addPlayer(event) {
    event.preventDefault();
    const firstName = "";
    const lastName = "";
    const score = "";
    this.sortPlayers(
      [...this.state.players, {firstName, lastName, score, id: (this.state.players.length+1)}]
    )
  }

  playerList() {
    return this.state.players.map((player) => {
          return (<tr key={player.id}>
            <td> {player.lastName}, {player.firstName} </td>
            <td> {player.score} </td>
            <td>
              <button type="button" onClick={(e) => this.removePlayer(player.id, e)}> Delete </button>
            </td>
          </tr>)
      });
  }


  render() {
    return (
      <div className="Leaderboard">
        <table id="Leaderboard-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Rank</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.playerList()}
          </tbody>
        </table>

        <div id="add-player-area">
          <form onSubmit={this.addPlayer}>
            <input type="text" name="firstName" placeholder="First Name!" ref={this.input} />
            <input type="text" name="lastName" placeholder="Last Name!" ref={this.input} />
            <input type="text" name="score" placeholder="Score!" ref={this.input} />
            <button type="submit"> Add Player!</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Leaderboard;
