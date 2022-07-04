import { ReactElement } from "react"
import { Props as ProducTitleProps } from "../components/ProductTitle"
import { Props as ProducImageProps } from "../components/ProductImage"
import { Props as ProducButtonsProps } from "../components/ProductButtons"

export interface Product{
    id:string,
    title:string,
    img?:string,
}
export interface ProductProps{
    //children?: ReactElement|ReactElement[]
    product:Product,
    children:(args:ProductCardHandler)=>JSX.Element,
    className?: string,
    style?: React.CSSProperties,
    onChange?:(args:onChangeArgs) => void,
    value?:number,
    initialValues: InitialValues
}
export interface ProductContextProps{
    increaseBy: (value:number) => void,
    counter:number,
    product:Product,
    maxCount?:number
}
export interface ProductCardHOCProps{

    ({children,product}:ProductProps):JSX.Element,
    Title: (Props:ProducTitleProps) => JSX.Element;
    Image: (Props:ProducImageProps) => JSX.Element;
    Buttons: (Props:ProducButtonsProps) => JSX.Element;

}
export interface onChangeArgs{
    product:Product,
    count:number
}

export interface ProductInCart extends Product{
    count:number
}
export interface InitialValues{
    count?: number,
    maxCount?: number
}
export interface ProductCardHandler{
    count:number;
    isMaxCountReached:boolean,
    maxCount?:number,
    product:Product,
    
    increaseBy:( value:number ) => void,
    reset: () => void

}