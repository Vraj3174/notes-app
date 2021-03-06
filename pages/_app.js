// import App from 'next/app'
import 'semantic-ui-css/semantic.min.css'
import Layout from '../components/Layout';
import '../css/style.css';
import '../css/style.scss';
import {Theme} from "../theme"
import { ThemeProvider } from '@material-ui/core/styles';


function MyApp({ Component, pageProps }) {

    return (
    <Layout>
        <ThemeProvider theme={Theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    </Layout>
    )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;