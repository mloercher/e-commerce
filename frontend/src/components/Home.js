import React from 'react'
import { useGetAllProductsQuery } from '../features/productsApi';

function Home() {
    const { data, error, isLoading } = useGetAllProductsQuery()
    return (
        <div className='home-container'>
            {isLoading ? (<p>Loading...</p>) : error ? (<p>An Error Occurred...</p>)
                : (
                    <>
                        <h2>New Arrivals</h2>
                        <div className='products'>
                            {data?.map(product => <div key={product.id} className='product'>
                            <h3 className='product-name'>{product.name}</h3>
                            <img src={product.img} alt={product.name} />
                            <div className='details'>
                                <span >{product.desc}</span>
                                <span className='price'>${product.price}</span>
                            </div>
                            <button>Add to Cart</button>
                            </div>)}
                        </div>
                    </>
                )}
        </div>
    )
}

export default Home;