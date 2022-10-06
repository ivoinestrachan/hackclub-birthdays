import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import {ThemeProvider} from 'next-themes'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
  <ThemeProvider>
  <Navbar />
  <Component {...pageProps} />
  </ThemeProvider>
  </>
  );
}

export default MyApp
