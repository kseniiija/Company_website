import '../styles/globals.css'
import '../styles/Hamburger.css'
import Header from '../components/Header'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Header />
    <Component {...pageProps} />
    </>
  )
}

export default MyApp