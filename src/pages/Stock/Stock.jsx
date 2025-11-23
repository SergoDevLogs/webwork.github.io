import {usePageTitle} from "../../context/PageTitleContext.jsx";
import {useEffect} from "react";
import styles from "./stock.module.scss";
import StockCard from "../../components/StockCard";
import StockFilter from "../../components/StockFilter";

export default function Stock() {
    const {setTitle} = usePageTitle()

    useEffect(()=>{
        setTitle('Остатки на складе')
    },[])


    return(
        <>
           <div className={styles.stock__wrap}>
               <div className={styles.stock__table}>
                   <StockCard nomenclature={'Номенклатура'} series={'Серия'} count={'Остаток'}/>
                   <StockCard nomenclature={'CPE 105 CLEAR MATT'} series={'п.44703 от 09.10.25 до 09.04.26'} count={'420'}/>
                   <StockCard nomenclature={'CPE 105 CLEAR MATT'} series={'п.44703 от 09.10.25 до 09.04.26'} count={'420'}/>
                   <StockCard nomenclature={'CPE 105 CLEAR MATT'} series={'п.44703 от 09.10.25 до 09.04.26'} count={'420'}/>
                   <StockCard nomenclature={'CPE 105 CLEAR MATT'} series={'п.44703 от 09.10.25 до 09.04.26'} count={'420'}/>
                   <StockCard nomenclature={'CPE 105 CLEAR MATT'} series={'п.44703 от 09.10.25 до 09.04.26'} count={'420'}/>
                   <StockCard nomenclature={'CPE 105 CLEAR MATT'} series={'п.44703 от 09.10.25 до 09.04.26'} count={'420'}/>
                   <StockCard nomenclature={'CPE 105 CLEAR MATT'} series={'п.44703 от 09.10.25 до 09.04.26'} count={'420'}/>
                   <StockCard nomenclature={'CPE 105 CLEAR MATT'} series={'п.44703 от 09.10.25 до 09.04.26'} count={'420'}/>
                   <StockCard nomenclature={'CPE 105 CLEAR MATT'} series={'п.44703 от 09.10.25 до 09.04.26'} count={'420'}/>
                   <StockCard nomenclature={'CPE 105 CLEAR MATT'} series={'п.44703 от 09.10.25 до 09.04.26'} count={'420'}/>
                   <StockCard nomenclature={'CPE 105 CLEAR MATT'} series={'п.44703 от 09.10.25 до 09.04.26'} count={'420'}/>
                   <StockCard nomenclature={'CPE 105 CLEAR MATT'} series={'п.44703 от 09.10.25 до 09.04.26'} count={'420'}/>
                   <StockCard nomenclature={'CPE 105 CLEAR MATT'} series={'п.44703 от 09.10.25 до 09.04.26'} count={'420'}/>
                   <StockCard nomenclature={'CPE 105 CLEAR MATT'} series={'п.44703 от 09.10.25 до 09.04.26'} count={'420'}/>
                   <StockCard nomenclature={'CPE 105 CLEAR MATT'} series={'п.44703 от 09.10.25 до 09.04.26'} count={'420'}/>
                   <StockCard nomenclature={'CPE 105 CLEAR MATT'} series={'п.44703 от 09.10.25 до 09.04.26'} count={'420'}/>
               </div>
               <div>
                   <StockFilter/>
               </div>
           </div>
        </>
    )
}