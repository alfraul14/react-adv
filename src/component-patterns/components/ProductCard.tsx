import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct';
import { createContext } from 'react';
import { ProductContextProps, ProductProps } from '../interfaces/ProductInterface';


export const ProductContext = createContext({} as ProductContextProps)
const {Provider}=ProductContext






export const ProductCard = ({ children , product , className , style , onChange,value }:ProductProps) => {
    const {counter,increaseBy}=useProduct({onChange,product,value})

    return (
        <Provider value={{ increaseBy,counter,product}}>
            <div className={`${ styles.productCard } ${ className }`} style={ style }>
                {children}
            </div>
         </Provider>
    )
}