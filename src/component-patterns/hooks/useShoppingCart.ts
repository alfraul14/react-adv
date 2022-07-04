import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/ProductInterface";

export const useShoppingCart = () => {
    const [ shoppingCart, setShoppingCart ] = useState<{ [key:string] :ProductInCart }>({  })
    const OnProductCountChangue = ({ count, product }:{ count:number, product: Product }) =>{
        setShoppingCart( oldShopingCart =>{

            if(count===0){
                const {[product.id]:deletePar,...rest }=oldShopingCart
               // console.log(deletePar)
         
                return {...rest}
            }
            return{
                ...oldShopingCart,
                [product.id]:{...product,count}
            }
        })
       
    }
    return {
        shoppingCart,
        OnProductCountChangue
    }
}