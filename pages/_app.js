import Layout from "../components/Layout";
import "../styles/globals.css";

export default function myApp({Component, pageProps}){
    return <Layout>
        <Component {...pageProps}/>
    </Layout>
}