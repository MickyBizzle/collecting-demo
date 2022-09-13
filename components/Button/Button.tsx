import { StyledButton } from './Button.style';
import { ButtonType } from './Button.type';

const Button: React.FC<ButtonType> = ({
  label,
  variant = 'primary',
  onClick,
}) => (
  <StyledButton onClick={onClick} variant={variant}>
    {label}
  </StyledButton>
);

export default Button;
