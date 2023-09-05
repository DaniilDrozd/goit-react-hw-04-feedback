import propTypes from 'prop-types';

const Notification = ({ message }) => (
  <h2 style={{ fontSize: 35 }}>{message}</h2>
);

Notification.prototype = {
  message: propTypes.string.isRequired,
};

export default Notification;
