import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'react-feather';
import * as S from './styles';

const ThemeSwitcher = (props: {
  margin?: string;
  absolute?: boolean;
  inset?: string;
}) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const switchTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  if (!mounted) return <S.Placeholder {...props} />;

  return (
    <>
      <S.Button {...props} onClick={switchTheme}>
        {theme === 'light' ? <Sun size={18} /> : <Moon size={18} />}
      </S.Button>
    </>
  );
};

export default ThemeSwitcher;
