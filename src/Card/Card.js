import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ title, subtitle, detail, actionButton }) => (
  <div className="card">
    <div className="card__top">
      <div className="card__title">{title}</div>
      <div className="card__subtitle">{subtitle}</div>
      <div className="card__detail">{detail}</div>
    </div>
    {actionButton}
  </div>
);

Card.defaultProps = {
  title: '',
  subtitle: '',
  detail: '',
  actionButton: <button>Action</button>
};

Card.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  detail: PropTypes.string,
  actionButton: PropTypes.element
};

export default Card;
