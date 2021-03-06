import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Root = styled.div`
  text-align: center;
`;

const H1 = styled.h1`
  font-size: 4rem;
  color: ${props => props.theme.primaryColor};
`;

const SectionTitle = ({ title }) => {
  return (
    <Root>
      <H1>{title}</H1>
    </Root>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionTitle;
