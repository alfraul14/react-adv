import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/ProductInterface";

export const useShoppingCart = () => {
    const [ shoppingCart, setShoppingCart ] = useState<{ [key:string] :ProductInCart }>({  })
    const OnProductCountChangue = ({ count, product }:{ count:number, product: Product }) =>{
        setShoppingCart( oldShopingCart =>{
            const productInCart: ProductInCart = oldShopingCart[product.id] || { ...product,count:0};
            if(Math.max( productInCart.count + count ,0 )>0){
                productInCart.count += count
                return{
                    ...oldShopingCart,
                    [product.id]:productInCart
                }
            }
                 const {[product.id]:deletePar,...rest }=oldShopingCart
                 console.log(deletePar)
         
                 return {...rest}

            // if(count===0){
            //     const {[product.id]:deletePar,...rest }=oldShopingCart
            //    // console.log(deletePar)
         
            //     return {...rest}
            // }
            // return{
            //     ...oldShopingCart,
            //     [product.id]:{...product,count}
            // }
        })
       
    }
    return {
        shoppingCart,
        OnProductCountChangue
    }
}