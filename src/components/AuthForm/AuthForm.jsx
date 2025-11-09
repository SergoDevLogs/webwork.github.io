import styles from './AuthForm.module.scss';
import { useForm } from 'react-hook-form';
import UiButton from "../../uiKit/UiButton/UiButton.jsx";
import clsx from "clsx";

export default function AuthForm() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <>
            <form className={styles.auth__form} onSubmit={handleSubmit(onSubmit)}>
                <div className="group">
                    <label className={styles.input__names}>Логин</label>
                    <input type={"text"} className={clsx(styles.auth__input , errors.Login && styles.auth__input_err)} placeholder={'Введите логин'}
                           {...register("Login", {
                               required: "Заполните поле",
                               pattern: {
                                   value: /^[a-zA-Z0-9_]{1,20}$/,
                                   message: "Неккоректные символы"
                               }
                           })} />
                </div>
                {errors.Login && <span className={styles.text__err}>{errors.Login.message}</span>}

                <div className="group">
                    <label className={styles.input__names}>Пароль</label>
                    <input type={"password"} className={clsx(styles.auth__input , errors.Password && styles.auth__input_err)} placeholder={'Введите пароль'}
                           {...register("Password", {
                               required: "Заполните поле",
                           })} />
                </div>
                {errors.Password && <span className={styles.text__err}>{errors.Password.message}</span>}
                <UiButton type={'submit'}>Войти</UiButton>
            </form>
        </>
    );
}