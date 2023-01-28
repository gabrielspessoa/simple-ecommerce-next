import { ButtonHTMLAttributes, forwardRef } from 'react';
import * as S from './styles';

const Button = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement>
>((props, ref) => {
  return (
    <S.Button ref={ref} {...props}>
      {props.children}
    </S.Button>
  );
});

Button.displayName = 'ButtonComponent';

export default Button;
