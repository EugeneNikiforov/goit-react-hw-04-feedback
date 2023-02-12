import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.scss';

const FeedbackOptions = ({ onClickGood, onClickNeutral, onClickBad }) => {
    const optionsElements = (
        <>
            <button onClick={() => (onClickGood())} className={styles.counterBtnGood}>
                Good
            </button>
            <button onClick={() => (onClickNeutral())} className={styles.counterBtnNeutral}>
                Neutral
            </button>
            <button onClick={() => (onClickBad())} className={styles.counterBtnEvil}>
                Bad
            </button>
        </>
    );
    return (
        <div className={styles.counterBtnList}>
            {optionsElements}
        </div>
        )
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    onClickGood: PropTypes.func.isRequired,
    onClickNeutral: PropTypes.func.isRequired,
    onClickBad: PropTypes.func.isRequired
  };

// const FeedbackOptions = ({ handleIncrement, options }) => {
//     const optionsElements = options.map(option => (
//         <button key={option} name={option} onClick={handleIncrement}
//         type="button" className={styles.counterBtnGood}>{option}</button>));
//     return (
//         <div className={styles.counterBtnList}>
//             {optionsElements}
//         </div>
//         )
// };

// FeedbackOptions.propTypes = {
//     handleIncrement: PropTypes.func.isRequired,
//     options: PropTypes.array.isRequired
// };