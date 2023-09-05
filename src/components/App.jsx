import React, { useState } from 'react';
import Section from './Section/SectionTitle';
import FeedbackOptions from './FeedbackAdd/FeedbackAdd';
import Statistics from './Statistics/Statistics';
import NotificationMessage from './Notification/Notification';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = option => { 
    switch (option) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositivePercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100) || 0;
  };

  return (
    <div>
      <Section title="Please leave your feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']} 
          onLeaveFeedback={handleFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <NotificationMessage message="There is no feedback, sorry!" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positiveFeedback={countPositivePercentage()}
          />
        )}
      </Section>
    </div>
  );
}

export default App;
