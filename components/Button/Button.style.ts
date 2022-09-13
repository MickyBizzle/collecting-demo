import { ButtonType } from './Button.type';
import styled from '@emotion/styled';

const BaseButton = styled.button`
  font-family: 'lato';
  font-weight: bold;
  font-size: 15px;
  padding: 7.5px 15px;
  letter-spacing: 1px;
  border-radius: 5px;
  line-height: 1.5;
  color: white;
  text-transform: uppercase;
  cursor: pointer;
  border-width: 2px;
  border-style: solid;
  transition: background-color 0.2s ease;
`;

export const StyledButton = styled(BaseButton)<Pick<ButtonType, 'variant'>>`
  background-color: ${({ theme, variant }) => {
    switch (variant) {
      case 'primary':
        return theme.colors.red;
      case 'secondary':
        return theme.colors.blue;
    }
  }};

  border-color: ${({ theme, variant }) => {
    switch (variant) {
      case 'primary':
        return theme.colors.red;
      case 'secondary':
        return 'white';
    }
  }};

  :hover {
    background-color: ${({ variant }) => variant === 'secondary' && 'white'};
    color: ${({ theme, variant }) =>
      variant === 'secondary' && theme.colors.red};
    filter: ${({ variant }) => variant === 'primary' && 'brightness(0.9)'};
  }
`;
