import { ProductCard,ProductImage,ProductTitle,ProductButtons   } from '../components';
import { products } from '../data/products';
import '../styles/custom-styles.css'

const product= products[0]
export const ShoppingPage = () => {

    return (
        <div >
            <h1>ShoppinPage</h1>
            <div style={{
                display: 'flex',
                flexDirection:'row',
                flexWrap:'wrap'
            }}>
                {
                   
                    <ProductCard 
                     product={ product } 
                     className='bg-dark text-white'
                     initialValues={{
                        count: 7,
                        
                    }}
                     >{({reset,isMaxCountReached,maxCount,increaseBy,count})=>
                        (
                        <>
                            <ProductImage className='custom-image'/>
                            <ProductTitle className='text-white text-bold'  />
                            <ProductButtons  className='custom-buttons '/>
                            <button onClick={ reset }>Reset</button>
                            <button onClick={() => increaseBy( +2 )}>-2</button>
                            {
                               !isMaxCountReached && <button onClick={() => increaseBy( +2 )}>+2</button>
                            }
                            <span>{ count } - { maxCount }</span>
                            </>
                        )
                     }
                    </ProductCard>
                
               
                }
            </div>
        
        
        </div>
    )
}