import React from 'react';
import PropTypes from 'prop-types';
import styles from './Notification.module.scss';

// export default function Notification({ children, countTotalFeedback, message }) {
//     if (!countTotalFeedback) {
//         return (<div className={styles.notification}>{message}</div>)
//     } else {
//         return (<div>{children}</div>)
//     };
// };

export default function Notification({ message }) {
  return <div className={styles.notification}>{message}</div>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired
};

// Notification.propTypes = {
//     children: PropTypes.oneOfType([
//     PropTypes.arrayOf(PropTypes.element),
//     PropTypes.element.isRequired
//   ]),
//     message: PropTypes.string.isRequired,
//     countTotalFeedback: PropTypes.number.isRequired
// }
