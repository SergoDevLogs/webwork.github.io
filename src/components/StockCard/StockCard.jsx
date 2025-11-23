import styles from "./stock__card.module.scss";
export default function StockCard({nomenclature,series,count}) {
    return (
        <>
            <div className={styles.card}>
                <div className={styles.card__el}>{nomenclature}</div>
                <div className={styles.card__el}>{series}</div>
                <div className={styles.card__el}>{count}</div>
            </div>
        </>
    )
}