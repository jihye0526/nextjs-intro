import { useRouter } from "next/router";

export default function Detail(){
    const router = useRouter();

    return (
        <>
            <h2>{router.query.title || "Loading..."}</h2>
        </>
    );
}