import PropTypes from 'prop-types';
import React from 'react';
import { Button, Wrapper } from './FeedbackOptions.styled';

const FeedbackOptions = ({
  handleDecrement,
  handleIncrement,
  handleNeutral,
}) => (
  <>
    <Wrapper>
      <Button onClick={handleIncrement}>Good</Button>
      <Button onClick={handleNeutral}>Neutral</Button>
      <Button onClick={handleDecrement}>Bad</Button>
    </Wrapper>
  </>
);

FeedbackOptions.propTypes = {
  handleIncrement: PropTypes.func.isRequired,
  handleNeutral: PropTypes.func.isRequired,
  handleDecrement: PropTypes.func.isRequired,
};

export default FeedbackOptions;
