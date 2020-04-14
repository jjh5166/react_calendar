import styled from 'styled-components';
import { transparentize } from 'polished';

export const OtdContainer = styled.div`
  z-index: 1;
`
export const OtdContent = styled.div`
  border-radius: 30px;
  background: ${props => transparentize(0.2, props.theme.mainColor)};
  border: solid ${props => props.theme.fifthColor} 2px;
  margin: 0 6px;
  p{
    margin: 14px;
  }
`