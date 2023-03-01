import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { Header } from '@/component/header'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Header/>
    <div>
        <Component {...pageProps} />
    </div>
    </>
  )
}
