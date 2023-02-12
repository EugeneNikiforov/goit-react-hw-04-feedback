import React from 'react';
import Section from '../Section/Section';
import Notification from '../Notification/Notification';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import styles from './Statistics.module.scss';

const Statistics = () => {
  const [Good, setGood] = React.useState(0);
  const [Neutral, setNeutral] = React.useState(0);
  const [Bad, setBad] = React.useState(0);
  // const [Total, setTotal] = React.useState(0);
  // const [Positive, setPositive] = React.useState(0);
  
  const handleIncrement = (e) => {
    if (e === 'good') {
      setGood((state) => state + 1);
    } else if (e === 'neutral') {
      setNeutral((state) => state + 1);
    } else if (e === 'bad') {
      setBad((state) => state + 1);
    } else {
      alert("Something happens (-_-)");
    }
  };
  // countTotalFeedback = () => {
  //   return this.state.good + this.state.neutral + this.state.bad;
  // };
  const countTotalFeedback = () => {
    return (Good + Neutral + Bad);
  };
  const countPositiveFeedbackPercentage = () => {
    if (Good) {
      return Math.ceil((Good / countTotalFeedback()) * 100);
    } else {return 0}
  };
  
  return (
    <div className={styles.counter}>
      <Section title="Please leave feedback">
        <FeedbackOptions options={['good', 'neutral', 'bad']} handleIncrement={handleIncrement} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() ? (
        <ul className={styles.counterList}>
            <li className={styles.counterDigit}>Good: {Good}</li>
            <li className={styles.counterDigit}>Neutral: {Neutral}</li>
            <li className={styles.counterDigit}>Bad: {Bad}</li>
            <li className={styles.counterDigit}>Total: {countTotalFeedback()}</li>
            <li className={styles.counterDigit}>Positive feedback: {countPositiveFeedbackPercentage()}%</li>
          </ul>
        ) : (<Notification message="There is no feedback" />)}
      </Section>
    </div>
  )
};

export default Statistics;