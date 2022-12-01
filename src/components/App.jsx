import { useState} from 'react';
import { Notification } from 'components/Notification/Notification';
import { FeedbackOptions } from 'components/Feedback/FeedbackOptions';
import { Statistics } from 'components/Feedback/Statistics';
import { Section } from './Section/Section';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function appFeedbeck(name) {
    switch (name) {
      case 'good':
        setGood(good => good + 1);
        break;
      case 'neutral':
        setNeutral(neutral => neutral + 1);
        break;
      case 'bad':
        setBad(bad => bad + 1);
        break;

      default:
        break;
    }
  }

  const total = good + neutral + bad;
  const positivePercentage = good===0 ? 0 : (good / total) * 100;

  return (
    <>
      <Section title="Please leave feedbeck">
        <FeedbackOptions appFeedbeck={appFeedbeck} />
      </Section>
      <Section title="Statistics">
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
}
