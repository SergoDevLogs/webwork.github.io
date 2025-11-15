import styles from './MainLayout.module.scss'
import {usePageTitle} from "../../context/PageTitleContext.jsx";

export default function Header() {
    const { title } = usePageTitle();
    return (
        <>
            <div className='container'>
                <div className={styles.header}>
                    <p className={styles.title__header}>{title}</p>
                   <div className={styles.text__exit}>
                       <img src="/public/exit.svg" alt=""/>
                       <p className=''>Выйти из профиля</p>
                   </div>
                </div>
            </div>
        </>
    );
}