import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { GlobalStyle } from '@/styles/GlobalStyle';
import 'normalize.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
