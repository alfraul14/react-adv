import { ProductCard,ProductImage,ProductTitle,ProductButtons   } from '../components';
import { products } from '../data/products';
import '../styles/custom-styles.css'
import { useShoppingCart } from '../hooks/useShoppingCart';


export const ShoppingPage = () => {
   const  {shoppingCart,OnProductCountChangue }  = useShoppingCart()

    return (
        <div >
            <h1>ShoppinPage</h1>
            <div style={{
                display: 'flex',
                flexDirection:'row',
                flexWrap:'wrap'
            }}>
                {
                    products.map((product)=>(
                    <ProductCard 
                     onChange ={OnProductCountChangue} 
                     key={ product.id }product={ product } 
                     className='bg-dark'
                     value={shoppingCart[product.id]?.count||0}                     
                     >
                        <ProductImage className='custom-image'/>
                        <ProductTitle className='text-white text-bold'  />
                        <ProductButtons  className='custom-buttons'/>
                    </ProductCard>
                
                    ))
                }
            </div>
            <div className='shopping-car'>
                { Object.entries(shoppingCart).map(([key,product])=>(
                      <ProductCard
                       key={key}
                        product={product}
                         className='bg-dark text-white'
                         value={product.count}
                          style={{width:'100px'}}
                         >
                      <ProductImage className='custom-image'/>                       
                      <ProductButtons className='custom-buttons'
                      style={{
                          display:'flex',
                          textAlign:'center'
                      }}/>
                  </ProductCard>

                ))

                }
                  
                  
            </div>
        
        </div>
    )
}