import propTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div style={{ display: 'flex', gap: 10 }}>
    {options.map(option => (
      <button
        key={option}
        style={{
          width: 100,
          padding: 5,
          fontSize: 20,
          borderRadius: 5,
          backgroundColor: 'bisque',
        }}
        type="button"
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: propTypes.array.isRequired,
  onLeaveFeedback: propTypes.func.isRequired,
};

export default FeedbackOptions;
