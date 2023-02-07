import { ButtonHTMLAttributes, forwardRef } from 'react';
import * as S from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string;
  size?: number;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  return (
    <S.Button ref={ref} {...props}>
      {props.children}
    </S.Button>
  );
});

Button.displayName = 'ButtonComponent';

export default Button;
