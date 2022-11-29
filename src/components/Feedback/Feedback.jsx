// спочатку зробив окремо, а потім згідно 3 пункту завдання перенос у Арр


// import { React, Component } from 'react';

// import { Section } from 'components/Section/Section';
// import { Notification } from 'components/Notification/Notification';
// import { FeedbackOptions } from 'components/Feedback/FeedbackOptions';
// import { Statistics } from 'components/Feedback/Statistics';

// export class Feedback extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onLeaveFeedback = e => {
//     const name = e.currentTarget.name;
//     this.setState(state => ({
//       ...state,
//       [name]: state[name] + 1,
//     }));
//   };

//   countTotalFeedback = () =>
//     this.state.bad + this.state.good + this.state.neutral;

//   countPositiveFeedbackPercentage = () => {
//     if (this.state.good === 0) {
//       return 0;
//     }
//     return Math.round((this.state.good / this.countTotalFeedback()) * 100);
//   };

//   render() {
//     const { good, neutral, bad } = this.state;

//     return (
//       <>
//         <Section title="Please leave feedbeck">
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onLeaveFeedback={this.onLeaveFeedback}
//           />
//         </Section>
//         <Section title="Statistics">
//           {this.countTotalFeedback() ? (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={this.countTotalFeedback}
//               positivePercentage={this.countPositiveFeedbackPercentage}
//             />
//           ) : (
//             <Notification message="There is no feedback" />
//           )}
//         </Section>
//       </>
//     );
//   }
// }
