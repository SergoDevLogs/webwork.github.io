import {Link} from "react-router-dom";
import styles from './MainLayout.module.scss'

export default function Navbar(){
    return (
        <>
            <div className={styles.wrap__navbar}>
                <img src="/filter.svg" alt=""/>
                <nav>
                        <Link className={''} to={'/orders'}>Мои заказы</Link>
                        <Link className={''} to={'/stock'}>Остатки на складе</Link>
                        <Link className={''} to={'/history'}>История заказов</Link>
                </nav>
                <div className={styles.th}/>
            </div>
        </>
    )
}