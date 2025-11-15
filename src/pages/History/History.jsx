import {usePageTitle} from "../../context/PageTitleContext.jsx";
import {useEffect} from "react";

export default function History() {
    const {setTitle} = usePageTitle();

    useEffect(()=>{
        setTitle('История заказов')
    },[])

    return(
        <>

        </>
    )
}