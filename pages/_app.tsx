import '../styles/globals.css'
import '../styles.css'
import './header.css'
import './about.css'
 import './home.css'
import './skill.css'
import './footer.css'
import './404.css'
import'./blog/blog.css'
import"bootstrap/dist/css/bootstrap.css"
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
