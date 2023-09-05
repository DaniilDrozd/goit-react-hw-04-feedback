import React from 'react';
import propTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => (
  <ul style={{ listStyle: 'none', display: 'grid', gap: 30, fontSize: 30 }}>
    <li style={{ color: 'green' }}>Good: {good}</li>
    <li style={{ color: 'blue' }}>Neutral: {neutral}</li>
    <li style={{ color: 'red' }}>Bad: {bad}</li>
    <li style={{ color: 'black' }}>Total: {total}</li>
    <li style={{ color: 'black' }}>Positive feedback: {positiveFeedback}%</li>
  </ul>
);

Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  positiveFeedback: propTypes.number.isRequired,
};

export default Statistics;
