import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct';
import { createContext } from 'react';
import { ProductContextProps, ProductProps } from '../interfaces/ProductInterface';


export const ProductContext = createContext({} as ProductContextProps)
const {Provider}=ProductContext






export const ProductCard = ({children,product}:ProductProps) => {
    const {counter,increaseBy}=useProduct()

    return (
        <Provider value={{ increaseBy,counter,product}}>
            <div className={styles.productCard}>
                {children}
            </div>
         </Provider>
    )
}