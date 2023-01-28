import { forwardRef, InputHTMLAttributes } from 'react';
import * as S from './styles';

const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  return <S.Input ref={ref} {...props} />;
});

Input.displayName = 'InputComponent';

export default Input;
