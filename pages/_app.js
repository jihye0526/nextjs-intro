import NavBar from 'components/NavBar';
// import "../styles/globals.css" 다른파일에서는 동작을 하지 않음. _app.js에서만 동작

export default function App({Component, pageProps}){
    return (
        <>
            <NavBar />
            <Component {...pageProps} />
            <style jsx global>{`
                a {
                    color: white;
                }
            `}</style>
        </>
    );
}