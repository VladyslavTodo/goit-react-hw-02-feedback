import { Component } from 'react';
import { Base } from './App.styled';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification ';
import Section from 'components/Section/Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };
  handleDecrement = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  handleNeutral = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return ((this.state.good * 100) / this.countTotalFeedback()).toFixed(2);
  };

  render() {
    return (
      <Base>
        <Section title="Please leave feedback">
          <FeedbackOptions
            handleDecrement={this.handleDecrement}
            handleIncrement={this.handleIncrement}
            handleNeutral={this.handleNeutral}
          />
        </Section>
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              countTotalFeedback={this.countTotalFeedback}
              countPositiveFeedbackPercentage={
                this.countPositiveFeedbackPercentage
              }
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
      </Base>
    );
  }
}

export default App;
