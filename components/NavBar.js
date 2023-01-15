import Link from "next/link";
import { useRouter } from "next/router";
import styles from './NavBar.module.css'

export default function NavBar(){
    const router = useRouter();

    return (
        <nav>
            <Link href="/" legacyBehavior>
                <a className={`${styles.link} ${router.pathname === "/" ? styles.active : ""}`}>Home</a>  
                {/* styles.link는 항상 적용하고 router.pathname이 일치할때 styles.active를 동작하도록 함 */}
            </Link>
            <Link href="/about" legacyBehavior>
                <a className={[
                    styles.link,
                    router.pathname === "/about" ? styles.active : "",
                ].join(" ")}
            >
                About
            </a>
            </Link>
        </nav>
    )
}