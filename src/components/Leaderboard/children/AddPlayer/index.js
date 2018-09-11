import React, { Component } from 'react';
import './AddPlayer.css';

// Why don't you use Styled Components?
// Generally, I like CSS better. SCSS has nice things like nesting and variables
// but I like the idea of being able to read and see real css. Maybe I'm a grump young man
// but CSS is my jam.

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
    alert('Please supply a First Name, Last name and a Score then try it again!');
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
                type="number"
                name="score"
                placeholder="Score!"
                onChange={this.handleChange}
                value={this.state.score}
                min="0"
                  max="100"
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
