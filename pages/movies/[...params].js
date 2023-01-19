import { useRouter } from "next/router";
import Seo from "../../components/Seo"

export default function Detail({params}){
    const router = useRouter();
    const [title, id] = params || [];

    return (
        <>
            <Seo title={title}></Seo>
            <h2>{title}</h2>
        </>
    );
}

// 이름 바꾸면 안됨
export async function getServerSideProps({params: {params}}){
    return {
        props: {
            params
        }
    }
}