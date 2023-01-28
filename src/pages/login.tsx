import Button from '@/components/Button';
import Input from '@/components/Input';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import SvgWaveBg from '@/components/WaveBg';
import * as S from '@/styles/pages/login.styles';
import { Formik, Form, Field } from 'formik';
import Image from 'next/image';

const validateEmail = (value: string) => {
  let error;

  if (value.length === 0) {
    error = 'Erro';
  }

  return error;
};

const validatePassword = (value: string) => {
  let error;

  if (value.length === 0) {
    error = 'Erro';
  }

  return error;
};

const LoginPage = () => {
  return (
    <S.Main>
      <S.Section>
        <S.Separator />
        <SvgWaveBg
          width='100%'
          height='100%'
          color='hsl(24,94.0%,50.0%)'
          viewBox='0 0 8133.333 5556'
          preserveAspectRatio='xMinYMin slice'
        />
      </S.Section>
      <S.Section padding='12px 24px'>
        <ThemeSwitcher margin='0 0 6px auto' />
        <S.FormContainter>
          <S.FormTitle>Login</S.FormTitle>
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={() => {}}
          >
            {({ errors, touched }) => (
              <S.Form as={Form}>
                <S.InputWrapper>
                  <Field
                    component={Input}
                    name='email'
                    placeholder='E-mail'
                    validate={validateEmail}
                  />
                  {errors.email && touched.email ? (
                    <S.Error>Por favor insira um e-mail válido</S.Error>
                  ) : null}
                </S.InputWrapper>
                <S.InputWrapper>
                  <Field
                    component={Input}
                    name='password'
                    placeholder='Senha'
                  />
                  {errors.password && touched.password ? (
                    <S.Error>Por favor insira uma senha válida</S.Error>
                  ) : null}
                </S.InputWrapper>
                <Button>Entrar</Button>
              </S.Form>
            )}
          </Formik>
        </S.FormContainter>
      </S.Section>
    </S.Main>
  );
};

export default LoginPage;
