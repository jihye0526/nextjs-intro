import NavBar from 'components/NavBar'

export default function Home(){
    return (
        <>
            <NavBar />
            <h1>Hello</h1>
            <style jsx>{`
                a {
                    color: white; // nav랑 독립적이기 때문에 동작하지 않음
                }
            `}</style>
        </>
    );
}