import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { GlobalStyle } from '@/styles/GlobalStyle';
import { Context as ResponsiveContext } from 'react-responsive';
import 'normalize.css';
import { Toaster } from 'react-hot-toast';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Toaster />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
