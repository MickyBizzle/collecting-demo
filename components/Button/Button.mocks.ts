import { ButtonType } from './Button.type';

const primary: ButtonType = {
  label: 'Primary',
  variant: 'primary',
  onClick: () => console.log('Clicked!'),
};

const secondary: ButtonType = {
  label: 'Secondary',
  variant: 'secondary',
  onClick: () => console.log('Clicked!'),
};

export const mockButtonProps = {
  primary,
  secondary,
};
