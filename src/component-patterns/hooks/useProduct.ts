import { useEffect, useRef, useState } from "react"
import { onChangeArgs, Product } from '../interfaces/ProductInterface';

interface useProductsArgs{
    product:Product,
    onChange?:(args:onChangeArgs)=>void,
    value?:number
}
export const useProduct = ({onChange,product,value=0}:useProductsArgs ) => {
    const isControlled = useRef(!!onChange)

    const [counter,setCounter]=useState(value)

    const increaseBy = (value:number) => {
        if(isControlled.current){
            console.log(value)
            return onChange!({count:value,product})
            
        }
        const newValue= Math.max(counter +value,0)
        setCounter(newValue)
        onChange && onChange({count:newValue,product})            
    }
    useEffect(() => {
        setCounter(value)
    }, [value])
    
    return {counter,increaseBy}
}