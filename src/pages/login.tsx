import Button from '@/components/Button';
import Input from '@/components/Input';
import SvgSpinner from '@/components/Spinner';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import SvgWaveBg from '@/components/WaveBg';
import * as S from '@/styles/pages/login.styles';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import Router from 'next/router';
import { toast } from 'react-hot-toast';
import { css } from 'styled-components';

const validateEmail = (value: string) => {
  let error;

  if (value.length <= 6) {
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
  const handleSubmit = async (
    values: {
      email: string;
      password: string;
    },
    formikHelpers: FormikHelpers<{
      email: string;
      password: string;
    }>
  ) => {
    // try {
    const res = fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    }).then(async (res) => {
      if (!res.ok) {
        return Promise.reject('erroaaaaaaaaaaaaaaa');
      }

      return res.json();
    });
    Router.push('/');

    toast.promise(
      res,
      {
        loading: 'Fazendo login...',
        success: () => {
          Router.push('/');
          return 'Login feito com sucesso';
        },
        error: 'Usuário ou senha inválidos',
      },
      {
        style: {
          backgroundColor: 'var(--color-bg-lighter)',
          color: 'var(--body-text)',
        },
      }
    );
  };

  return (
    <S.Main>
      <S.Section flex={1.5} className='md-only'>
        <S.Separator />
        <SvgWaveBg
          width='100%'
          height='100%'
          color='hsl(24,94.0%,50.0%)'
          viewBox='0 0 8133.333 5556'
          preserveAspectRatio='xMinYMin slice'
        />
      </S.Section>
      <S.Section padding='0 24px' align='center' flex={2}>
        <ThemeSwitcher
          margin='0 0 6px auto'
          absolute
          inset='24px 24px auto auto'
        />
        <S.FormContainter>
          <S.FormTitle>E-commerce</S.FormTitle>
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, isSubmitting }) => (
              <S.Form as={Form}>
                <S.InputWrapper>
                  <Field
                    as={Input}
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
                    as={Input}
                    name='password'
                    placeholder='Senha'
                    validate={validatePassword}
                  />
                  {errors.password && touched.password ? (
                    <S.Error>Por favor insira uma senha válida</S.Error>
                  ) : null}
                </S.InputWrapper>
                <Button>
                  {isSubmitting ? (
                    <SvgSpinner color='#ffffff' width='70%' height='70%' />
                  ) : (
                    'Entrar'
                  )}
                </Button>
              </S.Form>
            )}
          </Formik>
        </S.FormContainter>
      </S.Section>
    </S.Main>
  );
};

export default LoginPage;
