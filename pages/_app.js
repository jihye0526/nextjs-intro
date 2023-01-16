import Layout from '@/components/Layout';
import "../styles/globals.css" // 다른파일에서는 동작을 하지 않음. _app.js에서만 동작

export default function App({Component, pageProps}){
    return (
        <>
            <Layout>
                <Component {...pageProps} />
            </Layout>    
        </>
    );
}