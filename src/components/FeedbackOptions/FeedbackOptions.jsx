import PropTypes from 'prop-types';
import React from 'react';
import { Button, Wrapper } from './FeedbackOptions.styled';

const FeedbackOptions = ({ onLeaveFeedback, options }) => (
  <>
    <Wrapper>
      {Object.keys(options).map(item => {
        return (
          <li key={item}>
            <Button onClick={() => onLeaveFeedback(item)}>
              <span>{item}</span>
            </Button>
          </li>
        );
      })}
    </Wrapper>
  </>
);

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
