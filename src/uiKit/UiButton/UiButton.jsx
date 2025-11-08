import styles from './UiButton.module.scss'
export default function UiButton({onClick,type,children}){
    return(
        <button className={styles.ui__button} onClick={onClick} type={type}>{children}</button>
    )
}