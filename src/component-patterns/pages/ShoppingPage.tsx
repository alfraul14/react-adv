import { ProductCard,ProductImage,ProductTitle,ProductButtons   } from '../components';

import styles from '../styles/styles.module.css'
export const ShoppingPage = () => {
    const product ={
        id:'1',
        title:'Coffe-Mug-card',
        img:'./coffee-mug.png'
        

    }
    console.log(styles)
    return (
        <div>
            <h1>ShoppinPage</h1>
            <div style={{
                display: 'flex',
                flexDirection:'row',
                flexWrap:'wrap'
            }}>

            <ProductCard product={product}>
                <ProductCard.Image/>
                <ProductCard.Title title="holiboli"/>
                <ProductCard.Buttons/>
            </ProductCard>
            <ProductCard product={product}>
                <ProductImage/>
                <ProductTitle/>
                <ProductButtons/>
            </ProductCard>




            
            </div>
            
        </div>
    )
}