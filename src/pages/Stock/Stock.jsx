import {usePageTitle} from "../../context/PageTitleContext.jsx";
import {useEffect} from "react";

export default function Stock() {
    const {setTitle} = usePageTitle()

    useEffect(()=>{
        setTitle('Остатки на складе')
    },[])

    return(
        <>

        </>
    )
}