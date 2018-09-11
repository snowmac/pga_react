import React, { Component } from 'react';

class AddPlayer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      score: 0
    }

    this.handleChange = this.handleChange.bind(this);
    this.pushUpPlayer = this.pushUpPlayer.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  pushUpPlayer(event) {
    event.preventDefault();

    if(
       this.state.firstName === '' ||
       this.state.lastName === '' ||
       this.state.score === 0) {
      // guard statement so we don't push up crap
    alert('Please supply a First Name, Last Name and a Score then try it again!');
      return;
    }

    this.props.submitForm(
      this.state.firstName,
      this.state.lastName,
      this.state.score
    );

    this.setState({
      firstName: "",
      lastName: "",
      score: 0
    });
  }

  render() {
    return (
        <div id="add-player-area">
          <form onSubmit={this.pushUpPlayer}>
            <fieldset>
              <legend>Add a player!</legend>
              <input
                type="text"
                name="firstName"
                placeholder="First Name!"
                onChange={this.handleChange}
                value={this.state.firstName}
               />

              <input
                type="text"
                name="lastName"
                placeholder="Last Name!"
                onChange={this.handleChange}
                value={this.state.lastName}
               />

              <input
                type="text"
                name="score"
                placeholder="Score!"
                onChange={this.handleChange}
                value={this.state.score}
              />

              <button
                type="submit">
                  Add Player!
              </button>
            </fieldset>
          </form>
        </div>);
  }
};

export default AddPlayer;
