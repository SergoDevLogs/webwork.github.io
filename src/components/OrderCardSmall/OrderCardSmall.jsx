import styles from "./OrderCardSmall.module.scss";

export default function OrderCardSmall() {
    return (
        <>
            <div className={styles.card__wrap}>
                <div className={styles.card__space}>
                    <p className={styles.card__status}>Готово, не отгружено</p>
                    <p>№45252352-452522</p>
                </div>
                <div>
                    <p>Дата доставки: 11.11.25</p>
                </div>
                <div className={styles.card__space}>
                    <p className={styles.card__itemName}>
                        Эмаль полиуретановая текстурированная
                    </p>
                    <p className={styles.card__description}>
                        Подробнее..
                    </p>
                </div>
            </div>
        </>
    )
}