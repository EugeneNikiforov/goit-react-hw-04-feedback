import React from 'react';
import PropTypes from 'prop-types';
import styles from './Section.module.scss';

export default function Section({ children, title }) {
  return (
    <div className={styles.section}>
        <div className={styles.sectionItem}>
            <h2 className={styles.sectionTitle}>{title}</h2>
        </div>
        {children}
    </div>
  )
};

Section.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element.isRequired
  ]),
  title: PropTypes.string.isRequired,
}