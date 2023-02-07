import { red } from '@radix-ui/colors';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';
import {
  ButtonHTMLAttributes,
  forwardRef,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import { Menu } from 'react-feather';
import { toast } from 'react-hot-toast';
import Button from '../Button';
import { DropdownMenu } from '../DropdownMenu';
import { NavigationMenu as Nav } from '../NavigationMenu';
import { SidebarMenu } from '../SidebarMenu';
import * as S from './styles';

export const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  const switchTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const fetchCategories = async () => {
    const categories = await fetch(
      'https://api.escuelajs.co/api/v1/categories',
      { method: 'GET' }
    ).then((res) => res.json());

    return categories;
  };

  useEffect(() => {
    fetchCategories().then((res) => console.log(res));
    setMounted(true);
  }, []);

  return (
    <S.Container>
      <S.Brand>E-commerce</S.Brand>
      <S.ItemWrapper>
        <S.ItemGroup>
          <Nav>
            <Nav.Item>
              <Nav.Link>Início</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Trigger>Categorias</Nav.Trigger>
              <Nav.Content>Teste</Nav.Content>
            </Nav.Item>
          </Nav>
        </S.ItemGroup>
        <S.ItemGroup>
          <DropdownMenu
            items={[
              { text: 'Perfil' },
              { text: 'Modo escuro', onClick: switchTheme },
              { separator: true },
              { text: 'Sair', color: red.red9 },
            ]}
          >
            <ProfileDropdownButton>Perfil</ProfileDropdownButton>
          </DropdownMenu>
        </S.ItemGroup>
      </S.ItemWrapper>
      <SidebarMenu
        items={[
          {
            text: 'Sair',
            color: red.red11,
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
        hideOn={768}
        // themeSwitcher
      >
        <Button variant='icon'>
          <Menu />
        </Button>
      </SidebarMenu>
    </S.Container>
  );
};

const ProfileDropdownButton = forwardRef<
  HTMLButtonElement,
  { children: ReactNode }
>((props, ref) => {
  return (
    <S.ProfileDropdownButton ref={ref} {...props}>
      {props.children}
    </S.ProfileDropdownButton>
  );
});

ProfileDropdownButton.displayName = 'ProfileDropdownButton';
