import styles from './OrderBlock.module.scss'

export default function OrderBlock() {
    return (
        <>
            <div className={styles.block__wrap}>
                <p className={styles.stat}>Статистика</p>
                <div className={styles.count}>Всего заказов - 200</div>
                <div className={styles.stat__wrap}>
                    <div className={styles.stat__el}>
                        <p className={styles.done}>Отгружено</p>
                        <p>50</p>
                    </div>
                    <div className={styles.stat__el}>
                        <p className={styles.not__ready}>Готово, но не отгружено</p>
                        <p>50</p>
                    </div>
                    <div className={styles.stat__el}>
                        <p className={styles.in__process}>В производстве</p>
                        <p>50</p>
                    </div>
                    <div className={styles.stat__el}>
                        <p className={styles.canceled}>Отменено</p>
                        <p>50</p>
                    </div>
                </div>
            </div>
        </>
    )
}