import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const TextStyle = styled.p`
 ${({ align }) => (align ? `text-align: ${align};` : '')}
  ${({ letterSpacing, theme: { fonts } }) =>
    letterSpacing
      ? `letter-spacing: ${fonts.letterSpacing[letterSpacing]};`
      : ''}
  ${({ lineHeight, theme: { fonts } }) =>
    lineHeight
      ? `line-height: ${fonts.lineHeight[lineHeight]}px;`
      : 'line-height:22px'};
  color: ${({ color, theme: { colors } }) => colors.get(color) || colors.dark};
  font-size: ${({ size, theme: { fonts } }) => fonts.size[size || 'medium']};
  font-weight: ${({ weight, theme: { fonts } }) =>
    fonts.weight[weight || 'regular']};
  ${({ paddingBottom }) =>
    paddingBottom && `padding-bottom:${paddingBottom}rem`}
`;

const Text = ({ children, ...props }) => (
  <TextStyle {...props}>{children}</TextStyle>
);

Text.defaultProps = {
  children: '',
};

Text.propTypes = {
  children: PropTypes.node,
};

export default Text;
