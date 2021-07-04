import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'mobx-react';
import store from '../stores/Store';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
export default MyApp
