import {usePageTitle} from "../../context/PageTitleContext.jsx";
import {useEffect} from "react";
import styles from './history.module.scss'

export default function History() {
    const {setTitle} = usePageTitle();

    useEffect(()=>{
        setTitle('История заказов')
    },[])

    return(
        <>
            <div className={styles.stock__wrap}>
                <div className={styles.history__table}>
                </div>
            </div>
        </>
    )
}