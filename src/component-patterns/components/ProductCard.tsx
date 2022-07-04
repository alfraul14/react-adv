import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct';
import { createContext } from 'react';
import { ProductContextProps, ProductProps } from '../interfaces/ProductInterface';


export const ProductContext = createContext({} as ProductContextProps)
const {Provider}=ProductContext
export const ProductCard = ({ children , product , className , style , onChange,value,initialValues }:ProductProps) => {
    const {counter,increaseBy,maxCount,isMaxCountReached,reset}=useProduct({onChange,product,value,initialValues})

    return (
        <Provider value={{ increaseBy,counter,product,maxCount}}>
            <div className={`${ styles.productCard } ${ className }`} style={ style }>
                {
                children({
                    count:counter,
                    isMaxCountReached,
                    maxCount:initialValues?.maxCount,
                    product,
                    
                    increaseBy,
                    reset

                })
                }
            </div>
         </Provider>
    )
}