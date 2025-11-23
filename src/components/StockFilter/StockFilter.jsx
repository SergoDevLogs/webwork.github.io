import styles from './stock__filter.module.scss'
import clsx from "clsx";

export default function StockFilter() {
    return (
        <>
            <div className={styles.filter}>
                <p className={styles.filter__title}>Сортировать по..</p>
                <div className={styles.filter__body}>
                    <p className={styles.filter__el}>Номенклатура</p>
                    <p className={clsx(styles.filter__el,styles.filter__el_active)}>Серия</p>
                    <p className={styles.filter__el}>Остаток</p>
                </div>
            </div>
        </>
    )
}