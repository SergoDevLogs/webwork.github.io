import {usePageTitle} from "../../context/PageTitleContext.jsx";
import {useEffect} from "react";
import OrderCardSmall from "../../components/OrderCardSmall/";
import OrderBlock from "../../components/OrderBlock/";
import UiButton from "../../uiKit/UiButton/UiButton.jsx";

export default function Orders() {
    const {setTitle} = usePageTitle()

    useEffect(()=>{
        setTitle('Заказы')
    },[])

    return(
        <>
            <div className="orders__wrapper">
                <div className='orders__scrollbar'>
                    <div className="cards__wrapper">
                        <OrderCardSmall/>
                        <OrderCardSmall/>
                        <OrderCardSmall/>
                        <OrderCardSmall/>
                    </div>
                </div>
                <OrderBlock/>
                <UiButton children={'Загрузить еще...'} classList={'btn__orders__more'} />
            </div>
        </>
    )
}