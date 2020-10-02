import React, { Component } from 'react';
//import our service
import JeopardyService from "../../jeopardyService";

class Jeopardy extends Component {
  //set our initial state and set up our service as this.client on this component
  constructor(props){
    super(props);
    this.client = new JeopardyService();
    this.state = {
      data: {category:{}},
      score: 0
    }
  }
  //get a new random question from the API and add it to the data object in state
  getNewQuestion() {
    return this.client.getQuestion().then(result => {
      this.setState({
        data: result.data[0]
      })
      console.log(this.state.data.answer)
    })
  }
  //when the component mounts, get a the first question
  componentDidMount() {
    this.getNewQuestion();
  }
  //display the results on the screen
  render() {
    let category= "loading"
    if (this.state.data.category && this.state.data.category.title) {
      category = this.state.data.category.title
    }
    const {loading,} = this.props;

    return (
      <div>
        <strong>Question:</strong> {this.state.data.question} <br/>
        <strong>Value:</strong> {this.state.data.value} <br/>
        <strong>Category:</strong> {this.state.data.category.title} <br/>
        <strong>User Score:</strong> {this.state.score} <br/>
        
        <label htmlFor="answer">Answer </label>
        <input
          type="text"
          name="answer"
          autoFocus
          required
          onChange={this.handleChange}
        />
        { <button type="submit" disabled={loading}>
        Submit
          </button>}
          
      </div>
    );
  }
}
export default Jeopardy;