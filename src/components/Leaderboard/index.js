import React, { Component } from 'react';
import './Leaderboard.css';

// Why isn't AddPlayer inside the Components in its own folder?
// Well, it's a child of Leaderboard. Leader board is a higher order component
// therefore it belongs there not in the super parent level.
import AddPlayer from './children/AddPlayer';

// Why didn't you use Redux or XYZ Flux Pattern?!?!?!
// Simplicity. If I were building an application with a bunch of pages
// and navigation elements, sure I'd probably use a flux pattern because it makes
// a lot of sense. Shared application state, especially as you grow and add things
// like API calls. But this made more sense to build it like a HOC. The leaderboard
// is the source of truth for all player leader info and
// the add player component is specific to the player component form and controls all
// state related to that thus fulfilling the single responsibility principle and resulting
// in better code

class Leaderboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      players: []
    };

    this.removePlayer = this.removePlayer.bind(this);
    this.addPlayer = this.addPlayer.bind(this);
  }

  sortPlayers(players) {
    // sort the players
    // I was having trouble getting the sort to work correctly
    const set = players.sort((player1, player2) => {
        // sorting by score
        if (player1.score > player2.score) return 1;
        if (player1.score < player2.score) return -1;

        // sorting by name
        if (player1.lastName > player2.lastName) return 1;
        if (player1.lastName < player2.lastName) return -1;
    });

    this.setState({
      players: set
    })
  }

  removePlayer(id, event) {
    this.sortPlayers(this.state.players.filter(player => player.id !== id ));
  }

  addPlayer(firstName, lastName, score) {
    this.sortPlayers(
      [...this.state.players,
        {firstName, lastName, score, id: (this.state.players.length+1)}
      ]
    )
  }

  playerList() {
    return this.state.players.map((player) => {
          return (<tr key={player.id}>
            <td>
              {player.lastName}, {player.firstName}
            </td>
            <td>
              {player.score}
            </td>
            <td>
              <button
                type="button"
                onClick={(e) => this.removePlayer(player.id, e)}>
                  Delete
              </button>
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
        <AddPlayer submitForm={this.addPlayer} />
      </div>
    );
  }
}

export default Leaderboard;
