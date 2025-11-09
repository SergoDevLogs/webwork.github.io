import styles from './MainLayout.module.scss'
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <>
            <div className='container'>
                <div className={styles.header}>
                        лого
                        <nav>
                            <Link to={"/"}>Начало</Link>
                            <Link to={"/orders"}>Заказы</Link>
                            <Link to={"/"}>я не придумал </Link>
                        </nav>
                    кабинет
                </div>
            </div>
        </>
    );
}