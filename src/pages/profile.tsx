import Button from '@/components/Button';
import { DropdownMenu } from '@/components/DropdownMenu';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import { sand, sandDark } from '@radix-ui/colors';
import { motion } from 'framer-motion';
import { withIronSessionSsr } from 'iron-session/next';
import { sessionOptions } from 'lib/sessions';
import { Router, useRouter } from 'next/router';
import { useEffect } from 'react';
import { Menu } from 'react-feather';
import { toast } from 'react-hot-toast';
import * as S from '../styles/pages/profile.styles';

export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({ req }) {
    const user = req.session.user;

    if (!user) {
      return {
        redirect: {
          destination: '/login',
          permanent: false,
        },
      };
    }

    return {
      props: {
        user,
      },
    };
  },
  sessionOptions
);

export default function Profile(props: any) {
  const router = useRouter();

  return (
    <>
      <S.Container>
        <ThemeSwitcher />
        <DropdownMenu
          items={[
            { text: 'Conta' },
            { text: 'Configurações' },
            {
              text: 'Sair',
              onClick: () => {
                const logout = fetch('/api/logout');
                toast.promise(logout, {
                  loading: 'Saindo...',
                  success: () => {
                    router.push('/login');
                    return 'Deslogado com sucesso';
                  },
                  error: 'Erro desconhecido',
                });
              },
            },
          ]}
        >
          <Button variant='icon'>
            <Menu size={18} />
          </Button>
        </DropdownMenu>
      </S.Container>
      <div style={{ padding: 24 }}>
        <div
          style={{
            fontSize: 20,
            width: 'fit-content',
            margin: '0 auto',
            fontWeight: 'bold',
          }}
        >
          Bem-vindo {props.user.profile.name}
        </div>
        <S.UserInfo>{JSON.stringify(props.user, undefined, 2)}</S.UserInfo>
      </div>
    </>
  );
}
