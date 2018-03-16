import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ title, subtitle, detail, actionIcon, actionLabel }) => (
  <div className="card">
    <div className="card__title">{title}</div>
    <div className="card__subtitle">{subtitle}</div>
    <div className="card__detail">{detail}</div>
    <div className="card__divider" />
    <div className="card__action">
      <span className="material-icons card__action__icon">{actionIcon}</span>
      <span className="card__action__label">{actionLabel}</span>
    </div>
  </div>
);

Card.defaultProps = {
  title: '',
  subtitle: '',
  detail: '',
  actionIcon: <i>add_circle</i>,
  actionLabel: 'Click me'
};

Card.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  detail: PropTypes.string,
  actionIcon: PropTypes.element,
  actionLabel: PropTypes.string
};

export default Card;
