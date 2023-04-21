import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { Header } from '@/component/header'
import { Footer } from '@/component/footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Header/>
    <div>
        <Component {...pageProps} />
    </div>
    <Footer/>
    </>
  )
}
