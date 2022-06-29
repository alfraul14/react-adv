import { ReactElement } from "react"

export interface Product{
    id:string,
    title:string,
    img?:string,
}
export interface ProductProps{
    children?:ReactElement|ReactElement[]
    product:Product
}
export interface ProductContextProps{
    increaseBy: (value:number) => void,
    counter:number,
    product:Product
}
export interface ProductCardHOCProps{

    ({children,product}:ProductProps):JSX.Element,
    Title: ({ title }: {
        title?: string 
    }) => JSX.Element;
    Image: ({ img }: {
        img?: string 
    }) => JSX.Element;
    Buttons: () => JSX.Element;

}