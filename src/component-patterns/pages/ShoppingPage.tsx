import { ProductCard,ProductImage,ProductTitle,ProductButtons   } from '../components';
import '../styles/custom-styles.css'
import styles from '../styles/styles.module.css'
export const ShoppingPage = () => {
    const product ={
        id:'1',
        title:'Coffe-Mug-card',
        img:'./coffee-mug.png'
        

    }
    console.log(styles)
    return (
        <div >
            <h1>ShoppinPage</h1>
            <div style={{
                display: 'flex',
                flexDirection:'row',
                flexWrap:'wrap'
            }}>

            <ProductCard product={product} className='bg-dark'>
                <ProductCard.Image className='custom-image'/>
                <ProductCard.Title className='text-white text-bold'  title="holiboli"/>
                <ProductCard.Buttons className='custom-buttons'/>
            </ProductCard>
            <ProductCard product={product} className='bg-dark'>
                <ProductImage className='custom-image'/>
                <ProductTitle className='text-white text-bold' />
                <ProductButtons className='custom-buttons'/>
            </ProductCard>
            <ProductCard product={product} style={{ backgroundColor:'red'}} >
                <ProductImage style={{ boxShadow:'10px 10px 10px rgba(0,0,0,0.2)'}} />
                <ProductTitle style={{ fontWeight:'bold'}}  />
                <ProductButtons style={{ display:'flex',justifyContent:'end'}} />
            </ProductCard>




            
            </div>
            
        </div>
    )
}