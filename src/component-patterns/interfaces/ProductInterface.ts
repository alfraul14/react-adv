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
    children?: ReactElement|ReactElement[]
    product: Product,
    className?: string,
    style?: React.CSSProperties,
    onChange?:(args:onChangeArgs) => void,
    value?:number
}
export interface ProductContextProps{
    increaseBy: (value:number) => void,
    counter:number,
    product:Product
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